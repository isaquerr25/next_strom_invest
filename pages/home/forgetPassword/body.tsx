import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	Spinner,
	Icon,
	useBoolean,
} from '@chakra-ui/react';
import { useLoginAuthUserMutation, useResolverForgetPasswordMutation } from '../../generated/graphql';
import FormInput from '../../../components/utils/formInput';
import { Form, Formik } from 'formik';
import Router from 'next/router';
import { validateEmailYup, validationLogin } from '../../../components/utils/validateInputs';
import { MdCreate, MdLogin, MdOutlinePassword } from 'react-icons/md';
import { FaFeatherAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { VscError } from 'react-icons/vsc';
import { PopMsg } from '../../../components/utils/PopMsg';


interface Values {
  email: string;
}


export function SimpleCard() {


	const [resolverPassword, ] = useResolverForgetPasswordMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			backgroundImage={'../background_login.jpg'}
			backgroundPosition='center'
			backgroundSize='cover'
			width='100%'
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading color='white' fontSize={'4xl'}>Forgot password</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>

					<Formik
					 	initialValues={{
							email: '',
						}}
						validationSchema={validateEmailYup}

						onSubmit={async (values: Values, { setSubmitting, setErrors }) => {

							setSubmitting(true);
							console.log('login');
							const result = await resolverPassword({variables:values});
							setSubmitting(false);
							const errors = result.data?.resolverForgetPassword;
							if (errors?.field=='success') {
								setErrorMsg('An email has been sent.');
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
									<FormLabel>Email</FormLabel>
									<FormInput type="text" placeholder="email" name="email" />
									<Stack spacing={10}>
										<Button
											bg={'blue.400'}
											color={'white'}
											_hover={{
												bg: 'blue.500',
											}}
											onClick={()=>{console.log('das');}}
											type="submit"
											leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdOutlinePassword} />}
											disabled={isSubmitting}
										>
											Send Email
										</Button>

									</Stack>
								</Stack>
							</Form>
						)}
					</Formik>

				</Box>
			</Stack>
			<PopMsg 
				title={titleShow} msg={errorMsg} display={popShow} 
				hide={ ()=>{ setPopShow.off;}  } 
				nameButton={'Ok!'}
			/>
		</Flex>
	);
}
