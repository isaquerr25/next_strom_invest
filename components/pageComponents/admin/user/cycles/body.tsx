import { Box, Button, Flex, Icon, Image, Spinner, Text, useBoolean } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaFeatherAlt, FaNotEqual, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../../../utils/Carousel';
import { convertMoney } from '../../../../utils/convertMoney';
import { Loading } from '../../../../utils/loading';
import {
	useActiveStartStaffQuery,
	useAllCycleUserAdminProcessQuery,
	useAllDocumentsValidationQuery ,
	useAlterDocumentMutation,
	useGetTypeTransactionMutation,
	useUpdateCycleMutation,
	useUpdateTransactionMutation} from '../../../../generated/graphql';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../utils/PopMsg';
import { useRouter } from 'next/router';
import { addDays } from 'date-fns';


export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const [stateTransaction,SetStateTransaction] = useState<any|null>(null);
	const CycleProcess = useAllCycleUserAdminProcessQuery();

	const staffInfoGraph   = useActiveStartStaffQuery();

	const [photoSate,UsePhoto] = useState<any>();
	
	const dataUser =  CycleProcess.data?.allCycleUserAdminProcess;

	const [errorMsg, setErrorMsg] = useState('');
	const dataUserStaff =  staffInfoGraph.data?.activeStartStaff;
	
	

	useEffect(()=>{
		if (dataUserStaff?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUserStaff?.cyclesStart!);
		}
	},[dataUserStaff?.cyclesStart, staffInfoGraph.loading]);


	return(


		<>
			{(CycleProcess.loading)&& <Loading/>}
			{dataUser &&
			<Flex
				bg={'black'}
				alignItems={'center'}
				justifyContent={'flex-start'}
				flexDirection='column'
				width={'100%'}
				minH={'100vh'}
			>

				<Box width={'100%'} p={'10px'}>
					<Flex
						justifyContent={'left'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
						p={5}
						alignItems={'flex-start'}
					>
						{dataUser.map((number) =>

							<Block
								key={number.id}
								action={number.action ?? '-'}
								value={number.valueUSD != undefined ? Number(number.valueUSD) : 0 }
								state={number.state  ?? '-'}
								beginDate={number.beginDate}
								finishDate={number.finishDate}
								userId={number.user?.id  ?? '-'}
								user_name={number.user?.name ?? ''}
								id={number.id}
								email={number.user?.email  ?? '-'}
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
	const [useSubmit,setSubmit] = useState(false);

	const send = async(id:number,state:string,beginDate:Date,finishDate:Date) =>{
		setSubmit(true);
		const result = (await alterCycle({variables:{id,state,beginDate:beginDate,finishDate:finishDate}})).data;
		if(result){
			setSubmit(false);
			alert('save');
			router.reload();
		}else{
			setSubmit(false);
			alert('não salvo');
			router.reload();
		}
	};
	let numberFutureDay = 30;
	numberFutureDay = hash?.includes('cycle30') ? 30 : hash?.includes('cycle60') ? 60 : hash?.includes('cycle120') ? 120 : 30;

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
			borderColor={'teal'}
			style={{border: '4px solid teal'}}
			display={'flex'}
			flexDirection={'column'}
		>

			<Text  color='white' fontSize='lg' fontWeight='black'  width={'450px'} >
				Cycle De {numberFutureDay} Dias
			</Text>
			<Flex  justifyContent={'center'} alignItems={'flex-end'} width={'450px'} flexDirection={'column'} gap={3} h={'400px'} >
				<Text  color='white' fontSize='lg' fontWeight='black'  width={'450px'} >
					ID da Transação: {id}<br/>
					TIPO: {action}<br/>
					VALOR: {convertMoney(value/100)}<br/>
					Estado Atual: {state}<br/>
					Hash: {hash}<br/>
					Data de Começo: {beginDate ?? addDays(new Date(),+1).toDateString() }<br/>
					Data de Finalização: {finishDate  ?? addDays(new Date(),numberFutureDay).toDateString() }<br/>
					ID Usuário: {userId}<br/>
					Nome: {user_name}<br/>
					Carteira Atual: {user_wallet}<br/>
					Email: {email}<br/>
				</Text>
				<Flex
					alignItems='flex-end'
					justifyContent={'center'}
					width={'100%'}
					gap={5}
				>
					<Button  onClick={async()=>{
						await send(id,'CANCEL',addDays(new Date(),+1),addDays(new Date(),numberFutureDay));}
					} colorScheme='teal' variant='solid'
					leftIcon={useSubmit ? <Spinner /> : <Icon as={FaNotEqual} />}
					disabled={useSubmit}
					>
						CANCEL
					</Button>
					<Button  onClick={async()=>{
						await send(id,'ACTIVE',addDays(new Date(),+1),addDays(new Date(),numberFutureDay));}
					} colorScheme='teal' variant='outline'
					leftIcon={useSubmit ? <Spinner /> : <Icon as={FaFeatherAlt} />}
					disabled={useSubmit}
					>
						INICIAR
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};