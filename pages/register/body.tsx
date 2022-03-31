import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	Checkbox,
	Spinner,
	Icon,
	useBoolean,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik } from 'formik';
import FormInput from '../../components/utils/formInput';
import { MdCreate } from 'react-icons/md';
import Router  from 'next/router';
import { useCreateUserResolverMutation } from '../generated/graphql';
import { validationRegister } from '../../components/utils/validateInputs';
import { PopMsg } from '../../components/utils/PopMsg';



interface Values{
		email: ''
		password:''
		confirmPassword: ''
		name: ''
	}


export function RegisterBody() {

	const [createAccount,] = useCreateUserResolverMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			backgroundImage={'./bg_register.jpeg'}
			backgroundPosition='center'
			backgroundSize='cover'
			width='100%'
		>
			<Box
				rounded={'lg'}
				bg={useColorModeValue('white', 'gray.700')}
				boxShadow={'lg'}
				p={8}>

				<Formik
					initialValues={{
						email: '',
						password: '',
						confirmPassword: '',
						name: ''
					}}
					validationSchema={validationRegister}

					onSubmit={async (values: Values, { setSubmitting, setErrors }) => {
						setSubmitting(true);
						const result = await createAccount({variables:values});
						setSubmitting(false);
						const errors = result.data?.createUserResolver[0];
						if (errors?.message=='success') {
							Router.push('/login');
						} else {
							setErrorMsg(errors?.message  ?? '');
							setPopShow.on();
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form >
							<Stack spacing={4}>
								<Box>
									<FormLabel>Name</FormLabel>
									<FormInput type="text" placeholder="Name" name="name" />
								</Box>
								<Box>
									<FormLabel>Email</FormLabel>
									<FormInput type="text" placeholder="email" name="email" />
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
										leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdCreate} />}
										disabled={isSubmitting}
									>
											Register
									</Button>
								</Stack>
							</Stack>
						</Form>
					)}
				</Formik>
			</Box>
			<PopMsg title={'Error'} msg={errorMsg} display={popShow} hide={setPopShow.off}/>

		</Flex>
	);
}
