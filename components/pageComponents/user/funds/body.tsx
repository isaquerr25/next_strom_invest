import { Box, Button, Flex, FormControl, FormErrorMessage,
	FormLabel, Icon, Image, Input, NumberDecrementStepper,
	NumberIncrementStepper, NumberInput, NumberInputField,
	NumberInputStepper, Spinner, Stack, Text, useBoolean
} from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { convertMoney } from '../../../utils/convertMoney';
import FormInput from '../../../utils/formInput';
import { Loading } from '../../../utils/loading';
import { PopMsg } from '../../../utils/PopMsg';
import { useCreateDepositMutation, useCreateTransactionMutation, 
	useUserInfoDocumentQuery } from '../../../generated/graphql';
import { ForexRow } from '../forextoRow';
import { Ticker, Timeline } from 'react-ts-tradingview-widgets';
import { styled } from '@chakra-ui/react';


export const BodyFunds = () =>{

	const userInfoGraph   = useUserInfoDocumentQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;

	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[dataUser?.name, userInfoGraph.loading]);

	return(

		<>
		
			<Box>
				{userInfoGraph.loading && <Loading/>}
			</Box>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>

			</Box>
			<Flex justifyContent={'center'}>


				{dataUser &&
					
						
					<Flex
						className='au'
						flexWrap={'wrap'}
						justifyContent={'center'}
						w='full'
						gap={2}
						p={1.5}
						
					>


						<Flex
							boxShadow='xl'
							width={{base:'full',lg:'50%'}}
							// minW={'500px'}
							flexDirection="column"
							gap={5}
							bg='black'
							borderRadius={10}
							paddingInline={'15px'}
							paddingBlock={'15px'}

						>
							<Text color={'teal.300'} fontSize={'2xl'}>
								Deposit using Bitcoin
							</Text>

							<Text color={'teal.300'} >
								All fields below are mandatory
							</Text>
							<Image
								width={'100px'}
								src='../icon_bitcoin.png'
								alt='Storm Invest'
							/>
							<Box>
								<Flex alignItems={'center'} gap={5}>
									<Text color={'teal.300'}>Trading Amount:</Text>
									<Text color={'teal.300'} fontSize={'xl'}>{convertMoney(Number(dataUser.valuePrice)/100)}</Text>
								</Flex>
								<FormikWallet/>
							</Box>

						</Flex>

						<Flex
							boxShadow='xl'
							flexDirection={'column'}
							w='auto'
							bg='black'
							borderRadius={10}
							minW={'230px'}
							p={5}

							gap={5}
							flex={1}
						>
							<DescriptionAndRestriction/>

						</Flex>
						<Box  pointerEvents='none' w={{base:'full',sm:'auto',lg:'30%'}} className='forexShowcss' borderColor={'teal.300'} borderStyle='solid' borderWidth='2px' bg='black' borderRadius={10}>
							<Timeline isTransparent colorTheme="dark" feedMode="market" market="crypto" height={400}/>

						</Box>
					</Flex>
					
				}
			</Flex>
			<Box className='forexShowcss' w={'full'} cursor={'none'} pointerEvents='none' display='flex' alignItems={'flex-end'}>
				<Ticker colorTheme="dark"></Ticker>
			</Box>
		</>

	);
};



const DescriptionAndRestriction = () =>(
	<>
		<Text fontSize={'xl'} color='teal.300' >
      Important Information
		</Text>
		<Text color='teal.300' >
      Please fill in the required fields below
		</Text>
		<Text color='teal.300' >
      Minimum Deposit is 50 USD
		</Text>
		<Text color='teal.300' >
      Every transfer transaction is made in BTC and converted into USD for us to operate.
		</Text>
	</>

);



interface TypeFormikWithdraw{
	value:string
	action:string
}

function FormikWallet() {

	const [depositGraphql, ] = useCreateDepositMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');
	const [popFunction, setPopFunction] = useState<()=>void>();
	const [popNameButton, setPopNameButton] = useState<string|null>();


	return (
		<>
			<Formik
				initialValues={{
					value: '0',
					action:'DEPOSIT'
				}}

				onSubmit={async (values: TypeFormikWithdraw, { setSubmitting, setErrors }) => {

					let valuePrice = Number(values.value.replace(/[\$]|[,]/g,''));
					valuePrice = valuePrice*100;

					if(valuePrice >= 5000){
						setSubmitting(true);
						const result = await depositGraphql({variables:{

							action:values.action,
							value:valuePrice

						}});

						setSubmitting(false);

						const resultOpen = result.data!.createDeposit;
						if (resultOpen.status != null){

							if (resultOpen.status[0].field=='success' ) {
								setErrorMsg('Transaction created click on button to go to payment screen');
								setTitleShow('Payment');
								setPopFunction(()=>{window.open(resultOpen.url ?? '#', '_blank');});
								setPopNameButton('Payment Screen');
								setPopShow.on();

							} else {
								setErrorMsg(resultOpen.status[0].message  ?? '');
								setTitleShow('Error');
								setPopFunction(()=>{'#';});
								setPopShow.on();
							}
						}else{
							setErrorMsg('Connection Bad');
							setTitleShow('Error');
							setPopShow.on();
						}

					}else{

						setErrorMsg('Value under 50 dollars');
						setTitleShow('Error');
						setPopShow.on();
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form >
						<Stack spacing={4}>
							<Box>
								<Text color='teal.300' >Amount</Text>
								<FormInput type="number" placeholder='0' name="value" inputIcon={IoWalletOutline} />
							</Box>
							<Stack spacing={10}>
								<Button colorScheme='teal' variant='outline'
									onClick={()=>{console.log('das');}}
									type="submit"
									leftIcon={isSubmitting ? <Spinner /> : <Icon as={GiWallet} />}
									disabled={isSubmitting}
								>
									Deposit
								</Button>
							</Stack>
						</Stack>
					</Form>
				)}

			</Formik>
			<PopMsg nameButton={popNameButton} title={titleShow} msg={errorMsg} display={popShow} hide={()=>{setPopShow.off();popFunction;}}/>

		</>
	);
}