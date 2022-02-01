import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import Favicon from "~components/meta";
import "../styles/globals.css";

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
        <Favicon />
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}

export default App;
