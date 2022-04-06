import type { AppProps } from "next/app";
import { Fragment } from "react";
import PlausibleProvider from "next-plausible";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";
import { Provider } from "react-redux";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div>
      {process.env.NODE_ENV === "production" ? <WarningBanner /> : <Fragment />}
      <Favicon />
      <PlausibleProvider
        domain="consulting.henrikvt.com"
        selfHosted
        customDomain="https://plausible.henriktech.com"
      >
        <Component {...pageProps} />
      </PlausibleProvider>
    </div>
  );
}

export default App;
