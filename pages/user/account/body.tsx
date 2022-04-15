import { Badge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Stack, styled, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, useBoolean } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import { FaImages } from 'react-icons/fa';
import { validateEmail, validationDocument, validationNewPassword, validationNumber, validationRegister, validationWallet } from '../../../components/utils/validateInputs';
import { jsx, css } from '@emotion/react';
import { containerEqual } from './style';
import { useAddDocumentPictureMutation, useUpdateAuthPasswordMutation, useUpdateNumberTelephoneMutation, useUpdateWalletMutation, useUserInfoDocumentQuery } from '../../generated/graphql';
import Router  from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Console } from 'console';
import { Loading } from '../../../components/utils/loading';
import FormInput from '../../../components/utils/formInput';
import { PopMsg } from '../../../components/utils/PopMsg';
import { MdCreate, MdPhonelinkSetup } from 'react-icons/md';
import { ImageFile } from 'react-dropzone';
import { UploadFile } from './UploadFile';
import { GiWallet } from 'react-icons/gi';
import { MdOutlinePassword } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';


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
					numberTelephone={dataUser?.numberTelephone!}
				/>

				<DescriptionAndRestriction/>
				<ValidateDocument statusDocument={dataUser?.document!}/>
				<ChangeSingleInfoUser/>
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
	numberTelephone:string|null
}
const InfoUser = ({name,email,wallet,document,numberTelephone}:typeInfoUser) =>(
	<Flex
		css={css`
			${containerEqual};
		`}
		boxShadow='xl'
		paddingInline={'15px'}
		paddingBlock={'15px'}
		flexDirection="column"
		bg='black'
	>
		<Badge  bg='black' color={document === 'VALID' && wallet !='' ? 'green' : 'red'}>{(document != 'VALID' && wallet !='') ? 'NOT VALID' : 'VALID' }</Badge>
		<Text color='teal' fontSize={'2xl'}>
					Account
		</Text>

		<Text color='teal'>
			Name: {name}
		</Text>
		<Text color='teal'>
			Email: {email}
		</Text>
		<Text color='teal'>
			Wallet BTC: {wallet}
		</Text>
		<Flex gap={2}>
			<Text color='teal'> 
				Document ID:
			</Text>
			<Text color={document == 'VALID' ? 'green.500' :'red'}> 
				{document}
			</Text>
		</Flex>
		
		<Text color='teal'>
			Phone Number: {numberTelephone ?? '+0'}
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
		bg='black'
	>
		<Text fontSize={'xl'} color='teal'>
			Important Information
		</Text>
		<Text color='teal'>
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
			bg='black'
		>
			<Text fontSize={'2xl'} color='teal'>
			Document
			</Text>
			{ statusDocument != '' &&
				<Text fontSize={'xl'} color={statusDocument==='INVALID' ? 'red' : 'green'}>
					{statusDocument}{statusDocument==='PROCESS' ? '...' : ''}
				</Text>
			}

			{(statusDocument != 'VALID') &&
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
		bg='black'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}
	>
		<Text fontSize={'2xl'} color='teal' >
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
								<Text color='teal'>Old Password</Text>
								<FormInput type="password" placeholder="Old Password" name="oldPassword" />
							</Box>
							<Box>
								<Text color='teal'>Password</Text>
								<FormInput type="password" placeholder="Password" name="password" />
							</Box>
							<Box>
								<Text color='teal'>Confirm Password</Text>
								<FormInput type="password" placeholder="Confirm Password" name="confirmPassword" />
							</Box>
							<Stack spacing={10}>
								<Button
									variant='outline'
									colorScheme='teal'
									onClick={()=>{console.log('das');}}
									type="submit"
									leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdOutlinePassword} />}
									disabled={isSubmitting}
								>
									New Password
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

const ChangeSingleInfoUser = () =>(
	<Flex

		flex={1}
		boxShadow='xl'
		width='auto'
		minW={'300px'}

		flexDirection="column"
		gap={5}
		bg='black'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}

	>
		<Text fontSize={'2xl'} color='teal'>
			Change Wallet
		</Text>
		<FormikWallet/>
		<Text fontSize={'2xl'} color='teal'>
			Change Phone Number
		</Text>
		<FormikPhoneNumber/>
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
						setErrorMsg('Resgister');
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
								<Text color={'teal'}>Wallet</Text>
								<FormInput type="text" placeholder="Wallet" name="wallet" />
							</Box>
							<Stack spacing={10}>
								<Button
									variant='outline'
									colorScheme='teal'
									onClick={()=>{console.log('das');}}
									type="submit"
									leftIcon={isSubmitting ? <Spinner /> : <Icon as={BiWallet} />}
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


interface TypeFormikPhoneNumber{
	numberTelephone:string
}
function FormikPhoneNumber() {
	const [UserPhoneMutation, ] = useUpdateNumberTelephoneMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	return (
		<>
			<Formik
				initialValues={{
					numberTelephone: '',
				}}

				validationSchema={validationNumber}

				onSubmit={async (values: TypeFormikPhoneNumber, { setSubmitting, setErrors }) => {
					console.log('enter');
					setSubmitting(true);
					const result = await UserPhoneMutation({variables:values});
					setSubmitting(false);
					const errors = result.data?.updateNumberTelephone;
					if (errors?.field=='success') {
						setErrorMsg('File Phone Number  Alter');
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
								<Text color={'teal'}>Phone Number</Text>
								<FormInput type="phoneNumber" placeholder="+xxxxxxxxxxxxx" name="numberTelephone" />
							</Box>
							<Stack spacing={10}>
								<Button
									variant='outline'
									colorScheme='teal'
									onClick={()=>{console.log('das');}}
									type="submit"
									leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdPhonelinkSetup} />}
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