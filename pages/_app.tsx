import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {process.env.NEXT_PUBLIC_PROD_WARN === "true" && <WarningBanner />}
      <Favicon />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
