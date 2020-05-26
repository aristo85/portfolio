import Head from "next/head";
import Navbar from './navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Ari Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>
            {children}
        </main>
    </>
);

export default Layout;