import type { NextPage } from "next";

import HomeLayout from "layouts/home";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Contact" desc="Submit an inquiry">
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200"></div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Page;
