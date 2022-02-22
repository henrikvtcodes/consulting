import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeLayout from "layouts/home";
import Brands from "~components/tui/brands";
import Features from "~components/tui/featuresTabs";
import config from "~utils/config";
import { vendors } from "~utils/config";

const Page: NextPage = (props) => {
  return (
    <HomeLayout title="Networking Solutions" desc="Connect your property.">
      <Features tabs={config.solutionsTabs.networking} />
      <Brands logos={vendors.Networking} />
    </HomeLayout>
  );
};

export default Page;
