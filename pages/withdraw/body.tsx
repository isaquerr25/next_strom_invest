import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Stack, Text, useBoolean } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import FormInput from '../../components/utils/formInput';
import { Loading } from '../../components/utils/loading';
import { PopMsg } from '../../components/utils/PopMsg';
import { validationWithdraw } from '../../components/utils/validateInputs';
import { useCreateTransactionMutation, useUpdateWalletMutation, useUserInfoDocumentQuery } from '../generated/graphql';


export const BodyWithdraw = () =>{

	const userInfoGraph   = useUserInfoDocumentQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;

	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[userInfoGraph.loading]);



	return(

		<Flex
			flexWrap={'wrap'}
			justifyContent={'center'}
			gap={2}
			p={2}

		>
			{userInfoGraph.loading && <Loading/>}
			{dataUser &&
			<>

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
          Withdraw
					</Text>

					<Text>
            All fields below are mandatory
					</Text>
					<Box>
						<Flex alignItems={'center'}>
							<FormLabel htmlFor='name'>Trading Amount:</FormLabel>
							<FormLabel fontSize={'xl'}>{dataUser.valuePrice}(USD)</FormLabel>
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
			</>
			}
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
      Minimum withdraw is 50 USD
		</Text>
		<Text>
      All withdrawals will be converted from USD to BTC.<br/>
			Remember, withdrawals can take up to 5 business days.<br/>
			After the withdrawal request, confirm the information in the email.
		</Text>
	</>

);


interface TypeFormikWithdraw{
	value:string
	action:string
}

function FormikWallet() {

	const [transitionGraphql, ] = useCreateTransactionMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	return (
		<>
			<Formik
				initialValues={{
					value: '0',
					action:'WITHDRAW'
				}}
				onSubmit={async (values: TypeFormikWithdraw, { setSubmitting, setErrors }) => {
					setSubmitting(true);
					if(Number(values.value.replace('$','')) >= 5000){
						const result = await transitionGraphql({variables:{
							action:values.action,
							value:Number(values.value.replace('$',''))
						}});
						setSubmitting(false);
						const errors = result.data?.createTransaction[0];
						if (errors?.field=='success') {
							setErrorMsg('File sent for analysis');
							setTitleShow('Success');
							setPopShow.on();
						} else {
							setErrorMsg(errors?.message  ?? '');
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
									Withdraw
								</Button>
							</Stack>
						</Stack>
					</Form>
				)}
			</Formik>
			<PopMsg title={titleShow} msg={errorMsg} display={popShow} hide={setPopShow.off}/>

		</>
	);
}