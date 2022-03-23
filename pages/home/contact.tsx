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
} from '@chakra-ui/react';
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export function Contact() {
	return (
		<Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
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
                    Fill up the form below to contact
									</Text>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg="white" borderRadius="lg">
									<Box m={8} color="#0B0E3F">
										<VStack spacing={5}>
											<FormControl id="name">
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor="#E0E1E7">

													<Input type="text" size="md" />
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Mail</FormLabel>
												<InputGroup borderColor="#E0E1E7">

													<Input type="text" size="md" />
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Message</FormLabel>
												<Textarea
													borderColor="gray.300"
													_hover={{
														borderRadius: 'gray.300',
													}}
													placeholder="message"
												/>
											</FormControl>
											<FormControl id="name" float="right">
												<Button
													variant="solid"
													bg="#0D74FF"
													color="white"
													_hover={{}}>
                          Send Message
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
}
