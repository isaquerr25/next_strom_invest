import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const link = createHttpLink({
	uri: 'http://localhost:4000/graphql',
	credentials: 'include'
});

export const client = new ApolloClient({
	cache : new InMemoryCache(),
	link
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

export default MyApp;
