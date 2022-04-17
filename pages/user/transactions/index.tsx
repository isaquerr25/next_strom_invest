import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../../../components/pageComponents/user/forextoRow';
import { BodyTransactions } from '../../../components/pageComponents/user/transactions/body';
import Layout from '../../../components/utils/layout';





const Transactions = () =>{
	return(
		
		<Layout title={'Funds Deposit'} navType={'user'} displayFooter={false}>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyTransactions/>
		</Layout>
	);
};

export default Transactions;