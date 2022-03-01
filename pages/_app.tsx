import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import Favicon from "~components/meta";
import { WarningBanner } from "~components/tui/warning-banner";
import "../styles/globals.css";

// eslint-disable-next-line
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "light",
          fontFamily: "Inter",
        }}
      >
        {process.env.PROD_WARN === "true" && <WarningBanner />}
        <Favicon />
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}

export default App;
