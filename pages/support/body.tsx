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

			<GroupSupport/>
			<DescriptionAndRestriction/>
			<TableTransaction/>
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
      Please describe the problem clearly and attach the
			document so we know exactly what is happening.<br/> If
			it is in reaction to deposits and withdrawals,
			send the hash of the wallet and if so, send the
			hash of the transaction provided by the blockchain.
		</Text>
	</Flex>

);

const GroupSupport = () =>(
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
			Support
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
					<Field name='title' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='title'>Title</FormLabel>
								<Input {...field} id='title' placeholder='Title'  borderColor='blackAlpha.500'/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name='topic' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='topic'>Topic</FormLabel>
								<Input {...field} id='topic' placeholder='Topic'  borderColor='blackAlpha.500'/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name='message' validate={validateEmail}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.name && form.touched.name}>
								<FormLabel htmlFor='message'>Message</FormLabel>
								<Input {...field} id='message' placeholder='Message'  borderColor='blackAlpha.500'/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
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


const TableTransaction = () => {
	return (
		<Box
			overflowY="auto"

			css={{
				'&::-webkit-scrollbar': {
					width: '4px',
					height: '8px',
				},
				'&::-webkit-scrollbar-track': {
					width: '6px',
					height: '2px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: 'gray',
					borderRadius: '14px',
				},
			}}
		>


			<Table
				variant='striped'
				colorScheme='teal'
				display={''}
			>
				<TableCaption></TableCaption>
				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Deposit ID</Th>
						<Th>Type</Th>
						<Th>Status</Th>
						<Th>Actions</Th>
						<Th>Currency</Th>
						<Th isNumeric>Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>inches</Td>
						<Td>millimetres (mm)</Td>
						<Td isNumeric>25.4</Td>
					</Tr>
				</Tbody>

			</Table>
		</Box>
	);
};