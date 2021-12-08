import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full bg-gray-50">
        <Head>
          <script
            async
            defer
            data-website-id="8157dbf3-8f86-4656-a8ae-d3010628e50d"
            src="https://analytics.henriktech.com/umami.js"
          />
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
