import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { MiniChart } from 'react-ts-tradingview-widgets';
import {FooterModify} from '../../../components/utils/footerModify';
import { HeaderMod } from '../../../components/utils/headerTitle';
import {Nav} from '../../../components/utils/navigate';
import { NavLogin } from '../../../components/utils/navigateLogin';
import { ForexRow } from '../../../components/pageComponents/user/forextoRow';
import { BodyWithdraw } from '../../../components/pageComponents/user/withdraw/body';
import Layout from '../../../components/utils/layout';
import { useEffect, useRef, useState } from 'react';


const Withdraw = () =>{
	const size = useWindowSize();

	return(
		<Layout title={'Requests'} navType={'user'} displayFooter={false}>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<ForexRow/>
			</Box>
			<BodyWithdraw/>
			<Box cursor={'none'} pointerEvents='none' className='forexShowcss' w={'full'}>
				<MiniChart colorTheme="dark" isTransparent width={size.width} ></MiniChart>
			</Box>
		</Layout>

	);
};

export default Withdraw;



function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<any>({
	  width: undefined,
	  height: undefined,
	});
  
	useEffect(() => {
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
			setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
			});
	  }
  
	  // Add event listener
	  window.addEventListener('resize', handleResize);
  
	  // Call handler right away so state gets updated with initial window size
	  handleResize();
  
	  // Remove event listener on cleanup
	  return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
  
	return windowSize;
}