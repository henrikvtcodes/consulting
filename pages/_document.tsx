import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            data-website-id="8157dbf3-8f86-4656-a8ae-d3010628e50d"
            src="/umami.js"
            data-host-url="http://analytics.henriktech.com"
          />
          <link rel="icon" type="image/png" href="/henriklogo.png" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
