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

import { MdCreate } from 'react-icons/md';
import Router  from 'next/router';
import FormInput from '../../utils/formInput';
import { PopMsg } from '../../utils/PopMsg';
import { validationPassword, validationRegister } from '../../utils/validateInputs';
import {useNewPasswordMutation } from '../../generated/graphql';


interface Values{
		token: string
		password:string
		confirmPassword:string
	}
interface RegisterBodyType{
		props:any
	}

export function RegisterBody({props}:RegisterBodyType) {

	const [UseNewPassword,] = useNewPasswordMutation();
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			backgroundImage={'../bg_register.jpeg'}
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
						token: props,
						password:'',
						confirmPassword:''
					}}
					validationSchema={validationPassword}

					onSubmit={async (values: Values, { setSubmitting, setErrors }) => {
						setSubmitting(true); 
						const result = await UseNewPassword({variables:{
							token:props,
							password:values.password
						}});
						setSubmitting(false);
						const errors = result.data?.newPassword;
						if (errors?.field=='success') {
							setErrorMsg('Changed Password ');
							setTitleShow('success');
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
			<PopMsg 
				title={titleShow} msg={errorMsg} display={popShow} 
				hide={ ()=>{ titleShow == 'success' ? Router.push('/home/login') : setPopShow.off;} 	} 
				nameButton={'Ok!'}
			/>

		</Flex>
	);
}
