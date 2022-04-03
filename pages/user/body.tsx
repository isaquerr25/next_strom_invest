import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../components/utils/Carousel';
import { convertMoney } from '../../components/utils/convertMoney';
import { Loading } from '../../components/utils/loading';
import { useUserAllMoneyQuery, useUserInfoDocumentQuery } from '../generated/graphql';

export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const userInfoGraph   = useUserInfoDocumentQuery();
	const allMoney = useUserAllMoneyQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;
	const dataAllMoney=  allMoney.data?.userAllMoney;

	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/login');
			console.log(dataUser?.name!	);
		}
	},[userInfoGraph.loading]);

	return(


		<>
			{(userInfoGraph.loading &&  allMoney.loading )&& <Loading/>}
			{dataUser &&
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}

			>

				<Carousel/>
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
							value={convertMoney(Number(dataAllMoney?.balance) ?? 0)}
							inputIcon={FaRegChartBar}
						/>
						<Block
							title={'Profit All Cycle'}
							value={convertMoney(Number(dataAllMoney?.profitCycle) ?? 0)}
							inputIcon={SiClockify}
						/>
						<Block
							title={'Profit Future'}
							value={convertMoney(Number(dataAllMoney?.profitFuture) ?? 0)}
							inputIcon={CgSandClock}
						/>
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
	value:string|number| FormatMoneyParse
	title:string
	inputIcon: any;
};

const Block = ({value,title,inputIcon}:typeBlock) =>(

	<Flex
		direction={'row'}
		alignItems='center'
		bg='#1e4cff'
		borderRadius={5}
		w={'400px'}
		h={'100px'}
	>

		<Box display={'flex'} w='70px' h={'100px'} justifyContent={'center'} alignItems={'center'}>
			<Icon boxSize={'40px'} as={inputIcon} color='white' />
		</Box>

		<Flex justifyContent={'center'} alignItems={'flex-start'} flexDirection={'column'} w='250px'  h={'100%'} >
			<Text color='white' fontSize='xl' fontWeight='black' >
				{title}
			</Text>
			<Text color='white' fontSize='3xl' fontWeight='black'>
				{value}
			</Text>
		</Flex>

	</Flex>
);