import {
	Box, Button, Flex, FormControl, FormErrorMessage,
	FormLabel, Icon, Image, Input, NumberDecrementStepper,
	NumberIncrementStepper, NumberInput, NumberInputField,
	NumberInputStepper, Select, Spinner, Table, TableCaption,
	Tbody, Td, Text, Th, Thead, Tr, useBoolean
} from '@chakra-ui/react';

import { addDays, addMonths } from 'date-fns';
import { Field,  Form, Formik } from 'formik';
import Router from 'next/router';
import React, { FC, forwardRef, MouseEventHandler, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { FormatMoney } from 'format-money-js';
import { useAllCycleByUserQuery, useAllTransactionsByUserQuery, useUserInfoDocumentQuery } from '../../generated/graphql';
import { Loading } from '../../../components/utils/loading';
import { calculatorDays } from './utils';
import { convertMoney } from '../../../components/utils/convertMoney';


export const BodyCycleProcess = () =>{
	const [dropState,SetDropState] = useState('All');
	const userInfoGraph   = useUserInfoDocumentQuery();
	const allCycle = useAllCycleByUserQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;
	const dataCycles =  allCycle.data?.allCycleByUser;

	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[userInfoGraph.loading]);

	return(

		<Flex
			justifyContent={'center'}
			gap={2}
			p={2}
			flexDirection='column'
		>
			{(userInfoGraph.loading &&  allCycle.loading )&& <Loading/>}
			{dataUser &&
			<>
				<Flex
					boxShadow='xl'
					minW={'500px'}

					flexDirection="column"
					gap={5}
					borderRadius={10}
					paddingInline={'15px'}
					paddingBlock={'15px'}

				>
					<Flex justifyContent={'flex-start'} w='100%'>
						<Text fontSize={'2xl'}>
					Account Transactions Activity
						</Text>
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
						<FormControl w='200px'>
							<Select id='country' placeholder='All' onChange={e => SetDropState(e.target.value)} >
								<option>PROCESS</option>
								<option>ACTIVE</option>
								<option>COMPLETE</option>
								<option>CANCEL</option>
							</Select>
						</FormControl>
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

					<TableCycle arrayTransactions={dataCycles} dropValue={dropState}/>

				</Flex>
			</>
			}
		</Flex>
	);
};


const TableCycle = ({arrayTransactions,dropValue}) => {
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
						<Th>action</Th>
						<Th>VALUE INVEST USD</Th>
						<Th>Finish Value USD</Th>
						<Th >state</Th>
						<Th>beginDate</Th>
						<Th>finishDate</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(arrayTransactions!=null &&  arrayTransactions!=undefined )&&
						arrayTransactions.map( (compose:TypesComposeCycleProcess) =>{
							if(dropValue == 'PROCESS' || dropValue == 'CANCEL' || dropValue == 'ACTIVE' || dropValue == 'COMPLETE'){
								if(dropValue != compose.state){
									return(<></>);
								}
							}
							let color = 'black';


							if (compose.state == 'CANCEL'){
								color = 'red';
							}else if (compose.state == 'COMPLETE'){
								color = 'green';
							}


							let finalValue:any ='';

							if (compose.state == 'CANCEL'){
								finalValue ='CANCEL';

							}else{
								finalValue =compose.finalValueUSD ?? calculatorDays(new Date(),compose.finishDate)+' Days';
								if(typeof(finalValue) == typeof Number()){
									finalValue = convertMoney(finalValue);
								}
							}



							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.action?.toUpperCase()}</Td>
									<Td textColor={color}>{convertMoney(compose.valueUSD ?? 0)}</Td>
									<Td textColor={color}>{finalValue}</Td>
									<Td textColor={color}>{compose.state}</Td>
									<Td textColor={color}>{compose.beginDate.toString().split('T')[0]}</Td>
									<Td textColor={color}>{compose.finishDate.toString().split('T')[0]}</Td>
								</Tr>
							);}
						)
					}
				</Tbody>

			</Table>
		</Box>
	);
};


interface TypesComposeCycleProcess{

	__typename?: 'TransactionAll' | undefined;
	id?: number;
	action?: string;
	valueUSD?: number;
	valueBTC?: BigInt;
	finalValueUSD?: number;
	finalValueBTC?: BigInt;
	state?: string;
	beginDate: Date;
	finishDate: Date;
	createdAt?: Date;
	updatedAt?: Date;
	userId?: number;
}
