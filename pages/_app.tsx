<<<<<<< HEAD
import type { AppProps } from "next/app";
=======
import type { AppInitialProps, AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";
>>>>>>> main

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";
import { localStorageCache } from "~utils/swr_localstoragecache";
import { store } from "state/store";
import { Provider } from "react-redux";

// prettier-ignore
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
<<<<<<< HEAD
    <div>
      {process.env.NODE_ENV === "production" && <WarningBanner />}
      <Favicon />
      <Component {...pageProps} />
    </div>
=======
    <Provider store={store}>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios.get(url).then((res) => res.data),
          provider: () => new Map(),
        }}
      >
        <SessionProvider session={session}>
          {process.env.NEXT_PUBLIC_PROD_WARN === "true" && <WarningBanner />}
          <Component {...pageProps} />
        </SessionProvider>
      </SWRConfig>
    </Provider>
>>>>>>> main
  );
}

export default App;
