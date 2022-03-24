import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';
import { BodyTransactions } from './body';




const Transactions = () =>{
	return(
		<>
			<HeaderMod title='Transactions' />
			<NavLogin children={undefined}/>
			<BodyTransactions/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Transactions;