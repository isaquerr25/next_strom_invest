import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import { NavLogin } from '../../components/utils/navigateLogin';
import { BodyCycle } from './body';




const Cycles = () =>{
	return(
		<>
			<HeaderMod title='Cycles' />
			<NavLogin children={undefined}/>
			<BodyCycle/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Cycles;