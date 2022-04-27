import { Box, Button, Flex, Icon, Image, Text, useBoolean } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaNotEqual, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../../../utils/Carousel';
import { convertMoney } from '../../../../utils/convertMoney';
import { Loading } from '../../../../utils/loading';
import { useActiveStartStaffQuery, useAllDocumentsValidationQuery , 
	useAlterDocumentMutation,useGetTypeTransactionMutation, 
	useUpdateTransactionMutation} from '../../../../generated/graphql';
import { photo } from './api';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../utils/PopMsg';
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


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
					>
						{stateTransaction!=null && stateTransaction.map((number:any) =>

							<Block
								key={number.id}
								action={number.action}
								value={number.value != undefined ? number.value : 0}
								state={number.state}
								hash={number.hash}
								updatedAt={number.updatedAt}
								wallet={number.wallet}
								userId={number.userId}
								user_name={number.user.name}
								user_wallet={number.user.wallet}
								id={number.id}
								email={number.user.email}
							/>

						)}
						{
							stateTransaction==null &&
							<Text color='black' fontSize='xl' fontWeight='black' >
								Não existe saques para avaliar
							</Text>
						}
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
	value:number
	state:string
	hash?:string
	createdAt?:string
	updatedAt?:string
	wallet?:string
	userId?:string|number
	user_name?:string
	user_wallet?:string
	id:number
	email?: string
};




const Block = ({
	action,
	value,
	state,
	hash,
	updatedAt,
	wallet,
	userId,
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
			router.push('/admin/user/withdraw');
		}else{
			alert('não salvo');
			router.push('/admin/user/withdraw');
		}
	};


	return (
		<Flex
			direction={'row'}
			alignItems='center'
			justifyContent={'center'}
			bg={'blackAlpha.700'}
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
					VALOR: {convertMoney(value/100)}<br/>
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
