import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000', // Единый идентификатор ресурса (URI)
    cache: new InMemoryCache(),
});

export default client;