import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Security &amp; Surveillance"
      desc="Keep an eye on what's yours. Privacy-first video surveillance."
    >
      <Brands logos={vendors.Security} />
    </HomeLayout>
  );
};

export default Page;
