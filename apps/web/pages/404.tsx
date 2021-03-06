import NextLink from "next/link";
import { usePlausible } from "next-plausible";
import { useEffect } from "react";

import { CustomMeta } from "~components/MetaComponents";

export const ErrorComponent = (props: { url: string; label: string }) => {
  return (
    <div className="sm:flex">
      <p className="text-4xl font-extrabold text-brand-accent1 sm:text-5xl">
        404
      </p>
      <div className="sm:ml-6">
        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1 className="text-4xl font-extrabold text-brand-text1 tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-1 text-base text-brand-text2">
            Please check the URL in the address bar and try again.
          </p>
        </div>
        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
          <NextLink href={props.url} passHref>
            <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-accent1 hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2">
              Go back {`${props.label}`}
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const plausible = usePlausible();

  useEffect(() => {
    plausible("404", { props: { path: document.location.pathname } });
  });

  return (
    <main className="flex justify-center align-middle h-screen w-screen">
      <CustomMeta
        title="Error 404: Page not found"
        desc="Error 404: Page not found. Please check the URL and try again."
      />
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <ErrorComponent url="/" label="home" />
        </div>
      </div>
    </main>
  );
};

export default Page;
