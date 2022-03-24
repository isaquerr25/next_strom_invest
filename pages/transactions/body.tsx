import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Field,  Form, Formik } from 'formik';
import {RepeatIcon} from '@chakra-ui/icons';

export const BodyTransactions = () =>{
	return(

		<Flex
			justifyContent={'center'}
			gap={2}
			p={2}
			flexDirection='column'
		>
			<Flex
				boxShadow='xl'
				minW={'500px'}

				flexDirection="column"
				gap={5}
				borderRadius={10}
				paddingInline={'15px'}
				paddingBlock={'15px'}

			>
				<Flex justifyContent={'space-between'} w='100%'>
					<Text fontSize={'2xl'}>
          Account Transactions Activity
					</Text>
					<RepeatIcon
						bg='gray.300'
						boxShadow='xs'
						p='3px'
						borderRadius={'2xl'}
						w={8} h={8}
						color="red.500"
					/>
				</Flex>
					
				<Flex
					w={'100%'}
					justifyContent='right'
					alignItems={'center'}
					gap={2}
				>

					<Text textAlign={'right'}>
           Transaction type:
					</Text>
					<DropDownType/>
				</Flex>

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
				overflow='hidden'

			>

				<TableTransection />

			</Flex>

		</Flex>

	);
};

const DropDownType = () => (
	<FormControl w='200px'>
		<Select id='country' placeholder='Select country'>
			<option>United Arab Emirates</option>
			<option>Nigeria</option>
		</Select>
	</FormControl>
);

const TableTransection = () => {
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