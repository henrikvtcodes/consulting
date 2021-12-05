import type { AppProps } from 'next/app'
import { store } from '../utils/redux/index';
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <ChakraProvider resetCSS={false} >
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
  );
}

export default App;
