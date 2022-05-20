import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import PlausibleProvider, { usePlausible } from "next-plausible";
import { Fragment, useEffect } from "react";

import Favicon from "components/meta";
import { WarningBanner } from "components/tui/warning-banner";
import "../styles/globals.css";
import { useApiClient } from "~utils/hooks/useApiClient";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const plausible = usePlausible();

  const apiClient = useApiClient();

  useEffect(() => {
    plausible("Dev View");
  }, [plausible]);

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => apiClient.get(url).json(),
        provider: () => new Map(),
      }}
    >
      <Favicon />
      <SessionProvider session={session}>
        {process.env.NEXT_PUBLIC_PROD_WARN === "true" ? (
          <WarningBanner />
        ) : (
          <Fragment />
        )}
        <PlausibleProvider
          domain="consulting.henrikvt.com"
          selfHosted
          customDomain="https://plausible.henriktech.com"
          trackOutboundLinks={true}
        >
          <Component {...pageProps} />
        </PlausibleProvider>
      </SessionProvider>
    </SWRConfig>
  );
}

export default App;
