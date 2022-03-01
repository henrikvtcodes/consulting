import type { AppProps } from "next/app";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";

// eslint-disable-next-line
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div>
      {process.env.NODE_ENV === "production" && <WarningBanner />}
      <Favicon />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
