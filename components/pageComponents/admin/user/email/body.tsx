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
	useAllEmailQuery,
	useAlterDocumentMutation,useGetTypeTransactionMutation, 
	useUpdateTransactionMutation} from '../../../../generated/graphql';
import { photo } from './api';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../utils/PopMsg';
import { useRouter } from 'next/router';


export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const [stateTransaction,SetStateTransaction] = useState<any|null>(null);
	const staffInfoGraph   = useActiveStartStaffQuery();
	const useAllEmailGraph   = useAllEmailQuery();

	const [photoSate,UsePhoto] = useState<any>();
	const dataUser =  staffInfoGraph.data?.activeStartStaff;
	const dataUseAllEmail =  useAllEmailGraph.data?.allEmail;

	const [errorMsg, setErrorMsg] = useState('');

	useEffect(()=>{
		if (dataUser?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUser?.cyclesStart!);
		}
	},[dataUser?.cyclesStart, staffInfoGraph.loading]);

	return(


		<>
			{(staffInfoGraph.loading) 	 &&  <Loading/>}
			{dataUser &&
			<Flex
				bg={'black'}
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
						{dataUseAllEmail!=null && dataUseAllEmail.map((number:any) =>

							<Block
								key={number.id}
								id={number.id}
								name={number.name}
								email={number.email != undefined ? number.email : ''}
								message={number.message}
								createdAt={number.createdAt}
							/>

						)}
						{
							dataUseAllEmail==null &&
							<Text color='black' fontSize='xl' fontWeight='black' >
								Não existe emails
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
	id:number
	name?:string
	email?:string
	message?:string
	createdAt?:string
};


const Block = ({
	id,
	name,
	email,
	message,
	createdAt
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
			justifyContent={'flex-start'}
			borderColor={'teal'}
			style={{border: '4px solid teal'}}
			borderRadius={'10px'}
			w={'100%'}
			h={'auto'}
			pb={'10px'}
			pt={'10px'}
			p={'40px'}
		>

			<Flex  justifyContent={'center'} alignItems={'flex-start'}  paddingRight={'15px'} width={'100%'} flexDirection={'column'} gap={3} h={'100%'} >	
				<Text  color='white' fontSize='lg' fontWeight='black' paddingRight={'15px'} >
					ID da Email: {id}<br/>
					Name: {name}<br/>
					Email: {email}<br/>
					Message: {message}<br/>
					Data de Atualização: {createdAt}<br/>
				</Text>
			</Flex>
		</Flex>
	);
};


