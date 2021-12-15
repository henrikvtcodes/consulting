import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import { DefaultMeta } from '~components/meta'

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Smart Home"
      desc="Automate your home or business. Save time and energy instantly."
    ></HomeLayout>
  );
}

export default Page;