import '../styles/style.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <div dir='rtl' className="font-iransans"> <Provider store={store}><Component {...pageProps} /></Provider></div>
}

export default MyApp
