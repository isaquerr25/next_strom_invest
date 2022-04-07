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
import { useActiveStartStaffQuery, useAllDocumentsValidationQuery , useAlterDocumentMutation} from '../../../generated/graphql';
import { photo } from './api';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useRouter } from 'next/router';


export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');

	const staffInfoGraph   = useActiveStartStaffQuery();
	const staffDocumentsData   = useAllDocumentsValidationQuery();
	const staffDocumentsGraph   = staffDocumentsData.data?.allDocumentsValidation;

	const [photoSate,UsePhoto] = useState<any>();
	const dataUser =  staffInfoGraph.data?.activeStartStaff;

	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);

	useEffect(() => {
		async function fetchData() {
			try{

				const temp = await photo('eeb7c7d72d2dfbd8410251f06056524c10e34c30d2a5517af9d1687c003464d0-mercado-de-acoes-ou-grafico-de-negociacao-forex_73426-159.jpg');
				UsePhoto(temp.url);

			}catch(error){
				console.log(error);
			}


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
			{(staffInfoGraph.loading && staffDocumentsData.loading )&& <Loading/>}
			{dataUser &&  staffDocumentsGraph &&
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}
			>

				<Box width={'100%'} p={'10px'}>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
					>
						{staffDocumentsGraph!.map((number) =>

							<Block
								key={number.id}
								title={number.user.name ?? ''}
								email={number.user.email}
								value={number.fileName}
								id={number.id}
							/>

						)}
						{
							staffDocumentsGraph.length == 0 &&
							<Text color='black' fontSize='xl' fontWeight='black' >
								Não existe documentos para avaliar
							</Text>
						}
					</Flex>

				</Box>
				<Box>
				</Box>

			</Flex>
			}
			<PopMsg title={'Error'} msg={errorMsg} display={popShow} hide={setPopShow.off}/>

		</>
	);
};

interface typeBlock{
	id?:number
	title?:string
	email?: string;
	value?: string;
};




const Block = ({id,value,title,email}:typeBlock) =>{

	const [alterDocumentGraph, ]   = useAlterDocumentMutation();
	const router = useRouter();


	const send = async(id:number,state:string) =>{
		const result = (await alterDocumentGraph({variables:{id,state}})).data;
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
		>

			<Flex justifyContent={'center'} alignItems={'flex-start'} flexDirection={'column'} w='250px' gap={5} h={'100%'} >
				<Text color='white' fontSize='xl' fontWeight='black' >
					{title} {id}
				</Text>
				<Text color='white' fontSize='xl' fontWeight='black' >
					{email}
				</Text>
				<img
					width={'1500px'}
					src={`http://localhost:4000/static/${value}`}
					alt='Storm Invest'
				/>
				<Flex
					alignItems='center'
					justifyContent={'center'}
					width={'100%'}
				>
				 <Button leftIcon={<FaNotEqual />} onClick={async()=>{await send(id,'INVALID');}} colorScheme='teal' variant='solid'>
						Negar
					</Button>
					<Button rightIcon={<ArrowForwardIcon />} onClick={async()=>{await send(id,'VALID');}} colorScheme='teal' variant='outline'>
					Aceitar
					</Button>
				</Flex>
			</Flex>

		</Flex>
	);};