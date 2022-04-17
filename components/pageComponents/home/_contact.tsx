import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useBoolean,
	Spinner,
	Icon,
} from '@chakra-ui/react';
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { useCreateEmailBackMutation } from '../../generated/graphql';
import { Formik,Field, Form } from 'formik';
import { PopMsg } from '../../utils/PopMsg';
import { useState } from 'react';
import FormInput from '../../utils/formInput';
import { FiSend } from 'react-icons/fi';

interface typesEmail{
	name:string
	email:string
	message:string
}

export function Contact() {
	const [UseCreateEmailBack,] = useCreateEmailBackMutation();

	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');

	return (
		<Container
			id="contact"
			maxW="full"
			mt={0}
			centerContent
			overflow="hidden"
		>
			<Flex>
				<Box
					bg="#02054B"
					color="white"
					borderRadius="lg"
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}>
					<Box p={4}>
						<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
							<WrapItem>
								<Box>
									<Heading>Contact</Heading>
									<Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Please contact us if you have any <br/> 
										questions or if we can improve our platform.
									</Text>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg="white" borderRadius="lg">
									<Box m={8} color="#0B0E3F">
										<Formik
											initialValues={{name:'',email:'',message:''}}
											onSubmit={async (values: typesEmail, { setSubmitting, setErrors }) => {
												setSubmitting(true);
												const result = await UseCreateEmailBack({variables:values});
												setSubmitting(false);
												if(result.data?.createEmailBack.message =='success'){
													setErrorMsg('File sent for process');
													setTitleShow('Success');
													setPopShow.on();
												}else{
													setErrorMsg(result.data?.createEmailBack.message ?? '');
													setTitleShow('Error');
													setPopShow.on();
												}
											}}>
											{({ values,isSubmitting })  => (
										
												<Form>
													<VStack spacing={5}>

														<Box>
															<Text color='black'>Your Name</Text>
															<FormInput type="text" placeholder='Name' name="name"/>
														</Box>
														<Box>
															<Text color='black'>Your Email</Text>
															<FormInput type="text" placeholder='Email' name="email"/>
														</Box>
														<Box>
															<Text color='black'>Your Message</Text>
															<FormInput type="text" placeholder='Message' name="message"/>
														</Box>
														<Button
															variant='outline'
															colorScheme='black'
															w={{Base:'50%',sm:'70%'}}
															onClick={()=>{console.log('das');}}
															type="submit"
															leftIcon={isSubmitting ? <Spinner /> : <Icon as={FiSend} />}
															disabled={isSubmitting}
														>
															Send Message
														</Button>
													</VStack>
												</Form>
											)}
										</Formik>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
			<PopMsg
				nameButton={'Ok!'} title={titleShow} msg={errorMsg}
				display={popShow} hide={()=>{setPopShow.off();}}
			/>
		</Container>
	);
}
