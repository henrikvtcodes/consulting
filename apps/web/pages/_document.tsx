import Document, { Html, Head, Main, NextScript } from "next/document";

import { meta } from "apps/web/components/meta";

class AppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full">
        <Head>
          <script
            async
            defer
            data-website-id="77e5daa9-9e45-4a71-9e24-018a2acdac45"
            src="static/js/views.js"
            data-host-url="/proxy/views"
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="icon" type="image/png" href={meta.icon} />
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
