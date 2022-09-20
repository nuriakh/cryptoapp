import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '5c4c63507cmsh3764ea0e1ae3ba7p142081jsn516543a5494a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest= (url) => ({url, headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        })
    })
});

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
//     endpoints: (builder) => ({
//       getCryptos: builder.query({
//         query: (count) => createRequest(`/coins?limit=${count}`),
//       })
//     })
// });



export const { useGetCryptosQuery } = cryptoApi;