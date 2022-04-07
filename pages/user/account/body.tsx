import { Badge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Stack, styled, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, useBoolean } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import { FaImages } from 'react-icons/fa';
import { validateEmail, validationDocument, validationNewPassword, validationRegister, validationWallet } from '../../../components/utils/validateInputs';
import { jsx, css } from '@emotion/react';
import { containerEqual } from './style';
import { useAddDocumentPictureMutation, useUpdateAuthPasswordMutation, useUpdateWalletMutation, useUserInfoDocumentQuery } from '../../generated/graphql';
import Router  from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Console } from 'console';
import { Loading } from '../../../components/utils/loading';
import FormInput from '../../../components/utils/formInput';
import { PopMsg } from '../../../components/utils/PopMsg';
import { MdCreate } from 'react-icons/md';
import { ImageFile } from 'react-dropzone';
import { UploadFile } from './UploadFile';
import { GiWallet } from 'react-icons/gi';


export const BodyAccount = () =>{

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
			p={5}

		>
			{userInfoGraph.loading && <Loading/>}

			{dataUser &&
			<>
				<InfoUser
					name={dataUser?.name!}
					email={dataUser?.email!}
					wallet={dataUser?.wallet!}
					document={dataUser?.document!}
				/>

				<DescriptionAndRestriction/>
				<ValidateDocument statusDocument={dataUser?.document!}/>
				<ChangeWallet/>
				<NewPassword/>
			</>
			}
		</Flex>

	);
};

interface typeInfoUser{
	name:string
	wallet:string
	email:string
	document:string
}
const InfoUser = ({name,email,wallet,document}:typeInfoUser) =>(
	<Flex
		css={css`
			${containerEqual};
		`}
		boxShadow='xl'
		paddingInline={'15px'}
		paddingBlock={'15px'}
		flexDirection="column"
		bg='gray.200'
	>
		<Badge  bg='gray.200' color={document === 'VALID' && wallet !='' ? 'green' : 'red'}>{(document != 'VALID' && wallet !='') ? 'NOT VALID' : 'VALID' }</Badge>
		<Text fontSize={'2xl'}>
					Account
		</Text>

		<Text>
			Name: {name}
		</Text>
		<Text>
			Email: {email}
		</Text>
		<Text>
			Wallet BTC: {wallet}
		</Text>
		<Text>
			Document ID: {document}
		</Text>
		<Text>
			Account: Validated
		</Text>
	</Flex>
);

const DescriptionAndRestriction = () =>(
	<Flex
		css={css`
			${containerEqual};
		`}
		boxShadow='xl'
		flexDirection={'column'}
		bg='gray.200'
	>
		<Text fontSize={'xl'}>
			Important Information
		</Text>
		<Text >
			Both the wallet and document fields must
			be validated for the account to be active
		</Text>
	</Flex>

);

const ValidateDocument = ( {statusDocument = '' }) =>{

	return (
		<Flex
			boxShadow='xl'
			css={css`
			${containerEqual};
		`}
			flex={1}
			flexDirection="column"
			paddingInline={'15px'}
			paddingBlock={'15px'}
			bg='gray.200'
		>
			<Text fontSize={'2xl'}>
			Document
			</Text>
			{ statusDocument != '' &&
				<Text fontSize={'xl'} color={statusDocument==='INVALID' ? 'red' : 'green'}>
					{statusDocument}{statusDocument==='PROCESS' ? '...' : ''}
				</Text>
			}

			{(statusDocument === 'INVALID' || statusDocument === '') &&
			<UploadFile/>}
		</Flex>
	);};

const NewPassword = () =>(
	<Flex
		flex={1}
		boxShadow='xl'
		width={{base:'full'}}
		minW={'300px'}

		flexDirection="column"
		gap={5}
		bg='gray.200'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}
	>
		<Text fontSize={'2xl'}>
			Change Password
		</Text>
		<FormikPassword/>
	</Flex>
);

interface ValuesFormikPassword{
	oldPassword:string
	password:string
	confirmPassword?:string
}
function FormikPassword() {
	const [walletMutation, ] = useUpdateAuthPasswordMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	return (
		<>
			<Formik
				initialValues={{
					oldPassword: '',
					password: '',
					confirmPassword: '',

				}}
				validationSchema={validationNewPassword}
				onSubmit={async (values: ValuesFormikPassword, { setSubmitting, setErrors }) => {
					setSubmitting(true);
					const result = await walletMutation({variables:{
						oldPassword: values.oldPassword,
						password: values.password
					}});
					setSubmitting(false);
					const errors = result.data?.updateAuthPassword;
					if (errors?.field=='success') {
						setErrorMsg(errors?.message  ?? '');
						setTitleShow('Success');
						setPopShow.on();
					} else {
						setErrorMsg(errors?.message  ?? '');
						setTitleShow('Error');
						setPopShow.on();
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form >
						<Stack spacing={4}>
							<Box>
								<FormLabel>Old Password</FormLabel>
								<FormInput type="password" placeholder="Old Password" name="oldPassword" />
							</Box>
							<Box>
								<FormLabel>Password</FormLabel>
								<FormInput type="password" placeholder="Password" name="password" />
							</Box>
							<Box>
								<FormLabel>Confirm Password</FormLabel>
								<FormInput type="password" placeholder="Confirm Password" name="confirmPassword" />
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
											Register
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

const ChangeWallet = () =>(
	<Flex

		flex={1}
		boxShadow='xl'
		width='auto'
		minW={'300px'}

		flexDirection="column"
		gap={5}
		bg='gray.200'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}

	>
		<Text fontSize={'2xl'}>
			Change Wallet
		</Text>
		<FormikWallet/>
	</Flex>
);
interface ValuesFormikWallet{
	wallet:string
}
function FormikWallet() {
	const [walletMutation, ] = useUpdateWalletMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	return (
		<>
			<Formik
				initialValues={{
					wallet: '',

				}}
				validationSchema={validationWallet}

				onSubmit={async (values: ValuesFormikWallet, { setSubmitting, setErrors }) => {
					console.log('entrio');
					setSubmitting(true);
					const result = await walletMutation({variables:values});
					setSubmitting(false);
					const errors = result.data?.updateWallet;
					if (errors?.field=='success') {
						setErrorMsg('File sent for analysis');
						setTitleShow('Success');
						setPopShow.on();
					} else {
						setErrorMsg(errors?.message  ?? '');
						setTitleShow('Error');
						setPopShow.on();
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form >
						<Stack spacing={4}>
							<Box>
								<FormLabel>Wallet</FormLabel>
								<FormInput type="text" placeholder="Wallet" name="wallet" />
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
											Register
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