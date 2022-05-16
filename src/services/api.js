import ApolloClient from 'apollo-boost';
import axios from 'axios';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
