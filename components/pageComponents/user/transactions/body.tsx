


import { Box, Button, Flex, FormControl,
	FormErrorMessage, FormLabel, Image,
	Input, ModalOverlay, NumberDecrementStepper,
	NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper,
	Select, Table, TableCaption, Tbody,
	Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

import { Field,  Form, Formik } from 'formik';
import {RepeatIcon} from '@chakra-ui/icons';
import { Loading } from '../../../utils/loading';
import { useUserInfoDocumentQuery, useAllTransactionsByUserQuery } from '../../../generated/graphql';
import Router from 'next/router';
import { useEffect,useState } from 'react';

export const BodyTransactions = () =>{
	
	const [dropState,SetDropState] = useState('All');
	const userInfoGraph   = useUserInfoDocumentQuery();
	const allTransactions = useAllTransactionsByUserQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;
	const dataTransactions =  allTransactions.data?.allTransactionsByUser;


	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[dataUser?.name, userInfoGraph.loading]);



	return(

		<Flex
			justifyContent={'center'}
			gap={2}
			p={2}
			flexDirection='column'
			bg={'blackAlpha.500'}
		>
			{(userInfoGraph.loading &&  allTransactions.loading )&& <Loading/>}
			{dataUser &&
			<>
				<Flex
					boxShadow='xl'
					flexDirection="column"
					gap={5}
					borderRadius={10}
					paddingInline={'15px'}
					paddingBlock={'15px'}
		
				>
					<Flex justifyContent={'flex-start'} w='100%'>
						<Text color='teal.300' fontSize={'2xl'}>
							Account Transactions Activity
						</Text>
					</Flex>
					<Flex
						w={'100%'}
						justifyContent='right'
						alignItems={'center'}
						gap={2}
					>

						<Text textAlign={'right'} color='teal'>
							Transaction type:
						</Text>
						<FormControl w='200px'>
							<Select id='country' variant='flushed' bg='transparent' color='teal'  placeholder='All' onChange={e => SetDropState(e.target.value)} >
								<option>DEPOSIT</option>
								<option>WITHDRAW</option>
								<option>INVEST</option>
								<option>COMPLETE_INVEST</option>
								<option>CANCEL</option>
							</Select>
						</FormControl>
					</Flex>

				</Flex>
				<Flex
					boxShadow='xl'
					flexDirection={'column'}
					w='auto'

					borderRadius={10}
					minW={'275px'}
					p={5}

					gap={5}
					flex={1}
					overflow='hidden'

				>

					<TableTransaction arrayTransactions={dataTransactions} dropValue={dropState}/>

				</Flex>
			</>
			}
		</Flex>
	);
};



const TableTransaction = ({arrayTransactions,dropValue}:{arrayTransactions:any,dropValue:any}) => {
	return (
	
		<Box
			overflowY="auto"
			
			css={{
				'&::-webkit-scrollbar': {
					width: '4px',
					height: '8px',
					background: 'black',
				},
				'&::-webkit-scrollbar-track': {
					width: '6px',
					height: '2px',
					background: 'black',
				},
				'&::-webkit-scrollbar-thumb': {
					background: 'black',
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
						<Th>Type</Th>
						<Th>State</Th>
						<Th isNumeric>Currency</Th>
						<Th>Hash</Th>
						<Th>Wallet</Th>
						<Th>Updated</Th>
						<Th>Created</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(arrayTransactions!=null &&  arrayTransactions!=undefined )&&
						arrayTransactions.map( (compose:TypesComposeTransactions) =>{
							if(dropValue == 'DEPOSIT' || dropValue == 'CANCEL' || dropValue == 'WITHDRAW' || dropValue == 'INVEST' || dropValue == 'COMPLETE_INVEST'){
								if(dropValue != compose.action){
									return(<></>);
								}
							}
							let color = compose.state == 'CANCEL' ? 'red' : 'white';
							color = compose.state == 'COMPLETE' ? 'green.300' : color;

							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.action}</Td>
									<Td textColor={color}>{compose.state}</Td>
									<Td textColor={color}>${compose.value/100}</Td>
									<Td textColor={color}>{compose.hash}</Td>
									<Td textColor={color}>{compose.wallet}</Td>
									<Td textColor={color}>{compose.updatedAt.toString().split('T')[0]}</Td>
									<Td textColor={color}>{compose.createdAt.toString().split('T')[0]}</Td>
								</Tr>
							);}
						)
					}
				</Tbody>

			</Table>
		</Box>
	
	);
};

interface TypesComposeTransactions{

	__typename?: 'TransactionAll' | undefined;
	id: number;
	action: string;
	value: any;
	state: string;
	hash?: string | null | undefined;
	createdAt?: any;
	updatedAt?: any;
	wallet?: string | null | undefined;

}
