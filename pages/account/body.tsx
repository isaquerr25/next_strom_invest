import { Badge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, styled, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import { FaImages } from 'react-icons/fa';
import { validateEmail,validateAmount } from '../../components/utils/validateInputs';
import { jsx, css } from '@emotion/react';
import { containerEqual } from './style';
export const BodyAccount = () =>{
	return(

		<Flex
			flexWrap={'wrap'}
			justifyContent={'center'}
			gap={2}
			p={5}

		>
			<InfoUser/>
			<DescriptionAndRestriction/>
			<ValidateDocument/>
			<ChangeWallet/>
			<NewPassword/>

		</Flex>

	);
};






const DescriptionAndRestriction = () =>(
	<Flex
		css={css`
      ${containerEqual};
    `}
		boxShadow='xl'
		flexDirection={'column'}
		bg='gray.200'
	>
		<Text fontSize={'xl'}>
      Important Information
		</Text>
		<Text >
      Both the wallet and document fields must
      be validated for the account to be active
		</Text>
	</Flex>

);

const InfoUser = () =>(
	<Flex
		css={css`
      ${containerEqual};
    `}
		boxShadow='xl'
		paddingInline={'15px'}
		paddingBlock={'15px'}
		flexDirection="column"
		bg='gray.200'
	>
		<Badge>Not Validate</Badge>
		<Text fontSize={'2xl'}>
          Account
		</Text>

		<Text>
          Nome: Fulano de Talll
		</Text>
		<Text>
          Email: fulkano1312@gmail.com
		</Text>
		<Text>
          Wallet BTC: 64894afwefawf23f1f6awef82
		</Text>
		<Text>
      Document ID: Not Validated
		</Text>
		<Text>
      Account: Validated
		</Text>
	</Flex>
);


const ValidateDocument = () =>(
	<Flex
		boxShadow='xl'
		css={css`
      ${containerEqual};
    `}
		flex={1}
		flexDirection="column"
		paddingInline={'15px'}
		paddingBlock={'15px'}
		bg='gray.200'
	>
		<Text fontSize={'2xl'}>
      Document
		</Text>
		<FormikDocument/>
	</Flex>
);

function FormikDocument() {

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
				<Form style={{display:'flex',
					justifyContent:'space-between',
					flexDirection:'column',
					gap:'10px',
					height:'100%',
				}}>

					<Field name='amount' validate={ validateAmount }>
						{({ field, form }) => (
							<FormControl isRequired display={'flex'} alignItems='center'>
								<FormLabel htmlFor='amount'>Document ID</FormLabel>
								<Button colorScheme='facebook' leftIcon={<FaImages />}>
                  Browser ...
								</Button>
							</FormControl>
						)}
					</Field>

					<Button
						mt={4}
						colorScheme='teal'
						isLoading={props.isSubmitting}
						type='submit'

					>
            Send
					</Button>
				</Form>
			)}
		</Formik>
	);
}

const NewPassword = () =>(
	<Flex
		flex={1}
		boxShadow='xl'
		width={{base:'full'}}
		minW={'300px'}

		flexDirection="column"
		gap={5}
		bg='gray.200'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}
	>
		<Text fontSize={'2xl'}>
      Change Password
		</Text>
		<FormikPassword/>
	</Flex>
);

function FormikPassword() {

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
					<Field name='old-password' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='old-password'>Old Password</FormLabel>
								<Input {...field} id='old-password' placeholder='Old Password' borderColor='blackAlpha.500'/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name='password' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='password'>Password</FormLabel>
								<Input {...field} id='password' placeholder='Password' borderColor='blackAlpha.500'/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name='confirm-password' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
								<Input {...field} id='confirm-password' placeholder='Confirm Password'  borderColor='blackAlpha.500'/>
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
            Change
					</Button>
				</Form>
			)}
		</Formik>
	);
}


const ChangeWallet = () =>(
	<Flex

		flex={1}
		boxShadow='xl'
		width='auto'
		minW={'300px'}

		flexDirection="column"
		gap={5}
		bg='gray.200'
		borderRadius={10}
		paddingInline={'15px'}
		paddingBlock={'15px'}

	>
		<Text fontSize={'2xl'}>
      Change Wallet
		</Text>
		<FormikWallet/>
	</Flex>
);

function FormikWallet() {

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
					<Field name='wallet' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='wallet'>Wallet</FormLabel>
								<Input {...field} id='wallet' placeholder='Wallet'  borderColor='blackAlpha.500'/>
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
            Change & Save
					</Button>
				</Form>
			)}
		</Formik>
	);
}
