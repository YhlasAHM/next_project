'use client'

import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import { setupListeners } from '@reduxjs/toolkit/query'

import * as rp from 'redux-persist'

import sign_inReducer from "./reducers/sign_in.reducer"

const rootReducer = combineReducers({
    sign_in: sign_inReducer,
})

const persistConfig = {
    key: 'next_shop__+',
    storage,
    whiteList: ['sign_in'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
            },
        }),
})

setupListeners(store.dispatch)

export const RootState = store.getState()