import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Wifi Solutions"
      desc="Get the most out of your internet connection."
    >
      <Brands logos={vendors.WiFi} />
    </HomeLayout>
  );
};

export default Page;
