import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';
import { BodyWithdraw } from './body';




const Withdraw = () =>{
	return(
		<>
			<HeaderMod title='Requests' />
			<NavLogin children={undefined}/>
			<BodyWithdraw/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Withdraw;