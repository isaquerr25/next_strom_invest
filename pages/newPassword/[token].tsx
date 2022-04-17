import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import {RegisterBody} from '../../components/pageComponents/newPassword/body';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { type } from 'os';
import Layout from '../../components/utils/layout';


type typeRou = string

const Register = () =>{
	const router = useRouter();
	const token = router.query.token;
	return(
		
		<Layout title={'New Password'} navType={'home'} displayFooter={true}>
			<RegisterBody props={router.query.token}/>
			<HeaderMod title='Register' />
		</Layout>

	);

};

export default Register;