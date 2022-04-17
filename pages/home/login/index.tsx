import { Box, Button, Checkbox, Flex, FormLabel, Heading, Icon, Link, Spinner, Stack, useBoolean, useColorModeValue } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import { FaFeatherAlt } from 'react-icons/fa';
import {FooterModify} from '../../../components/utils/footerModify';
import FormInput from '../../../components/utils/formInput';
import { HeaderMod } from '../../../components/utils/headerTitle';

import Layout from '../../../components/utils/layout';
import { PopMsg } from '../../../components/utils/PopMsg';
import { validationLogin } from '../../../components/utils/validateInputs';
import { useLoginAuthUserMutation } from '../../../components/generated/graphql';

interface Values {
  email: string;
  password: string;
}

const Login = () =>{
	const [loginAuthUser, ] = useLoginAuthUserMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);

	return(
		
		<Layout title={'Login'} navType={'home'} displayFooter={true}>
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
						<Heading color='white' fontSize={'4xl'}>Sign in to your account</Heading>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						boxShadow={'lg'}
						p={8}>

						<Formik
					 	initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={validationLogin}

							onSubmit={async (values: Values, { setSubmitting, setErrors }) => {

								setSubmitting(true);
								const result = await loginAuthUser({variables:values});
								setSubmitting(false);
								const errors = result.data?.loginAuthUser[0];
								if (errors?.field=='success') {
									Router.push('/user');
								} else {
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
												<Link onClick={()=>{Router.push('/home/forgetPassword');}} color={'blue.400'}>Forgot password?</Link>
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
		</Layout>
		
	);
};

export default Login;