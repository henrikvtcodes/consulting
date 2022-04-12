import type { AppProps } from "next/app";
import { Fragment, useEffect } from "react";
import PlausibleProvider, { usePlausible } from "next-plausible";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const plausible = usePlausible();

  useEffect(() => {
    plausible("Marketing View");
  }, [plausible]);
  return (
    <div className="selection:bg-brand-accent2">
      {process.env.NODE_ENV === "production" ? <WarningBanner /> : <Fragment />}
      <Favicon />
      <PlausibleProvider
        domain="consulting.henrikvt.com"
        selfHosted
        customDomain="https://plausible.henriktech.com"
        trackOutboundLinks={true}
      >
        <Component {...pageProps} />
      </PlausibleProvider>
    </div>
  );
}

export default App;
