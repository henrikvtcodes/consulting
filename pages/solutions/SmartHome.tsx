import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeLayout from 'layouts/home'
import Brands from "~components/tui/brands";

const vendors = [
  {
    alt: "Lutron Caseta Wireless",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/LutronCaseta_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvTHV0cm9uQ2FzZXRhX0NvbG9yX0RhcmsucG5nIiwiaWF0IjoxNjM5NjIzNDcwLCJleHAiOjE5NTQ5ODM0NzB9.8_pknIRUF-P656Wc76pl0qxcVe_UipYb96g5zSSLfaM",
    width: 76,
  },
  {
    alt: "Philips Hue",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/PhilipsHue_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvUGhpbGlwc0h1ZV9Db2xvcl9EYXJrLnBuZyIsImlhdCI6MTYzOTYyMzg5OSwiZXhwIjoxOTU0OTgzODk5fQ.NfUe6aoETh4RHprRhgJRq8OdqnAdC5fP6oc30h-2jHM",
    width: 75,
  },
  {
    alt: "Aeotec",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Aeotec_Color.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvQWVvdGVjX0NvbG9yLnBuZyIsImlhdCI6MTYzOTYyMzcwOSwiZXhwIjoxOTU0OTgzNzA5fQ.PiUGBd-OL1RI9ugjnfwcZHOVXECDFTrO9Yj9pZl8ADw",
    width: 193,
  },
  {
    alt: "Kasa Smart",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/KasaSmart_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvS2FzYVNtYXJ0X0NvbG9yX0RhcmsucG5nIiwiaWF0IjoxNjM5NjIzNjE4LCJleHAiOjE5NTQ5ODM2MTh9.3IaVVQTwE9jNbQq2Lsic78eC1RCr25R5gKSLrvNWeyU",
    width: 159,
  },
  {
    alt: "HomeSeer",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/HomeSeer_Color_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvSG9tZVNlZXJfQ29sb3JfRGFyay5wbmciLCJpYXQiOjE2Mzk2MjQyMDAsImV4cCI6MTk1NDk4NDIwMH0.RwbIKt0xH7bCGTVstFtsWGYTQiKAmHyWpf2jYp7q5PA",
    width: 255,
  },
  {
    alt: "Sonos",
    href: "#",
    img: "https://impnjvrvbyrcqytveudc.supabase.in/storage/v1/object/sign/files/images/Sonos_Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9pbWFnZXMvU29ub3NfRGFyay5wbmciLCJpYXQiOjE2Mzk2MjQwOTQsImV4cCI6MTk1NDk4NDA5NH0.6_ZjjRProzb4duq5r9nU__F99Fj9SsxaJAyJCIlpYxE",
    width: 72,
  },
];

const Page:NextPage = (props) => {
  return (
    <HomeLayout
      title="Smart Home"
      desc="Automate your home or business. Save time and energy instantly."
    >
      <Brands logos={vendors} />
    </HomeLayout>
  );
}

export default Page;