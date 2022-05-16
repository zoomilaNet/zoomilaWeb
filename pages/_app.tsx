import '../styles/style.css';
import type { AppProps } from 'next/app';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import Layout from "../src/component/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {

  return <Provider store={store}><Layout><Component {...pageProps} /></Layout></Provider>
}

export default MyApp
