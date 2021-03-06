import type { NextPage } from "next";

import HomeLayout from "layouts/PublicPage";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Contact" desc="Submit an inquiry">
      <div className="flex flex-col items-center w-fit mx-auto">
        <div className=" bg-gray-100 rounded-lg py-2 px-4 mx-2 md:m-0">
          <h3 className="text-2xl font-semibold"> Contact Me</h3>
          <p className="max-w-2xl">
            {" "}
            If you&apos;re interested in what I can provide to you, please
            submit a message through the form below. I&apos;ll get back to you
            as soon as I can. <br />
            <span className="font-bold"> You can also email me at:</span>{" "}
            consulting at henrikvt dot com.
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYSNFktbQ_FiiCYwYfBP7sYixqcfXCebtEVzYCQ68BHmnPsA/viewform?embedded=true"
          width={720}
          height={1280}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </HomeLayout>
  );
};

export default Page;
