import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import DotEnvUtil from '../components/utils/DotEnvUtil';
import { theme } from '../theme';


export const client  = new ApolloClient({
	// ssrMode: typeof window === 'undefined',
	cache: new InMemoryCache(),
	link: createUploadLink({ uri: 'https://api.tempestinvest.com/graphql',
		credentials: 'include',

	})
});



function MyApp({ Component, pageProps }: AppProps) {
	return(
		<ApolloProvider client={client} >
			<ChakraProvider theme={theme}>
				<ThemeProvider>
					<Head>
						<link  rel="icon" type="image/png"  href="logo_median.png" />
					</Head>
					<Component {...pageProps} />
				</ThemeProvider>
			</ChakraProvider>
		</ApolloProvider>
	);
}


export async function getServerSideProps() {
	console.log('!!!!!!',process.env.NEXT_PUBLIC_URL);
	return {
		props: {
			URL: process.env.NEXT_PUBLIC_URL,
		},
	};
}


export default MyApp;
