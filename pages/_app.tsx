import type { AppProps } from 'next/app'
import { store } from '../utils/redux/index';
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

function App({ Component, pageProps }:AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default App;
