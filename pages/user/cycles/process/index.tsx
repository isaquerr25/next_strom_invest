import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../../components/utils/footerModify';
import { HeaderMod } from '../../../../components/utils/headerTitle';
import {Nav} from '../../../../components/utils/navigate';
import { NavLogin } from '../../../../components/utils/navigateLogin';
import { BodyCycleProcess } from './body';




const Cycles = () =>{
	return(
		<>
			<HeaderMod title='Cycles Process' />
			<NavLogin children={undefined}/>
			<BodyCycleProcess/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Cycles;