import type { AppProps } from 'next/app'
import { store } from '../utils/redux/index';
import { Provider } from "react-redux";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  );
}

export default MyApp
