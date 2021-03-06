import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '591ef59e5fmsh9674f0eac48801dp15254bjsnbbbeda81ef4d'    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // query: (count) => createRequest(`/coins?limit=${count}`)
            query: (count) => createRequest(`/coins`)
        }),
        getCryptoDetails: builder.query({
            query: (coindId) => createRequest(`/coin/${coindId}`)
        }), 
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
} = cryptoApi;