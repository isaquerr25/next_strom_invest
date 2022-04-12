import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Stack, Text, useBoolean } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { convertMoney } from '../../../components/utils/convertMoney';
import FormInput from '../../../components/utils/formInput';
import { Loading } from '../../../components/utils/loading';
import { PopMsg } from '../../../components/utils/PopMsg';
import { validationWithdraw } from '../../../components/utils/validateInputs';
import { useCreateTransactionMutation, useUpdateWalletMutation, useUserInfoDocumentQuery } from '../../generated/graphql';


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
					h='350px'

					flexDirection="column"
					gap={5}
					bg='black'
					borderRadius={10}
					paddingInline={'15px'}
					paddingBlock={'15px'}
					justifyContent='space-around'
				>

					<Text color='teal' fontSize={'2xl'}>
          Withdraw
					</Text>

					<Text color={'teal'}>
            All fields below are mandatory
					</Text>
					
					<Flex alignItems={'center'} gap={1}>
						<Text color='teal'>Trading Amount:</Text>
						<Text color='green.500' fontSize={'xl'}>{convertMoney(Number(dataUser.valuePrice)/100)}</Text>
					</Flex>
					<FormikWallet/>
					

				</Flex>



				<Flex
					boxShadow='xl'
					flexDirection={'column'}
					w='auto'
					bg='black'
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
		<Text fontSize={'xl'} color='teal'>
      Important Information
		</Text>
		<Text color='teal'>
      Please fill in the required fields below
		</Text>
		<Text color='teal'>
      Minimum withdraw is 50 USD
		</Text>
		<Text color='teal'>
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
					let valuePrice = Number(values.value.replace(/[\$]|[,]/g,''));
					valuePrice = valuePrice*100;

					if(valuePrice >= 5000){
						const result = await transitionGraphql({variables:{
							action:values.action,
							value:valuePrice
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
						<Stack spacing={9}>
							<Box>
								<Text color={'teal'}>Amount:</Text>
								<FormInput type="number" placeholder='0' name="value" inputIcon={IoWalletOutline} />
							</Box>
							<Stack spacing={10}>
								<Button
									variant='outline'
									colorScheme='teal'
									
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