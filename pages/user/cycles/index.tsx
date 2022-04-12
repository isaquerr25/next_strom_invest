import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../forextoRow';
import { BodyCycle } from './body';




const Cycles = () =>{
	return(
		<>
			<HeaderMod title='Cycles' />
			<NavLogin children={undefined}/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>

			</Box>
			<BodyCycle/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Cycles;