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

const vendorLogos = {
  ubiquiti : {
    alt: "Ubiquiti Networks",
    href: "#",
    img: "/brands/UbiquitiNetworks-ColorFullLogo.png",
    width: 164,
  },
  synology : {
    alt: "Synology",
    href: "#",
    img: "/brands/Synology_Dark.png",
    width: 180,
  },
  netgear : {
    alt: "Netgear Business",
    href: "#",
    img: "/brands/Netgear_LightBg.png",
    width: 204,
  },
  hikvision : {
    alt: "Hikvision",
    href: "#",
    img: "/brands/Hikvision_Color.png",
    width: 85,
  },
  axisComs : {
    alt: "Axis Communications",
    href: "#",
    img: "/brands/Axis-Communications_LightBg.png",
    width: 133,
  },
  uniview : {
    alt: "Uniview",
    href: "#",
    img: "/brands/Uniview_Color_Dark.png",
    width: 95,
  },
  lutronCaseta : {
    alt: "Lutron Caseta Wireless",
    href: "#",
    img: "/brands/LutronCaseta_Color_Dark.png",
    width: 76,
  },
  hue : {
    alt: "Philips Hue",
    href: "#",
    img: "/brands/PhilipsHue_Color_Dark.png",
    width: 75,
  },
  aeotec : {
    alt: "Aeotec",
    href: "#",
    img: "/brands/Aeotec_Color.png",
    width: 193,
  },
  kasa : {
    alt: "Kasa Smart",
    href: "#",
    img: "/brands/KasaSmart_Color_Dark.png",
    width: 159,
  },
  homeseer : {
    alt: "HomeSeer",
    href: "#",
    img: "/brands/HomeSeer_Color_Dark.png",
    width: 255,
  },
  sonos : {
    alt: "Sonos",
    href: "#",
    img: "/brands/Sonos_Dark.png",
    width: 72,
  },
  tplink : {
    alt: "TP-Link",
    href: "#",
    img: "/brands/TPLink-Color-Logo.svg",
    width: 99,
  },
  pfsense : {
    alt: "PFSense",
    href: "#",
    img: "/brands/PfSense_color.png",
    width: 164,
  },
  truecable : {
    alt: "TrueCable",
    href: "#",
    img: "/brands/TrueCable_Dark.png",
    width: 102,
  },
  belden : {
    alt: "Belden",
    href: "#",
    img: "/brands/Belden_Color.svg",
    width: 250,
  },
  merakiGo : {
    alt: "Cisco Meraki Go",
    href: "#",
    img: "/brands/CiscoMerakiGo_Color_Dark.png",
    width: 173,
  },
  instantOn : {
    alt: "Aruba Instant On",
    href: "#",
    img: "/brands/ArubaInstantOn_Color_Dark.svg",
    width: 93,
  },
}

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
