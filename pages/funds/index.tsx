import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';




const Dashboard = () =>{
	return(
		<>
			<HeaderMod title='Dashboard' />
			<NavLogin children={undefined}/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Dashboard;