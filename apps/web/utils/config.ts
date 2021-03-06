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
  LockClosedIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  CursorClickIcon,
  HeartIcon,
  EyeIcon,
  MoonIcon,
  SpeakerphoneIcon,
  GlobeIcon,
} from "@heroicons/react/outline";

// prettier-ignore-file
// eslint-disable

export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
        desc: `When designing your WiFi system, I take note of many factors that affect the design of a WiFi network. Part of the process includes 
        investigating existing infrastructure and taking signal strength measurements. The end result is WiFi that works for you. `,
        icon: AdjustmentsIcon,
      },
      {
        feat: "Transparent",
        desc: `I strive to make sure that my clients can trust me. Our proposal packages (proposal, quotes, and invoices)
        clearly outline the goals of the project and the reasoning behind the design. All major costs (>$20) are itemized and
        explained.`,
        icon: BookOpenIcon,
      },
      {
        feat: "Budget Optimized",
        desc: `The budget is one of the central factors in any project. When given a budget, I make sure that it is used as efficiently
        as possible. If I can't work with a given budget, I make sure the client understands why and I will provide alternate options
        at the client's request.`,
        icon: CurrencyDollarIcon,
      },
      {
        feat: "Human Support",
        desc: `I never leave you in the dark. If you have any questions, or issues, I will not hesistate to help. Unless it's necessary,
        I won't even charge most of the time! Additionally, you won't be left confused; I don't hide behind fancy technical terms.`,
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
        desc: "I will do my best to build the best solution for your budget.",
        icon: CurrencyDollarIcon,
      },
      {
        feat: "Maintenace",
        desc: "Not everything needs replacing; I can also repair, maintain, and extend networks.",
        icon: PuzzleIcon,
      },
      {
        feat: "Security",
        desc: `I understand the importance of network security in the 21st century.`,
        icon: LockClosedIcon,
      },
      {
        feat: "Residential",
        desc: `Unstable home network? Slow internet? I can advise you on how to get the most out of your home network.
        Don't be afraid to ask; I will gladly give free advice.`,
        icon: HomeIcon,
      },
      {
        feat: "Small Business",
        desc: `As a small business, I love to work with other small businesses. I understand what is necessary
        to get your business online.`,
        icon: BriefcaseIcon,
      },
      {
        feat: "Rural",
        desc: `Need to connect multiple buildings? A pool, garage/workshop, guest house, or even neighbor? 
        HVTC is who you need; this is my specialty.`,
        icon: LocationMarkerIcon,
      },
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
      { feat: "Privacy first - I don't rely on Amazon or Google" },
      { feat: "Catch bad actors in high resolution" },
    ],
    longFeatures: [
      {
        feat: "Keep Watch",
        desc: "No low quality, unusable foootage here. When I install cameras, I make sure that they'll provide consistent, high-quality footage.",
        icon: EyeIcon,
      },
      {
        feat: "Quality Nightvision",
        desc: `When I select a camera, I make sure that it has class leading night vision. You'll never question
        what went bump in the night. `,
        icon: MoonIcon,
      },
      {
        feat: "2 Way Audio",
        desc: `Speak to people outside your camera - whether it's a delivery at your door or a not-so-sneaky trespasser.`,
        icon: SpeakerphoneIcon,
      },
      {
        feat: "Access From Anywhere",
        desc: `You'll be able to securely access your cameras from anywhere. The best part? Your data is never sent
        through big tech.`,
        icon: GlobeIcon,
      },
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
        feat: "Save Money",
        desc: "Optimize lighting and climate control use. Save money on energy bills and maintenance.",
        icon: LightningBoltIcon,
      },
      {
        feat: "Protect your Home",
        desc: "Automatically detect water and gas leaks, fire, and more. No more worrying.",
        icon: ShieldCheckIcon,
      },
      {
        feat: "Comfortable Living",
        desc: "Turn on lights in the morning and heat the house before you get home. No need to lift a finger.",
        icon: HeartIcon,
      },
      {
        feat: "One Remote",
        desc: "Forget about multiple remotes for different devices. Just one and done.",
        icon: CursorClickIcon,
      },
    ],
    icon: DeviceMobileIcon,
  },
];
const namedSolutions = {
  WiFi: solutions[0],
  Networking: solutions[1],
  Surveillance: solutions[2],
  SmartHome: solutions[3],
};

