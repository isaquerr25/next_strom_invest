import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { BodyFunds } from './body';




const FundsDeposit = () =>{
	return(
		<>
			<HeaderMod title='Funds Deposit' />
			<NavLogin />
			<BodyFunds/>
		</>
	);
};

export default FundsDeposit;