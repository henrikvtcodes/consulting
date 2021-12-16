import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import Brands from "~components/tui/brands";

const vendors = [
  {
    alt: "Synology",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Synology_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvU3lub2xvZ3lfRGFyay5wbmciLCJpYXQiOjE2Mzk2MTExMTcsImV4cCI6MTk1NDk3MTExN30.mBmbN2-wTHtLV8mA3jbNCTZ651IIYceEHPX4ztvtBFE",
    width: 180,
  },
  {
    alt: "Ubiquiti Networks",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/UbiquitiNetworks_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvVWJpcXVpdGlOZXR3b3Jrc19Db2xvcl9EYXJrLnBuZyIsImlhdCI6MTYzOTYxMTEyMCwiZXhwIjoxOTU0OTcxMTIwfQ.kJBMVEgmowlPRq2_-7mWR6UhFFUjT7lS2-sidzxYtf0",
    width: 164,
  },
  {
    alt: "Netgear Business",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/NetgearBusiness_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvTmV0Z2VhckJ1c2luZXNzX0RhcmsucG5nIiwiaWF0IjoxNjM5NjExMTEzLCJleHAiOjE5NTQ5NzExMTN9.gktSuTvcHE5Nm8EE3lmqtbidKOWuVIEo4ncppJz4dEw",
    width: 204,
  },
  {
    alt: "Hikvision",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Hikvision_Color.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvSGlrdmlzaW9uX0NvbG9yLnBuZyIsImlhdCI6MTYzOTYxMTEwOSwiZXhwIjoxOTU0OTcxMTA5fQ.geO-4VP2N2njuHA6KtURk_mE-aeZBR1gML8MvySh72E",
    width: 85,
  },
  {
    alt: "Axis Communications",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/AxisCommunications_Color.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvQXhpc0NvbW11bmljYXRpb25zX0NvbG9yLnBuZyIsImlhdCI6MTYzOTYxMTEwNiwiZXhwIjoxOTU0OTcxMTA2fQ.6UjWijRDKvCnUaLoYCM4rQaedyYRftttBOA105DX7Qs",
    width: 133,
  },
  {
    alt: "Uniview",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Uniview_Color_Dark.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvVW5pdmlld19Db2xvcl9EYXJrLmpwZyIsImlhdCI6MTYzOTYyMjg3MiwiZXhwIjoxOTU0OTgyODcyfQ.LMii1Qa6UfEdX_UlaSWznl6D0bdrN3YY58VQzj_WYfI",
    width: 95,
  },
];

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Security &amp; Surveillance"
      desc="Keep an eye on what's yours. Privacy-first video surveillance."
    >
      <Brands logos={vendors} />
    </HomeLayout>
  );
}

export default Page;