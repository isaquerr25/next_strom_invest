import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';


import Carousel from '../../../components/utils/Carousel';
import { convertMoney } from '../../../components/utils/convertMoney';
import { Loading } from '../../../components/utils/loading';
import { useActiveStartStaffQuery } from '../../generated/graphql';

export const BodySetOne = () =>{
	const [dropState,SetDropState] = useState('All');
	const staffInfoGraph   = useActiveStartStaffQuery();
	const dataUser =  staffInfoGraph.data?.activeStartStaff;

	useEffect(()=>{
		if (dataUser?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUser?.cyclesStart!);
		}
	},[staffInfoGraph.loading]);

	return(


		<>
			{(staffInfoGraph.loading )&& <Loading/>}
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
							title={'Cycles Requests'}
							value={convertMoney(dataUser?.cyclesStart ?? 0)}
							inputIcon={FaRegChartBar}
						/>
						<Block
							title={'Withdrawal Requests'}
							value={convertMoney(dataUser?.withdrawAll ?? 0)}
							inputIcon={SiClockify}
						/>
						<Block
							title={'Documents Validate Requests'}
							value={convertMoney(dataUser?.documentsValidate ?? 0)}
							inputIcon={CgSandClock}
						/>
						<Block
							title={'Deposit valid today'}
							value={convertMoney(dataUser?.transactionPay ?? 0)}
							inputIcon={CgSandClock}
						/>
						<Block
							title={'Deposit valid money'}
							value={convertMoney(Number(dataUser?.valueEnterToday)/100 ?? 0)}
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