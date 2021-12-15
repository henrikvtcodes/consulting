import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Networking Solutions"
      desc="Connect your property."
    ></HomeLayout>
  );
}

export default Page;