const vendorLogos = {
  ubiquiti: {
    alt: "Ubiquiti Networks",
    href: "#",
    img: "/brands/UbiquitiNetworks-ColorFullLogo.png",
    width: 164,
  },
  synology: {
    alt: "Synology",
    href: "#",
    img: "/brands/Synology_Dark.png",
    width: 180,
  },
  netgear: {
    alt: "Netgear Business",
    href: "#",
    img: "/brands/Netgear_LightBg.png",
    width: 204,
  },
  hikvision: {
    alt: "Hikvision",
    href: "#",
    img: "/brands/Hikvision_Color.png",
    width: 85,
  },
  axisComs: {
    alt: "Axis Communications",
    href: "#",
    img: "/brands/Axis-Communications_LightBg.png",
    width: 133,
  },
  uniview: {
    alt: "Uniview",
    href: "#",
    img: "/brands/Uniview_Color_Dark.jpg",
    width: 95,
  },
  lutronCaseta: {
    alt: "Lutron Caseta Wireless",
    href: "#",
    img: "/brands/LutronCaseta_Color_Dark.png",
    width: 76,
  },
  hue: {
    alt: "Philips Hue",
    href: "#",
    img: "/brands/PhilipsHue_Color_Dark.png",
    width: 75,
  },
  aeotec: {
    alt: "Aeotec",
    href: "#",
    img: "/brands/Aeotec_Color.png",
    width: 193,
  },
  kasa: {
    alt: "Kasa Smart",
    href: "#",
    img: "/brands/KasaSmart_Color_Dark.png",
    width: 159,
  },
  homeseer: {
    alt: "HomeSeer",
    href: "#",
    img: "/brands/HomeSeer_Color_Dark.png",
    width: 255,
  },
  sonos: {
    alt: "Sonos",
    href: "#",
    img: "/brands/Sonos_Dark.png",
    width: 72,
  },
  tplink: {
    alt: "TP-Link",
    href: "#",
    img: "/brands/TPLink-Color-Logo.svg",
    width: 99,
  },
  pfsense: {
    alt: "PFSense",
    href: "#",
    img: "/brands/PfSense_color.png",
    width: 164,
  },
  truecable: {
    alt: "TrueCable",
    href: "#",
    img: "/brands/TrueCable_Dark.png",
    width: 102,
  },
  belden: {
    alt: "Belden",
    href: "#",
    img: "/brands/Belden_Color.svg",
    width: 250,
  },
  merakiGo: {
    alt: "Cisco Meraki Go",
    href: "#",
    img: "/brands/CiscoMerakiGo_Color_Dark.png",
    width: 173,
  },
  instantOn: {
    alt: "Aruba Instant On",
    href: "#",
    img: "/brands/ArubaInstantOn_Color_Dark.svg",
    width: 93,
  },
};

const vendors = {
  WiFi: [
    vendorLogos.ubiquiti,
    vendorLogos.tplink,
    vendorLogos.netgear,
    vendorLogos.merakiGo,
    vendorLogos.instantOn,
    vendorLogos.belden,
  ],
  Networking: [
    vendorLogos.ubiquiti,
    vendorLogos.tplink,
    vendorLogos.netgear,
    vendorLogos.pfsense,
    vendorLogos.truecable,
    vendorLogos.belden,
  ],
  Smarthome: [
    vendorLogos.lutronCaseta,
    vendorLogos.hue,
    vendorLogos.aeotec,
    vendorLogos.kasa,
    vendorLogos.homeseer,
    vendorLogos.sonos,
  ],
  Security: [
    vendorLogos.synology,
    vendorLogos.ubiquiti,
    vendorLogos.netgear,
    vendorLogos.hikvision,
    vendorLogos.axisComs,
    vendorLogos.uniview,
  ],
};

const allSolutions = [
  {
    name: "Optimized Cost",
    description:
      "When I design a solution for you, I make sure that the end result is cost effective without compromising on quality.",
  },
  {
    name: "Transparent Pricing",
    description:
      "My pricing structure is simple and transparent. I provide a clear breakdown of all costs.",
  },
  {
    name: "Communication",
    description:
      "I am always in constant communication with my clients and will respond to any questions or concerns.",
  },
  {
    name: "Guaranteed Results",
    description:
      "If I make a mistake, it will be fixed at no additional labor cost to you.",
  },
];

const faqs = [
  {
    question: "How old are you? Who are you?",
    answer:
      "You can check out my about page; that should answer all your questions.",
  },
  // {
  //   question: "Do you have a terms of service and/or privacy policy?",
  //   answer: `Since I use Google and Facebook API's, I am required to have some form of privacy policy.
  //   The code is open source on [GitHub](https://github.com/henrikvtcodes/consulting), but I'll tell you exactly how it works.
  //   I only store basic identifying information about you: name, email, profile picture, and your phone number, if you consented to that.
  //   I also collect anonymous usage data with a simple analytics tool.
  //   This site does not employ any privacy-intrusive technologies; e.g. cross site trackers, supercookies, personalization, etc.`,
  // },
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

const NextAuthErrorParams: {
  [key: string]: {
    title: string;
    message: string;
  };
} = {
  Default: {
    title: "An Unknown Error Occurred",
    message: "An unknown error ocurred. Please try again later.",
  },
  Configuration: {
    title: "Server Error",
    message: "The server encountered an error while attempting to log you in.",
  },
  InvalidRole: {
    title: "User Discrepancy",
    message:
      "There is a problem with your user account. Please contact Henrik to report the problem.",
  },
  Verification: {
    title: "Verification Error",
    message:
      "The email verification token is invalid or expired. Please try again.",
  },
  AccessDenied: {
    title: "Access Denied",
    message: "You are not permitted to access this page.",
  },
  OAuthSignin: {
    title: "Provider Sign In Error",
    message:
      "You could not be signed in using this provider. Please try again.",
  },
  OAuthCallback: {
    title: "Provider Sign In Error",
    message: "The sign in process could not be completed.",
  },
  OAuthAccountNotLinked: {
    title: "Provider Sign In Error",
    message: "Your email is already linked to a different account.",
  },
  Callback: {
    title: "Provider Sign In Error",
    message: "The sign in process could not be completed.",
  },
  SessionRequired: {
    title: "Session Required",
    message: "You must be signed in to access that page.",
  },
};

const allowedOrigins: string[] = [
  "http://localhost:3000",
  "https://consulting.henrikvt.com",
];

const config = {
  solutions: solutions,
  origins: allowedOrigins,
  NextAuthErrorParams,
};

export default config;
export {
  solutions,
  allSolutions,
  namedSolutions,
  faqs,
  people,
  allowedOrigins,
  vendors,
  NextAuthErrorParams,
};
