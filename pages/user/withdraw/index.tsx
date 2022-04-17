import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { MiniChart } from 'react-ts-tradingview-widgets';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../../../components/pageComponents/user/forextoRow';
import { BodyWithdraw } from '../../../components/pageComponents/user/withdraw/body';
import Layout from '../../../components/utils/layout';




const Withdraw = () =>{
	return(
		<Layout title={'Requests'} navType={'user'} displayFooter={false}>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyWithdraw/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<MiniChart colorTheme="dark" isTransparent></MiniChart>
			</Box>
		</Layout>

	);
};

export default Withdraw;