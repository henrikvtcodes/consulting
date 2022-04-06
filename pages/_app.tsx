import type { AppProps } from "next/app";
import Favicon, { DefaultMeta } from "~components/meta";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Favicon />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
