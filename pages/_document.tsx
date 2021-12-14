import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full">
        <Head>
          {process.env.NODE_ENV === "production" ? (
            <script
              async
              defer
              data-website-id="8157dbf3-8f86-4656-a8ae-d3010628e50d"
              src="/umami.js"
              data-host-url="http://analytics.henriktech.com"
            />
          ) : (
            <script
              async
              defer
              data-website-id="77e5daa9-9e45-4a71-9e24-018a2acdac45"
              src="/umami.js"
              data-host-url="http://analytics.henriktech.com"
            />
          )}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
