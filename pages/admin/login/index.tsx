import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import {SimpleCard} from './body';



const AdminLogin = () =>{
	return(
		<>
			<HeaderMod title='Admin Login' />
			<Nav/>
			<SimpleCard/>
			<FooterModify/>
		</>
	);
};

export default AdminLogin;