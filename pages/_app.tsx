import type { AppProps } from 'next/app'
import Favicon from "~components/meta";
import { AuthProvider } from '~utils/xstate/providers';

import "../styles/globals.css";

function App({ Component, pageProps }:AppProps) {
  return (
  <div>
    <AuthProvider>
      <Favicon />
      <Component {...pageProps} />
    </AuthProvider>
  </div>
  );
}

export default App;
