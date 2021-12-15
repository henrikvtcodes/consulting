import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import { DefaultMeta } from '~components/meta'

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Wifi Solutions"
      desc="Get the most out of your internet connection."
    ></HomeLayout>
  );
}

export default Page;