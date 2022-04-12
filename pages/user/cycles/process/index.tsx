import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../../components/utils/footerModify';
import { HeaderMod } from '../../../../components/utils/headerTitle';
import {Nav} from '../../../../components/utils/navigate';
import { NavLogin } from '../../../../components/utils/navigateLogin';
import { ForexRow } from '../../forextoRow';
import { BodyCycleProcess } from './body';




const Cycles = () =>{
	return(
		<>
			<HeaderMod title='Cycles Process' />
			<NavLogin children={undefined}/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyCycleProcess/>
			{/* <FooterModify/> */}
		</>
	);
};

export default Cycles;