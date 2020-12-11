import '../styles/global.css'
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "next/app";
import { appWithTranslation } from "../i18n";

const MyApp = ({ Component, pageProps }) => <Layout><Component {...pageProps} /></Layout>;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);