import {
  WifiIcon,
  GlobeAltIcon,
  VideoCameraIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  ChatAlt2Icon,
  HomeIcon,
  PuzzleIcon,
  BriefcaseIcon,
  LocationMarkerIcon,
  LockClosedIcon
} from "@heroicons/react/outline";

// prettier-ignore-file
// eslint-disable

const solutions = [
  {
    name: "Wifi Connectivity",
    description: "Get the most out of your internet connection.",
    href: "/solutions/WiFi",
    shortFeatures: [
      {
        feat: "Wide range of options",
        tip: "Choose from a wide range of options",
      },
      {
        feat: "Own your equipment",
        tip: "When your internet service provider installs hardware in your home",
      },
      { feat: "Highly Flexible" },
      { feat: "Next generation WiFi 6 solutions available" },
    ],
    longFeatures: [
      {
        feat: "Custom Designed",
        desc: `When designing your WiFi system, we take note of many factors that affect the design of a WiFi network. Part of the process includes 
        investigating existing infrastructure and taking signal strength measurements. The end result is WiFi that works for you. `,
        icon: AdjustmentsIcon,
      },
      {
        feat: "Transparent",
        desc: `We strive to make sure that our clients can trust us. Our proposal packages (proposal, quotes, and invoices)
        clearly outline the goals of the project and the reasoning behind the design. All major costs (>$20) are itemized and
        explained.`,
        icon: BookOpenIcon,
      },
      {
        feat: "Budget Optimized",
        desc: `The budget is one of the central factors in any project. When given a budget, we make sure that it is used as efficiently
        as possible. If we can't work with a given budget, we make sure the client understands why and we will provide alternate options
        at the client's request.`,
        icon: CurrencyDollarIcon,
      },
      {
        feat: "Human Support",
        desc: `We never leave you in the dark. If you have any questions, or issues, we will not hesistate to help. Unless it's necessary,
        we won't even charge most of the time! Additionally, you won't be left confused; We don't try to hide behind fancy technical terms.`,
        icon: ChatAlt2Icon,
      },
    ],
    icon: WifiIcon,
  },
  {
    name: "Networking",
    description: "Connect your property.",
    href: "/solutions/Networking",
    shortFeatures: [
      { feat: "High speed: modern hardware" },
      { feat: "Wired and wireless networking" },
      { feat: "Connect multiple buildings together" },
      { feat: "Remote monitoring available" },
    ],
    longFeatures: [
      {
        feat: "Limited Budget",
        desc: "We will do our best to build the best solution for your budget.",
        icon: CurrencyDollarIcon,
      },
      {
        feat: "Maintenace",
        desc: "Not everything needs replacing; we can also repair, maintain, and extend networks.",
        icon: PuzzleIcon,
      },
      {
        feat: "Security",
        desc: `We understand the importance of network security in the 21st century.`,
        icon: LockClosedIcon,
      },
      {
        feat: "Residential",
        desc: `Unstable home network? Slow internet? We can advise you on how to get the most out of your home network.
        Don't be afraid to ask; we will gladly give free advice.`,
        icon: HomeIcon,
      },
      {
        feat: "Small Business",
        desc: `As a small business, we love to work with other small businesses. We understand what is necessary
        to get your business online.`,
        icon: BriefcaseIcon,
      },
      {
        feat: "Rural",
        desc: `Need to connect multiple buildings? A pool, garage/workshop, guest house, or even neighbor? 
        HVTC is who you need; this is our specialty.`,
        icon: LocationMarkerIcon,
      }
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "Security & Surveillance",
    description:
      "Keep an eye on what's yours. Privacy first video surveillance.",
    href: "/solutions/Surveillance",
    shortFeatures: [
      { feat: "Highly scalable" },
      { feat: "Footage stored locally or in a private cloud" },
      { feat: "Privacy first - we don't rely on Amazon or Google" },
      { feat: "Catch bad actors in high resolution" },
    ],
    longFeatures: [
      {
        feat: "",
        desc: "",
        icon: WifiIcon,
      }
    ],
    icon: VideoCameraIcon,
  },
  {
    name: "Smart Home",
    description:
      "Automate your home or business. Save time and energy instantly.",
    href: "/solutions/SmartHome",
    shortFeatures: [
      { feat: "Access from anywhere" },
      { feat: "Smart lighting" },
      { feat: "Intelligent thermostat & window treatment control" },
      { feat: "Smart Audio & Video" },
    ],
    longFeatures: [
      {
        feat: "",
        desc: "",
        icon: WifiIcon,
      }
    ],
    icon: DeviceMobileIcon,
  },
];
const namedSolutions = {
  WiFi: solutions[0],
  Networking: solutions[1],
  Surveillance: solutions[2],
  SmartHome: solutions[3],
}

const vendors = {
  WiFi: [
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
],
  Networking: [
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
],
  Smarthome: [
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
],
  Security: [
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
]
}

const allSolutions = [
  {
    name: "Optimized Cost",
    description:
      "When we design a solution for you, we make sure that the end is cost effective without compromising on quality.",
  },
  {
    name: "Transparent Pricing",
    description:
      "Our pricing structure is simple and transparent. We provide a clear breakdown of all costs.",
  },
  {
    name: "Communication",
    description:
      "We are always in constant communication with our clients and will respond to any questions or concerns.",
  },
  {
    name: "Guaranteed Results",
    description:
      "If we make a mistake, it will be fixed at no additional cost to you.",
  },
];

const faqs = [
  {
    question: "How old are you? Who are you?",
    answer:
      "You can check out my about page; that should answer all your questions.",
  },
  {
    question: "Do you have a terms of service and/or privacy policy?",
    answer: `Since I use Google and Facebook API's, I am required to have some form of privacy policy. 
    The code is open source on [GitHub](https://github.com/henrikvtcodes/consulting), but I'll tell you exactly how it works.
    I only store basic identifying information about you: name, email, profile picture, and your phone number, if you consented to that. 
    I also collect anonymous usage data with a simple analytics tool.
    This site does not employ any privacy-intrusive technologies; e.g. cross site trackers, supercookies, personalization, etc.`,
  },
  {
    question: "How do you process payment? Is it secure?",
    answer: `I employ Stripe as my payment processor. This means that any of your raw credit card details, bank information, or other sensitive information are never processed or stored by me. 
    It is stored in encrypted form on Stripe's infrastructure. You can read their policies here: [https://stripe.com/privacy](https://stripe.com/privacy).`,
  },
];

const people = [
  {
    name: "Henrik Van Tassell",
    role: "Sole Proprietor - Consultant, Installer",
    imageUrl: "/henrik_headshot.jpg",
    bio: `Hi, I'm Henrik: a 17yo with an all-around enthusiasm for next-generation technology. My skills encompass many different areas of technology: programming, event a/v, networking, electrical. 
    All of this has been enabled by my best central trait: a passion for deciphering how things function and a desire to learn how to utilize those things.`,
    twitterUrl: "https://twittter/henrik_tech",
    linkedinUrl: "https://www.linkedin.com/in/henrik-van-tassell-68964a216/",
  },
  // More people...
];

const solutionsTabs = [
  {
    name: "Design",
    features: [
      {
        name: "Adaptive and modular",
        description:
          "The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
        imageAlt:
          "Maple organizer base with slots, supporting white polycarbonate trays of various sizes.",
      },
    ],
  },
  {
    name: "Material",
    features: [
      {
        name: "Natural wood options",
        description:
          "Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg",
        imageAlt:
          "Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.",
      },
    ],
  },
  {
    name: "Considerations",
    features: [
      {
        name: "Helpful around the home",
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg",
        imageAlt:
          "Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
      },
    ],
  },
  {
    name: "Included",
    features: [
      {
        name: "Everything you'll need",
        description:
          "The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg",
        imageAlt:
          "Walnut organizer system on black leather desk mat on top of white desk.",
      },
    ],
  },
];

const NextAuthErrorParams: {
  [key: string]: {
    title: string;
    message: string;
  };
} = {
  "Default": {
    title: "An Unknown Error Occurred",
    message: "An unknown error ocurred. Please try again later.",
  },
  "Configuration": {
    title: "Server Error",
    message: "The server encountered an error while attempting to log you in.",
  },
  "Verification": {
    title: "Verification Error",
    message:
      "The email verification token is invalid or expired. Please try again.",
  },
  "AccessDenied": {
    title: "Access Denied",
    message: "You are not permitted to access this page.",
  },
  "OAuthSignin": {
    title: "Provider Signin Error",
    message: "We were not able to sign you in using this provider.",
  },
  "OAuthCallback": {
    title: "Provider Signin Error",
    message: "We were not able to complete the signin process.",
  },
};

const allowedOrigins: string[] = [
  "http://localhost:3000",
  "https://consulting.henrikvt.com",
];

const config = {
  solutions: solutions,
  solutionsTabs: {
    wifi: solutionsTabs,
    networking: solutionsTabs,
    surveillance: solutionsTabs,
    smartHome: solutionsTabs,
  },
  origins: allowedOrigins,
  NextAuthErrorParams,
};

export default config;
export { solutions, allSolutions, namedSolutions,  faqs, people, allowedOrigins, vendors };
