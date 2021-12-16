import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import Brands from "~components/tui/brands";

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
    alt: "Cisco Meraki Go",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/CiscoMerakiGo_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvQ2lzY29NZXJha2lHb19Db2xvcl9EYXJrLnBuZyIsImlhdCI6MTYzOTYyMTI5NywiZXhwIjoxOTU0OTgxMjk3fQ.6O9NbmsLcos-taoW-GtoOaBo1lBTV4UKjQnVFLAVkSg",
    width: 173,
  },
  {
    alt: "Aruba Instant On",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/ArubaInstantOn_Color_Dark.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvQXJ1YmFJbnN0YW50T25fQ29sb3JfRGFyay5zdmciLCJpYXQiOjE2Mzk2MjEzNjEsImV4cCI6MTk1NDk4MTM2MX0.pvDRto0B19tV7eczXpAnk4QkO4u35zjvfzrDh0GOK7Q",
    width: 93,
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
      title="Wifi Solutions"
      desc="Get the most out of your internet connection."
    >
      <Brands logos={vendors} />
    </HomeLayout>
  );
}

export default Page;