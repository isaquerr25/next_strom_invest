import { Box, Button, Flex, FormControl, FormErrorMessage,
	FormLabel, Icon, Image, Input, NumberDecrementStepper,
	NumberIncrementStepper, NumberInput, NumberInputField,
	NumberInputStepper, Spinner, Stack, Text, useBoolean
} from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import { useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import FormInput from '../../components/utils/formInput';
import { PopMsg } from '../../components/utils/PopMsg';
import { useCreateDepositMutation, useCreateTransactionMutation } from '../generated/graphql';

export const BodyFunds = () =>{
	return(

		<Flex
			flexWrap={'wrap'}
			justifyContent={'center'}
			gap={2}
			p={2}

		>
			<Flex
				boxShadow='xl'
				width={{base:'full',md:'65%'}}
				minW={'500px'}

				flexDirection="column"
				gap={5}
				bg='gray.200'
				borderRadius={10}
				paddingInline={'15px'}
				paddingBlock={'15px'}

			>
				<Text fontSize={'2xl'}>
            Deposit using Bitcoin
				</Text>
					
				<Text>
            All fields below are mandatory
				</Text>
          	<Image
					width={'100px'}
					src='./icon_bitcoin.png'
					alt='Storm Invest'
				/>
				<Box>
					<Flex alignItems={'center'}>
						<FormLabel htmlFor='name'>Trading Amount:</FormLabel>
						<FormLabel fontSize={'xl'}>5445.74(USD)</FormLabel>
					</Flex>
					<FormikWallet/>
				</Box>

			</Flex>



			<Flex
				boxShadow='xl'
				flexDirection={'column'}
				w='auto'
				bg='gray.200'
				borderRadius={10}
				minW={'275px'}
				p={5}

				gap={5}
				flex={1}
			>
				<DescriptionAndRestriction/>

			</Flex>

		</Flex>

	);
};



const DescriptionAndRestriction = () =>(
	<>
		<Text fontSize={'xl'}>
      Important Information
		</Text>
		<Text >
      Please fill in the required fields below
		</Text>
		<Text>
      Minimum Deposit is 50 USD
		</Text>
		<Text>
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

				onSubmit={async (values: TypeFormikWithdraw, { setSubmitting, setresultOpen }) => {

					const valuePrice = Number(values.value.replace(/[\$]|[,]/g,''));
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
								<FormLabel>Amount</FormLabel>
								<FormInput type="number" placeholder='0' name="value" inputIcon={IoWalletOutline} />
							</Box>
							<Stack spacing={10}>
								<Button
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500',
									}}
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