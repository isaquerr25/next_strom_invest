import { Box, Button, Flex, Icon, Image, Text, useBoolean } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaNotEqual, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../../../components/utils/Carousel';
import { convertMoney } from '../../../../components/utils/convertMoney';
import { Loading } from '../../../../components/utils/loading';
import {
	useActiveStartStaffQuery,
	useAllCycleUserAdminProcessQuery,
	useAllDocumentsValidationQuery ,
	useAlterDocumentMutation,
	useGetTypeTransactionMutation,
	useUpdateCycleMutation,
	useUpdateTransactionMutation} from '../../../generated/graphql';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useRouter } from 'next/router';


export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const [stateTransaction,SetStateTransaction] = useState<any|null>(null);
	const CycleProcess = useAllCycleUserAdminProcessQuery();

	const staffInfoGraph   = useActiveStartStaffQuery();

	const [photoSate,UsePhoto] = useState<any>();
	const dataUser =  CycleProcess.data?.allCycleUserAdminProcess;

	const [errorMsg, setErrorMsg] = useState('');

	useEffect(()=>{
		if (dataUser == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
		}

	},[staffInfoGraph.loading]);

	return(


		<>
			{(CycleProcess.loading)&& <Loading/>}
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
						{dataUser.map((number) =>

							<Block
								key={number.id}
								action={number.action}
								value={number.valueUSD != undefined ? Number(number.valueUSD) : 0 }
								state={number.state}
								beginDate={number.beginDate}
								finishDate={number.finishDate}
								userId={number.user.id}
								user_name={number.user.name ?? ''}
								id={number.id}
								email={number.user.email}
								hash={number.hash}
							/>

						)}
						{
							dataUser.length==0 &&
							<Text color='black' fontSize='xl' fontWeight='black' >
								Não existe Cycles para avaliar
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
	hash?:string | null | undefined
	beginDate?:string
	finishDate?:string
	userId?:string|number
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
	beginDate,
	finishDate,
	userId,
	user_name,
	user_wallet,
	email,
	id,
}:typeBlock) =>{

	const [alterCycle, ]   = useUpdateCycleMutation();
	const router = useRouter();


	const send = async(id:number,state:string) =>{
		const result = (await alterCycle({variables:{id,state,beginDate:new Date()}})).data;
		if(result){
			alert('save');
			router.push('/admin/user/cycles');
		}else{
			alert('não salvo');
			router.push('/admin/user/cycles');
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

			<Flex  justifyContent={'center'} alignItems={'flex-end'} width={'450px'} flexDirection={'column'} gap={3} h={'400px'} >

				<Text  color='white' fontSize='lg' fontWeight='black'  width={'450px'} >
					ID da Transação: {id}<br/>
					TIPO: {action}<br/>
					VALOR: {convertMoney(value/100)}<br/>
					Estado Atual: {state}<br/>
					Hash: {hash}<br/>
					Data de Começo: {beginDate}<br/>
					Data de Finalização: {finishDate}<br/>
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
					<Button rightIcon={<ArrowForwardIcon />} onClick={async()=>{await send(id,'ACTIVE');}} colorScheme='teal' variant='outline'>
					INICIAR
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};