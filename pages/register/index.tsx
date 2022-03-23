import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import {RegisterBody} from './body';



const Register = () =>{
	return(
		<>
			<HeaderMod title='Login' />
			<Nav/>
			<RegisterBody/>
			<FooterModify/>
		</>
	);
};

export default Register;