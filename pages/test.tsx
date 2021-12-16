import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";

import HomeLayout from "layouts/home";
import { DefaultMeta } from "~components/meta";
import Brands from "~components/tui/brands";

const Page: NextPage = (props) => {
  return (
    <HomeLayout>
      <DefaultMeta />
      <Brands />
    </HomeLayout>
  );
};

export default Page;