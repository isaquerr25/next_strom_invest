import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import FooterModify from '../utils/footerModify';
import { HeaderMod } from '../utils/headerTitle';
import WithSubnavigation from '../utils/navigate';
import LoginForm from './body';



const Login = () =>{
	return(
		<>
			<HeaderMod title='Login' />
			<WithSubnavigation/>
			<LoginForm/>
			<FooterModify/>
		</>
	);
};

export default Login;