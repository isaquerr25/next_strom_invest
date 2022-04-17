import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { BodyFunds } from '../../../components/pageComponents/user/funds/body';
import Layout from '../../../components/utils/layout';




const FundsDeposit = () =>{
	return(
		<Layout title={'Funds Deposit'} navType={'user'} displayFooter={false}>
		
			<BodyFunds/>
		
		</Layout>
	);
};

export default FundsDeposit;