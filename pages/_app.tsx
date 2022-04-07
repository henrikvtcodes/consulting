import type { AppProps } from "next/app";
import Favicon, { DefaultMeta } from "~components/meta";
import PlausibleProvider from "next-plausible";
import { useEffect } from "react";

import { usePlausible } from "next-plausible";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const plausible = usePlausible();

  useEffect(() => {
    plausible("siteView", {
      props: {
        v: "Landing",
      },
    });
  }, [plausible]);

  return (
    <div>
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
