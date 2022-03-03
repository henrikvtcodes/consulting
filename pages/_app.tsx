import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
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
  );
}

export default App;
