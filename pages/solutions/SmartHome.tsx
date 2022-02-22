import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import { vendors } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout
      title="Smart Home"
      desc="Automate your home or business. Save time and energy instantly."
    >
      <Brands logos={vendors.Smarthome} />
    </HomeLayout>
  );
};

export default Page;
