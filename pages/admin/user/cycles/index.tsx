import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../../components/utils/footerModify';
import { HeaderMod } from '../../../../components/utils/headerTitle';
import {Nav} from '../../../../components/utils/navigate';
import { NavLogin } from '../../../../components/utils/navigateAdmin';
import { BodySetOne } from './body';



const DashboardAdmin = () =>{
	return(
		<>
			<HeaderMod title='Dashboard Admin' />
			<NavLogin />
			<BodySetOne/>
			{/* <FooterModify/> */}
		</>
	);
};

export default DashboardAdmin;