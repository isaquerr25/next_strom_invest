import { Box, Button, Divider, Flex, Icon, Text } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaBtc, FaEthereum, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify , SiXrp , SiDogecoin , SiLitecoin,SiMonero} from 'react-icons/si';



import Carousel from '../../utils/Carousel';
import { convertMoney } from '../../utils/convertMoney';
import { Loading } from '../../utils/loading';
import { useUserAllMoneyQuery, useUserInfoDocumentQuery } from '../../generated/graphql';
import { ForexShow } from './forexGraph';
import axios from 'axios';

import { ForexRow } from './forextoRow';

export const BodySetOne = () =>{

	const [dropState,SetDropState] = useState('All');
	const [usePar,setPar] = useState<any>();
	const userInfoGraph   = useUserInfoDocumentQuery();
	const allMoney = useUserAllMoneyQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;
	const dataAllMoney=  allMoney.data?.userAllMoney;

	useEffect(()=>{

		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[dataUser?.name, userInfoGraph.loading]);
	

	useEffect(()=>{
		const  fetchData = async () => {
			let groupData:any;
			try {
			


				const data = (await axios.get(`http://${process.env.API_URL}/exchange`)).data;
	
				for(const af in data){
					const identification:string = data[af].symbol.toString() ?? '';
					
					groupData[identification]={
						'name':data[af].name ?? 0,
						'symbol':data[af].symbol ?? 0,
						'price':data[af].price ?? 0,
						'change':data[af].change ?? 0,
						'volume':data[af].volume ?? 0
					};
				}
				setPar(groupData);
			} catch(err) {
				console.error('errsss', err);
			}
		};
		fetchData();

	},[]);


	



	

	return(


		<>
			{(userInfoGraph.loading &&  allMoney.loading )&& <Loading/>}
			{dataUser &&
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}
				h='auto'
				bg='#171717'
			>
				<Box className='forexShowcss' w={'full'} cursor={'none'} pointerEvents='none' >
					<ForexRow/>

				</Box>
				<Carousel/>
				<Box width={'100%'} p={'20px'}>
				</Box>
				<Divider w={'80%'} mb='15px' p='2px'  color={'teal'} style={{ background: 'teal' }}  borderRadius={5}/>
				<Text fontSize={'2xl'} color='teal'>INFORMATION</Text>
				<Box width={'100%'} p={'10px'}>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
					>
						<Block
							title={'Balance'}
							value={convertMoney(Number(dataAllMoney?.balance)/100 ?? 0)}
							inputIcon={FaRegChartBar}
						/>
						<Block
							title={'Profit All Cycle'}
							value={convertMoney(Number(dataAllMoney?.profitCycle)/100 ?? 0)}
							inputIcon={SiClockify}
						/>
						<Block
							title={'Profit Future'}
							value={convertMoney(Number(dataAllMoney?.profitFuture)/100 ?? 0)}
							inputIcon={CgSandClock}
						/>
					</Flex>
				</Box>
				<Divider w={'80%'} mb='15px' p='2px'  color={'teal'} style={{ background: 'teal' }}  borderRadius={5}/>
				{	usePar != null && usePar != undefined  &&
					<>
						<Flex flexDirection={'row'} gap={3} flexWrap='wrap' justifyContent='center'>
							<BlockLittle  
								title={usePar['BTCUSD'].symbol.toString() ?? '0'}
								change={usePar['BTCUSD'].change.toString() ?? '0'}
								price={usePar['BTCUSD'].price.toString() ?? '0'}
								volume={usePar['BTCUSD'].volume.toString() ?? '0'}
								inputIcon={FaBtc}
							/>
							<BlockLittle  
								title={usePar['ETHUSD'].symbol.toString() ?? '0'}
								change={usePar['ETHUSD'].change.toString() ?? '0'}
								price={usePar['ETHUSD'].price.toString() ?? '0'}
								volume={usePar['ETHUSD'].volume.toString() ?? '0'}
								inputIcon={FaEthereum}
							/>
							<BlockLittle  
								title={usePar['XRPUSD'].symbol.toString() ?? '0'}
								change={usePar['XRPUSD'].change.toString() ?? '0'}
								price={usePar['XRPUSD'].price.toString() ?? '0'}
								volume={usePar['XRPUSD'].volume.toString() ?? '0'}
								inputIcon={SiXrp}
							/>
							<BlockLittle  
								title={usePar['DOGEUSD'].symbol.toString() ?? '0'}
								change={usePar['DOGEUSD'].change.toString() ?? '0'}
								price={usePar['DOGEUSD'].price.toString() ?? '0'}
								volume={usePar['DOGEUSD'].volume.toString() ?? '0'}
								inputIcon={SiDogecoin}
							/>
							<BlockLittle  
								title={usePar['LTCUSD'].symbol.toString() ?? '0'}
								change={usePar['LTCUSD'].change.toString() ?? '0'}
								price={usePar['LTCUSD'].price.toString() ?? '0'}
								volume={usePar['LTCUSD'].volume.toString() ?? '0'}
								inputIcon={SiLitecoin}
							/>
							<BlockLittle  
								title={usePar['XMRUSD'].symbol.toString() ?? '0'}
								change={usePar['XMRUSD'].change.toString() ?? '0'}
								price={usePar['XMRUSD'].price.toString() ?? '0'}
								volume={usePar['XMRUSD'].volume.toString() ?? '0'}
								inputIcon={SiMonero}
							/>
						</Flex>
						
				
					</>
					
				}
				<Box  w='full' h={{base:'400px', sm:'400px'}} overflow='hidden'>

					<ForexShow />
				</Box>
			</Flex>
			}
			
		</>
	);
};

