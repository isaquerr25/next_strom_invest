import { Box, Button, Flex, FormLabel, Heading, Icon, Spinner, Stack, useBoolean, useColorModeValue } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Head from 'next/head';
import { useState } from 'react';
import { MdOutlinePassword } from 'react-icons/md';
import { useResolverForgetPasswordMutation } from '../../../components/generated/graphql';
import {FooterModify} from '../../../components/utils/footerModify';
import FormInput from '../../../components/utils/formInput';
import { HeaderMod } from '../../../components/utils/headerTitle';
import Layout from '../../../components/utils/layout';
import {Nav} from '../../../components/utils/navigate';
import { PopMsg } from '../../../components/utils/PopMsg';
import { validateEmailYup } from '../../../components/utils/validateInputs';




interface Values {
  email: string;
}

const Login = () =>{

	const [resolverPassword, ] = useResolverForgetPasswordMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');

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
		</Layout>
		
	);
};

export default Login;