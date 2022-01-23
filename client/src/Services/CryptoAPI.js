import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const Headers =  {
    'x-rapidapi-host': import.meta.env.VITE_API_HOST,
    'x-rapidapi-key': import.meta.env.VITE_API_HEADERS_KEY
  }


const baseUrl = import.meta.env.VITE_APP_BASE_URL
console.log({baseUrl});
const crateRequest = url =>({url,headers:Headers})

export const  cryptoApi =createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
        endpoints:(builder)=>({
            getCryptos:builder.query({
                query:(count)=>crateRequest( `/coins?limit=${count}`)
            }),
            getCryptoDetails:builder.query({
                 query:(coindId) =>crateRequest(`/coin/${coindId}`)  
            })

        }),

})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery
}=cryptoApi