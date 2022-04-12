import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { MiniChart } from 'react-ts-tradingview-widgets';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../forextoRow';
import { BodyWithdraw } from './body';




const Withdraw = () =>{
	return(
		<>
			<HeaderMod title='Requests' />
			<NavLogin children={undefined}/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyWithdraw/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<MiniChart colorTheme="dark" isTransparent width="100%"></MiniChart>
			</Box>
			{/* <FooterModify/> */}
		</>
	);
};

export default Withdraw;