
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import DotEnvUtil from '../components/utils/DotEnvUtil';



export const client  = new ApolloClient({
	// ssrMode: typeof window === 'undefined',
	cache: new InMemoryCache(),
	link: createUploadLink({ uri: `http://${process.env.URL}/graphql`,
		credentials: 'include',

	})
});



function MyApp({ Component, pageProps }: AppProps) {
	return(
		<ApolloProvider client={client} >
			<ChakraProvider>
				<Component {...pageProps} />
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
