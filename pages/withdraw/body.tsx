import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import { validateAmount, validateEmail } from '../../components/utils/validateInputs';


export const BodyWithdraw = () =>{
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
          Withdraw
				</Text>

				<Text>
            All fields below are mandatory
				</Text>
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
				<Form style={{display:'flex', flexDirection:'column',gap:'10px'}}>
					<Field name='amount' validate={ validateAmount }>
						{({ field, form }) => (
							<FormControl isRequired>
								<FormLabel htmlFor='amount'>Amount</FormLabel>
								<NumberInput  min={100} defaultValue={0.00}>
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
      Minimum withdraw is 100 USD
		</Text>
		<Text>
      All withdrawals will be converted from USD to BTC.<br/>
			Remember, withdrawals can take up to 5 business days.<br/>
			After the withdrawal request, confirm the information in the email.
		</Text>
	</>

);
