import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { BodyAccount } from '../../../components/pageComponents/user/account/body';
import Layout from '../../../components/utils/layout';




const Account = () =>{
	return(
		<Layout title={'Account'} navType={'user'} displayFooter={false}>
			
			<BodyAccount/>
		</Layout>
	);
};

export default Account;