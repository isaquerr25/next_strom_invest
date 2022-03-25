import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react';
import { addDays, addMonths } from 'date-fns';
import { Field,  Form, Formik } from 'formik';
import React, { FC, forwardRef, MouseEventHandler, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {validateUSD,validateEmail} from '../../components/utils/validateInputs';

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
					Create Cyle Invest
				</Text>
				<Text>
					All fields below are mandatory
				</Text>



				<Box>
					<Flex alignItems={'center'}>
						<FormLabel htmlFor='name'>Trading Amount:</FormLabel>
						<FormLabel fontSize={'xl'}>5445.74(USD)</FormLabel>
					</Flex>
					<FormikInputs/>
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

function FormikInputs() {

	type typesCycle = {
		valueUSD:Number
		beginDate:Date
		finishDate:Date
	}

	const [startDate, setStartDate] = useState<Date|null>();
	const [cycleGraph, setCycleGraph] = useState<typesCycle>({

		valueUSD:0,
		beginDate:(new Date()),
		finishDate:(new Date()),
	});

	return (
		<Formik
			initialValues={cycleGraph}
			onSubmit={(values, actions) => {

				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);

			}}
		>
			{(props) => (
				<Form >
					<Field name='email' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isRequired>
								<FormLabel htmlFor='email'>Email</FormLabel>
								<Input

									id='email'
									placeholder='Email'
								/>
							</FormControl>

						)}
					</Field>
					<Field name='amount' validate={validateUSD}>
						{({ field, form }) => (
							<FormControl
								isRequired
								maxW='200px'
							>
								<FormLabel htmlFor='amount'>Amount</FormLabel>
								<NumberInput

									min={100}
									defaultValue={0.00}
								>
									<NumberInputField
										background='white'
										borderRadius={10}
										borderColor={'blackAlpha.500'}
										id='amount'

									/>

								</NumberInput>
							</FormControl>
						)}
					</Field>

					<Field name='datePicker' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl
								isRequired
								justifyContent={'left'}
							>
								<FormLabel htmlFor='datePicker'>Date Close Cycle</FormLabel>
								<DatePicker

									wrapperClassName="datePicker"
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									minDate={addDays(new Date(),+15)}
									maxDate={addMonths(new Date(), 12)}
									withPortal
									customInput={<CalenderCustomInput />}
								/>
							</FormControl>
						)}
					</Field>
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
			Minimum in account is 100 USD
		</Text>
		<Text>
			To make a new investment cycle, the money must already be in account
		</Text>
		<Text>
			* After the end of each cycle, the money will return to your account
			with the additional profit generated over time. <br/>
			* The forecast value is an approximation of how much profit you will receive.
			Since it will only be counted at the end of the cycle.
		</Text>
	</>

);

interface Props{
	value?: string
	onClick?:MouseEventHandler
}
const CalenderCustomInput:FC<Props> = ({ value, onClick }) => (

	<Input
		w='200px'
		id='calender-input'
		type='text'
		value={value}
		placeholder='00/00/0000'
		onClick={onClick}
		colorScheme='transparent'
		color='black'
		alignItems='center'
		bg='white'
		borderRadius={10}
		borderColor='blackAlpha.500'
	/>

);
