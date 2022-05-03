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
import FormInput from '../../../utils/formInput';
import { Form, Formik } from 'formik';
import Router from 'next/router';
import { validationLogin } from '../../../utils/validateInputs';
import { MdCreate, MdLogin } from 'react-icons/md';
import { FaFeatherAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { VscError } from 'react-icons/vsc';
import { PopMsg } from '../../../utils/PopMsg';
import { useLoginStaffMutation } from '../../../generated/graphql';


interface Values {
  email: string;
  password: string;
}


export function SimpleCard() {


	const [loginStaff, ] = useLoginStaffMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);

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
					<Heading color='teal.100' textShadow='1px 2px #a5a5a5'fontSize={'8xl'} >STAFF Tempest</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					boxShadow={'lg'}
					bg={'#001717'}
					p={8}>

					<Formik
					 	initialValues={{
							email: '',
							password: '',
						}}
						validationSchema={validationLogin}

						onSubmit={async (values: Values, { setSubmitting, setErrors }) => {

							setSubmitting(true);
							const result = await loginStaff({variables:values});
							
							const errors = result.data?.loginStaff[0];
							if (errors?.field=='success') {
								Router.push('/admin/user');
							} else {
								setSubmitting(false);
								setErrorMsg(errors?.message  ?? '');
								setPopShow.on();
							}

						}}

					>
						{({ isSubmitting }) => (
							<Form >
								<Stack spacing={4}>
									<FormLabel>Email</FormLabel>
									<FormInput type="text" placeholder="email" name="email" />
									<FormLabel>Password</FormLabel>
									<FormInput type="password" placeholder="Password" name="password" />

									<Stack spacing={10}>
										<Stack
											direction={{ base: 'column', sm: 'row' }}
											align={'start'}
											justify={'space-between'}>
											<Checkbox>Remember me</Checkbox>
											<Link color={'blue.400'}>Forgot password?</Link>
										</Stack>
										<Button
											bg={'blue.400'}
											color={'white'}
											_hover={{
												bg: 'blue.500',
											}}
											onClick={()=>{console.log('das');}}
											type="submit"
											leftIcon={isSubmitting ? <Spinner /> : <Icon as={FaFeatherAlt} />}
											disabled={isSubmitting}
										>
											Sign in
										</Button>

									</Stack>
								</Stack>
							</Form>
						)}
					</Formik>

				</Box>
			</Stack>
			<PopMsg title={'Error'} msg={errorMsg} display={popShow} hide={setPopShow.off}/>
		</Flex>
	);
}