interface typeBlock{
	value:string|number|null
	title:string
	inputIcon?: any;
};

const Block = ({value,title,inputIcon}:typeBlock) =>(

	<Flex
		direction={'row'}
		alignItems='black'
		bg='black'
		borderRadius={5}
		w={'400px'}
		h={'100px'}
	>

		<Box display={'flex'} w='70px' h={'100px'} justifyContent={'center'} alignItems={'center'}>
			<Icon boxSize={'40px'} as={inputIcon} color='teal.300' />
		</Box>

		<Flex justifyContent={'center'} alignItems={'flex-start'} flexDirection={'column'} w='250px'  h={'100%'} >
			<Text color='teal.300' fontSize='lg' fontWeight='black' >
				{title}
			</Text>
			<Text color='teal.300' fontSize='3xl' fontWeight='black'>
				{value}
			</Text>
		</Flex>

	</Flex>
);
interface typeBlockLittle{

	change:string
	price:string
	volume:string
	title:string
	inputIcon?: any;
};


const BlockLittle = ({change,price,volume,title,inputIcon}:typeBlockLittle) =>(

	<Flex
		direction={'row'}
		alignItems='center'
		bg='black'
		borderRadius={25}
		pl={'10px'}
		marginInline='10px'
		w={{base:'full', sm:'400px'}}
		h={'70px'}
	>
		<Icon boxSize={'20px'} as={inputIcon} color='teal.300' />
		<Box w={{base:'1px', sm:'10px'}} p={{base:'1px', sm:'10px'}}></Box>
		<Flex mb='10px' justifyContent={{base:'left', sm:'center'}}   alignItems={'flex-start'} flexDirection={'row'} w='full'  h={'100%'} >
			<Flex  justifyContent={'center'}  flexDirection={'column'} w={{base:'150px', sm:'175px'}}  h='full' m='7px' >
				<Text color='teal.300' fontSize={{base:'14px', lg:'15px'}}   fontWeight='black' >
					Money: {title}
				</Text>
				<Text color='teal.300' fontSize={{base:'14px', lg:'15px'}}  fontWeight='black'>
					Volume Transition: {volume.substring(0,5)}
				</Text>
			</Flex>
			<Flex justifyContent={'center'} flexDirection={'column'} h='full' w={{base:'150px', sm:'175px'}}   m='7px'>
				<Text color='teal.300' fontSize={{base:'14px', lg:'15px'}}  fontWeight='black' >
					Price: {price.substring(0,8)}
				</Text>
				<Text color='teal.300' fontSize={{base:'14px', lg:'15px'}}   fontWeight='black'>
					Volat\ Price: {change.substring(0,5)}%
				</Text>
				
			</Flex>
			
			

		</Flex>

	</Flex>
);
