import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import {FooterModify} from '../../../../components/utils/footerModify';
import { HeaderMod } from '../../../../components/utils/headerTitle';
import {Nav} from '../../../../components/utils/navigate';
import { NavLogin } from '../../../../components/utils/navigateLogin';
import { ForexRow } from '../../../../components/pageComponents/user/forextoRow';
import { BodyCycleProcess } from '../../../../components/pageComponents/user/cycle/process/body';
import Layout from '../../../../components/utils/layout';




const Cycles = () =>{
	return(

		<Layout title={'Cycles Process'} navType={'user'} displayFooter={false}>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyCycleProcess/>
		</Layout>
			
			

	);
};

export default Cycles;