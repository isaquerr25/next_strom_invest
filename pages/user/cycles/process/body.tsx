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
import { useAllCycleByUserQuery, useAllTransactionsByUserQuery, useUserInfoDocumentQuery } from '../../../generated/graphql';
import { Loading } from '../../../../components/utils/loading';
import { calculatorDays } from './utils';
import { convertMoney } from '../../../../components/utils/convertMoney';


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


					flexDirection="column"
					gap={5}
					borderRadius={10}
					paddingInline={'15px'}
					paddingBlock={'15px'}

				>
					<Flex justifyContent={'flex-start'} w='100%'>
						<Text fontSize={'2xl'}  color='teal'>
							Account Transactions Activity
						</Text>
					</Flex>
					<Flex
						w={'100%'}
						justifyContent='right'
						alignItems={'center'}
						gap={2}
					>

						<Text textAlign={'right'}  color='teal'>
							Transaction type:
						</Text>
						<FormControl w='200px'>
							<Select   variant='flushed' bg='transparent' color='teal' id='country' placeholder='All' onChange={e => SetDropState(e.target.value)} >
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
					bg='transparent'
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

const TableCycle = ({arrayTransactions,dropValue}:{
	dropValue:string
	arrayTransactions:any
}) => {
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
						arrayTransactions.map( (compose) =>{
							if(dropValue == 'PROCESS' || dropValue == 'CANCEL' || dropValue == 'ACTIVE' || dropValue == 'COMPLETE'){
								if(dropValue != compose.state){
									return(<></>);
								}
							}
							let color = 'white';


							if (compose.state == 'CANCEL'){
								color = 'red';
							}else if (compose.state == 'COMPLETE'){
								color = 'green.300';
							}


							let finalValue:any ='';

							if (compose.state == 'CANCEL'){
								finalValue ='CANCEL';

							}else{
								finalValue =compose.finalValueUSD ?? calculatorDays(new Date(),compose.finishDate)+' Days';
								if(typeof(finalValue) == typeof Number()){
									finalValue = convertMoney(finalValue/100);
								}
							}



							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.action?.toUpperCase()}</Td>
									<Td textColor={color}>{convertMoney(((compose.valueUSD)/100 )?? 0)}</Td>
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

interface TypesCycleProcess{
	dropValue:string
	arrayTransactions:{ 
	__typename?: 'CycleAll';
	id: number
	action: string
	valueUSD: number
	valueBTC: string
	finalValueUSD?: number | null
	finalValueBTC?: string | null 
	state: string
	beginDate: any
	finishDate?: any | null
	createdAt?: any | null
	updatedAt?: any | null
	userId?: number | null }[] | null 
}
