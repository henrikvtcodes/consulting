import type { NextPage } from "next";

import HomeLayout from "layouts/home";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Contact" desc="Submit an inquiry">
      <div className="flex justify-around">
        <div>
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
      </div>
    </HomeLayout>
  );
};

export default Page;
