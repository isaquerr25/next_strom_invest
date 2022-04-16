import { Box, Button, Flex, Icon, Image, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, useBoolean } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaNotEqual, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../../../components/utils/Carousel';
import { convertMoney } from '../../../../components/utils/convertMoney';
import { Loading } from '../../../../components/utils/loading';
import { useActiveStartStaffQuery, useAllCycleQuery, useAllDocumentsValidationQuery , useAllTransactionsQuery, useAllUsersQuery, useAlterDocumentMutation,useGetTypeTransactionMutation, useUpdateTransactionMutation} from '../../../generated/graphql';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useRouter } from 'next/router';
import { calculatorDays } from '../../../user/cycles/process/utils';
import { addDays } from 'date-fns';
import { finished } from 'stream/promises';


export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const [stateTransaction,SetStateTransaction] = useState<any|null>(null);
	const [UseGetTypeTransaction,] = useGetTypeTransactionMutation();

	const staffInfoGraph   = useActiveStartStaffQuery();

	const [photoSate,UsePhoto] = useState<any>();
	const dataUser =  staffInfoGraph.data?.activeStartStaff;

	const [errorMsg, setErrorMsg] = useState('');


	
	useEffect(() => {
		async function fetchData() {

			const result = await UseGetTypeTransaction({variables:{action:'WITHDRAW',state:'PROCESS'}});
			console.log(result.data);
			SetStateTransaction(result.data?.getTypeTransaction);
		}
		fetchData();
	});


	useEffect(()=>{
		if (dataUser?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUser?.cyclesStart!);
		}




	},[dataUser?.cyclesStart, staffInfoGraph.loading]);

	return(


		<>
			{(staffInfoGraph.loading)&& <Loading/>}
			{dataUser &&
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}
			>

				<Box width={'100%'} p={'10px'}>
					<Flex
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
						alignItems={'flex-start'}
						flexDirection='column'
					>
						<Text color='black' fontSize='xl' fontWeight='black' >
								Todos os Usuários
						</Text>
						<TableUser/>
						<Text color='black' fontSize='xl' fontWeight='black' >
								Todas as Transações
						</Text>						
						<Box overflow={'scroll'} w='100%' h='600px'>

							<TableTransfer/>
						</Box>
						<Text color='black' fontSize='xl' fontWeight='black' >
								Todos os Cyclos
						</Text>
						<Box overflow={'scroll'} w='100%' h='600px'>

							<TableCycle/>
						</Box>
					</Flex>

				</Box>
				<Box>
				</Box>

			</Flex>
			}
		</>
	);
};

interface typeBlock{
	action?:string
	value?:number
	state:string
	hash?:string
	createdAt?:string
	updatedAt?:string
	wallet?:string
	userId?:string
	user_name?:string
	user_wallet?:string
	id:number
	email?: string;
};



const TableUser = () => {

	const allUserGraph = useAllUsersQuery();
	const dataUser = allUserGraph.data?.allUsers;

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
						<Th>id</Th>
						<Th>email</Th>
						<Th>name</Th>
						<Th>wallet</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(dataUser!=null &&  dataUser!=undefined )&&
						dataUser.map( (compose) =>{

							let color = 'black';

							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.id}</Td>
									<Td textColor={color}>{compose.email}</Td>
									<Td textColor={color}>{compose.name}</Td>
									<Td textColor={color}>{compose.wallet}</Td>
								</Tr>
							);}
						)
					}
				</Tbody>

			</Table>
		</Box>
	);
};


const TableTransfer = () => {

	const allTransferGraph = useAllTransactionsQuery();
	const dataTransfer = allTransferGraph.data?.allTransactions;

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
						<Th>id</Th>
						<Th>value</Th>
						<Th>hash</Th>
						<Th>action</Th>
						<Th>wallet</Th>
						<Th>createdAt</Th>
						<Th>updatedAt</Th>
						<Th>state</Th>
						<Th>userId</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(dataTransfer!=null &&  dataTransfer!=undefined )&&
						dataTransfer.map( (compose) =>{

							let color = 'black';


							if (compose.state == 'CANCEL'){
								color = 'red';
							}else if (compose.state == 'COMPLETE'){
								color = 'green';
							}

							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.id}</Td>
									<Td textColor={color}>{compose.value}</Td>
									<Td textColor={color}>{compose.hash}</Td>
									<Td textColor={color}>{compose.action}</Td>
									<Td textColor={color}>{compose.wallet}</Td>
									<Td textColor={color}>{compose.createdAt}</Td>
									<Td textColor={color}>{compose.updatedAt}</Td>
									<Td textColor={color}>{compose.state}</Td>
									<Td textColor={color}>{compose.userId}</Td>
								</Tr>
								
							);}
						)
					}
				</Tbody>

			</Table>
		</Box>
	);
};


const TableCycle = () => {
	const allCycleGraph = useAllCycleQuery();
	const dataCycle = allCycleGraph.data?.allCycle;
	return (
		<Box
			

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
						<Th>ID</Th>
						<Th>action</Th>
						<Th>VALUE INVEST USD</Th>
						<Th>Finish Value USD</Th>
						<Th >state</Th>
						<Th>beginDate</Th>
						<Th>finishDate</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(dataCycle!=null &&  dataCycle!=undefined )&&
						dataCycle.map( (compose) =>{

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
									finalValue = convertMoney(finalValue/100);
								}
							}
							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.id}</Td>
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
