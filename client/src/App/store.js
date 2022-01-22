import { configureStore  } from "@reduxjs/toolkit"
import {cryptoApi} from "../Services/CryptoAPI"

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer

    },
})