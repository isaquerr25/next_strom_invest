import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { BodyAccount } from './body';




const Support = () =>{
	return(
		<>
			<HeaderMod title='Support' />
			<NavLogin />
			<BodyAccount/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Support;