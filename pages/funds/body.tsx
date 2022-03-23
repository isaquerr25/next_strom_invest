import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import { Field, Field, Form, Form, Formik } from 'formik';

const BodyFunds = () =>{
	return(
		<>
			<Flex>
				<Box>
					<Text>
            Deposit using Bitcoin
					</Text>
					<Text>
            Deposit using Bitcoin
					</Text>
          	<Image
						width={'100px'}
						src='./icon_bitcoin.png'
						alt='Storm Invest'
					/>
					<Box>
						<FormikExample/>
					</Box>

				</Box>
				<Box>
					{/* {restrição} */}
					<Text>
            Deposit using Bitcoin
					</Text>
					<Text>
            Deposit using Bitcoin
					</Text>
					<Text>
            Deposit using Bitcoin
					</Text>
				</Box>
			</Flex>
		</>
	);
};




function FormikExample() {
	function validateName(value) {
		let error;
		if (!value) {
			error = 'Name is required';
		} else if (value.toLowerCase() !== 'naruto') {
			error = 'Jeez! You\'re not a fan 😱';
		}
		return error;
	}

	return (
		<Formik
			initialValues={{ name: 'Sasuke' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
		>
			{(props) => (
				<Form>
					<Field name='name' validate={validateName}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='name'>First name</FormLabel>
								<Input {...field} id='name' placeholder='name' />
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Button
						mt={4}
						colorScheme='teal'
						isLoading={props.isSubmitting}
						type='submit'
					>
            Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
}
