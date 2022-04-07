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
import { useActiveStartStaffQuery, useAllDocumentsValidationQuery , useAlterDocumentMutation,useGetTypeTransactionMutation, useUpdateTransactionMutation} from '../../../generated/graphql';
import { photo } from './api';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useRouter } from 'next/router';


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
	}, []);


	useEffect(()=>{
		if (dataUser?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUser?.cyclesStart!);
		}




	},[staffInfoGraph.loading]);

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
					>
						<Text color='black' fontSize='xl' fontWeight='black' >
							Usuários
						</Text>
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




const Block = ({
	action,
	value,
	state,
	hash,
	updatedAt,
	wallet,
	userId,
	user_id,
	user_name,
	user_wallet,
	email,
	id,
}:typeBlock) =>{

	const [alterTransaction, ]   = useUpdateTransactionMutation();
	const router = useRouter();


	const send = async(id:number,state:string) =>{
		const result = (await alterTransaction({variables:{id,state}})).data;
		if(result){
			alert('save');
			router.reload(window.location.pathname);
		}else{
			alert('não salvo');
			router.reload(window.location.pathname);
		}
	};


	return (
		<Flex
			direction={'row'}
			alignItems='center'
			justifyContent={'center'}
			bg='#1e4cff'
			borderRadius={5}
			w={'500px'}
			h={'500px'}
			pb={'10px'}
			pt={'10px'}
			p={'40px'}
		>

			<Flex  justifyContent={'center'} alignItems={'flex-end'} width={'450px'} flexDirection={'column'} gap={3} h={'100%'} >

				<Text  color='white' fontSize='lg' fontWeight='black' >
					ID da Transação: {id}<br/>
					TIPO: {action}<br/>
					VALOR: {convertMoney(value/100 ?? 0)}<br/>
					Estado Atual: {state}<br/>
					Hash: {hash}<br/>
					Data de Atualização: {updatedAt}<br/>
					Carteira: {wallet}<br/>
					ID Usuário: {userId}<br/>
					Nome: {user_name}<br/>
					Carteira Atual: {user_wallet}<br/>
					Email: {email}<br/>
				</Text>
				<Flex
					alignItems='flex-end'
					justifyContent={'center'}
					width={'100%'}
				>
					<Button leftIcon={<FaNotEqual />} onClick={async()=>{await send(id,'CANCEL');}} colorScheme='teal' variant='solid'>
						CANCEL
					</Button>
					<Button rightIcon={<ArrowForwardIcon />} onClick={async()=>{await send(id,'COMPLETE');}} colorScheme='teal' variant='outline'>
					COMPLETE
					</Button>
				</Flex>
			</Flex>
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