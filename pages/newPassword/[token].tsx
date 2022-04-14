import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import {RegisterBody} from './body';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { type } from 'os';


type typeRou = string

const Register = () =>{
	const router = useRouter();
	const token = router.query.token;
	return(
		<>
			<HeaderMod title='Register' />
			<Nav/>

			<RegisterBody props={router.query.token}/>
			<FooterModify/>
		</>
	);

};

export default Register;