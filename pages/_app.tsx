import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Favicon from "~components/meta";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Favicon />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
