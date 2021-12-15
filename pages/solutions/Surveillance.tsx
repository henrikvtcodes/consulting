import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import { DefaultMeta } from '~components/meta'

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Security &amp; Surveillance"
      desc="Keep an eye on what's yours. Privacy-first video surveillance."
    ></HomeLayout>
  );
}

export default Page;