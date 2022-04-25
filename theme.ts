import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#001717',
				color: 'white'
			}
		},
		colors: {
			'900': 'white',
			'800': 'white',
			'700': 'white',
			'600': 'white',
			'500': 'white',
			'400': 'white',
			'300': 'white',
			'200': 'white',
			'100': 'white',
			'50': 'white',
            
		},
		fonts: {
			heading: 'Roboto',
			body: 'Roboto', 
		}
	}
});