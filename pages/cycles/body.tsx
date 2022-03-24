import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react';
import { addDays, addMonths } from 'date-fns';
import { Field,  Form, Formik } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export const BodyCycle= () =>{
	return(

		<Flex

			flexWrap={'wrap'}
			justifyContent={'center'}
			gap={2}
			p={2}
		>
			<Flex
				boxShadow='xl'
				width={{base:'full',md:'65%'}}
				minW={'500px'}

				flexDirection="column"
				gap={5}
				bg='gray.200'
				borderRadius={10}
				paddingInline={'15px'}
				paddingBlock={'15px'}

			>
				<Text fontSize={'2xl'}>
						Deposit using Bitcoin
				</Text>
					
				<Text>
						All fields below are mandatory
				</Text>
				<Image
					width={'100px'}
					src='./icon_bitcoin.png'
					alt='Storm Invest'
				/>
				<Box>
					<Flex alignItems={'center'}>
						<FormLabel htmlFor='name'>Trading Amount:</FormLabel>
						<FormLabel fontSize={'xl'}>5445.74(USD)</FormLabel>
					</Flex>
					<FormikExample/>
				</Box>

			</Flex>



			<Flex
				boxShadow='xl'
				flexDirection={'column'}
				w='auto'
				bg='gray.200'
				borderRadius={10}
				minW={'275px'}
				p={5}

				gap={5}
				flex={1}
			>
				<DescriptionAndRestriction/>

			</Flex>

		</Flex>

	);
};

function FormikExample() {



	const [startDate, setStartDate] = useState(null);
	function validateTrading(value) {
		let error;
		if (!value) {
			error = 'Number is required';
		}
		else if(!/^[0-9]+$/.test(value)){
			error = 'Fill in the value with numbers only';
		}
		else if (value.toLowerCase() !== 'naruto') {
			error = 'Jeez! You\'re not a fan 😱';
		}
		return error;
	}
	function validateAmount(value) {
		let error;
		if (!value) {
			error = 'Name is required';
		}
		return error;
	}
	function validateEmail(value) {
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
					<Field name='amount' validate={validateAmount}>
						{({ field, form }) => (
							<FormControl isRequired>
								<FormLabel htmlFor='amount'>Amount</FormLabel>
								<NumberInput min={100} defaultValue={0.00}>
									<NumberInputField id='amount' />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
						)}
					</Field>
					<Field name='name' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isRequired>
								<FormLabel htmlFor='email'>Email</FormLabel>
								<Input id='email' placeholder='Email' />
							</FormControl>

						)}
					</Field>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						minDate={addDays(new Date(),+15)}
						maxDate={addMonths(new Date(), 12)}
						withPortal
					/>
					<Button
						mt={4}
						colorScheme='teal'
						isLoading={props.isSubmitting}
						type='submit'
					>
						Deposit Funds
					</Button>
				</Form>
			)}
		</Formik>
	);
}

const DescriptionAndRestriction = () =>(
	<>
		<Text fontSize={'xl'}>
			Important Information
		</Text>
		<Text >
			Please fill in the required fields below
		</Text>
		<Text>
			Minimum Deposit is 100 USD
		</Text>
		<Text>
			Every transfer transaction is made in BTC and converted into USD for us to operate.
		</Text>
	</>

);
