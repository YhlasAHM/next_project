'use client'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
/* 
import { persistStore } from 'redux-persist' */
/* 
import { PersistGate } from 'redux-persist/integration/react' */

import { Loading } from './Loading'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./app/components/footer/Footer'))
/* const Navbar = dynamic(() => import('./app/components/navbar/Navbar'), {
    loading: () => <Loading />,
    ssr: false
})
 */

export function Providers({ children }) {
    /* 
        let persistor = persistStore(store)
     */
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Provider store={store}>
                    <div id='__next'>
                        {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
                        {/* <Navbar /> */}
                        {children}
                        {/* </PersistGate> */}
                        <Footer />
                    </div>
                </Provider>
            </Suspense >
        </>
    )
}