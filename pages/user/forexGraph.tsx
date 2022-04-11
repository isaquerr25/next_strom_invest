import { AspectRatio, Box } from '@chakra-ui/react';

export const ForexShow = () =>{


	return (
		<AspectRatio w='full' h={'full'}>
			<iframe className='graphShow' src="https://s.tradingview.com/mediumwidgetembed/?symbols=AUD%2FUSD,EUR%2FUSD,XAU%2FUSD,GBP%2FUSD&
			%20%20%20%20AUD%2FUSD=GLOBALPRIME%3AAUDUSD%7C3M&
			%20%20%20%20EUR%2FUSD=GLOBALPRIME%3AEURUSD%7C3M&
			%20%20%20%20XAU%2FUSD=GLOBALPRIME%3AXAUUSD%7C3M&
			%20%20%20%20GBP%2FUSD=GLOBALPRIME%3AGBPUSD%7C3M&
			%20%20%20%20topColor=rgba(41%2C%2098%2C%20255%2C%200.3)&
			%20%20%20%20lineColor=%232962ff&
			%20%20%20%20chartType=area&
			locale=en&
			%20%20%20%20fontColor=%23787b86&
			%20%20%20%20gridLineColor=rgba(240%2C%20243%2C%20250%2C%200)&
			%20%20%20%20width=600px&
			%20%20%20%20height=400px&
			%20%20%20%20colorTheme=dark&
			%20%20%20%20isTransparent=1&
			%20%20%20%20utm_source=0&
			%20%20%20%20utm_medium=widget&%20%20%20%20utm_campaign=symbol-overview"/>
		</AspectRatio>
		
	);
};
