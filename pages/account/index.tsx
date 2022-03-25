import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';
import { BodyAccount } from './body';




const Account = () =>{
	return(
		<>
			<HeaderMod title='Funds Deposit' />
			<NavLogin children={undefined}/>
			<BodyAccount/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Account;