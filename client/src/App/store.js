import { configureStore  } from "@reduxjs/toolkit"
import {cryptoApi} from "../Services/CryptoAPI"
import { cryptoNewsApi } from "../Services/CryptoNewsAPI"
export default configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
  });