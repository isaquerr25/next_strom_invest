import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';
import { BodySetOne } from '../../components/pageComponents/user/body';
import Layout from '../../components/utils/layout';



const Dashboard = () =>{
	return(
		<Layout title={'Dashboard'} navType={'user'} displayFooter={false}>
			<BodySetOne/>
		</Layout>
	);
};

export default Dashboard;