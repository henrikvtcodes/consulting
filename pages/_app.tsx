import type { AppProps } from "next/app";
import { Fragment } from "react";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";
import { Provider } from "react-redux";

// prettier-ignore
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div>
      {process.env.NODE_ENV === "production" ? <WarningBanner /> : <Fragment/>}
      <Favicon />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
