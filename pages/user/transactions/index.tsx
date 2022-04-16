import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../forextoRow';
import { BodyTransactions } from './body';





const Transactions = () =>{
	return(
		<>
			<HeaderMod title='Transactions' />
			<NavLogin />
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyTransactions/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Transactions;