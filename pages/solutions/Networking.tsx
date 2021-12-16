import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import Brands from '~components/tui/brands'

const vendors = [
  {
    alt: "Ubiquiti Networks",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/UbiquitiNetworks_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvVWJpcXVpdGlOZXR3b3Jrc19Db2xvcl9EYXJrLnBuZyIsImlhdCI6MTYzOTYxMTEyMCwiZXhwIjoxOTU0OTcxMTIwfQ.kJBMVEgmowlPRq2_-7mWR6UhFFUjT7lS2-sidzxYtf0",
    width: 164,
  },
  {
    alt: "TP-Link",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/TPLink_Color.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvVFBMaW5rX0NvbG9yLnBuZyIsImlhdCI6MTYzOTYxMTExOCwiZXhwIjoxOTU0OTcxMTE4fQ.dDbtPtcde-gRe1pLTX4ATinRQaejHHrplC5b-ggLGq0",
    width: 99,
  },
  {
    alt: "Netgear Business",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/NetgearBusiness_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvTmV0Z2VhckJ1c2luZXNzX0RhcmsucG5nIiwiaWF0IjoxNjM5NjExMTEzLCJleHAiOjE5NTQ5NzExMTN9.gktSuTvcHE5Nm8EE3lmqtbidKOWuVIEo4ncppJz4dEw",
    width: 204,
  },
  {
    alt: "PFSense",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/PfSense_Color.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvUGZTZW5zZV9Db2xvci5wbmciLCJpYXQiOjE2Mzk2MTExMTYsImV4cCI6MTk1NDk3MTExNn0.EDC_e3ZLaghvKWWLgkv0IhprquH5yIChJuDv9aK_vD0",
    width: 164,
  },
  {
    alt: "TrueCable",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/TrueCable_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvVHJ1ZUNhYmxlX0RhcmsucG5nIiwiaWF0IjoxNjM5NjE3NTQ2LCJleHAiOjE5NTQ5Nzc1NDZ9.uv4njudURdvYtsERsT2wRHB0qU-m2fmTwsOsS2r8iec",
    width: 102,
  },
  {
    alt: "Belden",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Belden_Color.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvQmVsZGVuX0NvbG9yLnN2ZyIsImlhdCI6MTYzOTYxOTc2NywiZXhwIjoxOTU0OTc5NzY3fQ.e2DKcZP0xCLu4V1r2fTk5RpQ4AXP5AyasLMdLSDhioE",
    width: 250,
  },
];

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Networking Solutions"
      desc="Connect your property."
    >
      <Brands logos={vendors} />
    </HomeLayout>
  );
}

export default Page;