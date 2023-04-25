import "../styles/global.css"
import { SessionProvider } from 'next-auth/react'

import {Nav, Alert} from "../components/Alert/AlertComponent"


export default function App({ Component, pageProps: {session, ...pageProps} }) {
    return (
    <>
    <Head>
        <title>Next.js - Alert (Toaster) Notifications</title>
    </Head>
    <SessionProvider session={session}>
    <div className='app-container bg-light'>
        <Nav />
        <div className="p-4">
            <div className="container">
                <Alert />
                <Component {...pageProps} />
            </div>
        </div>
    </div>
    </SessionProvider>
    </>
    )    
}    