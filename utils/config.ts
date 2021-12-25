import {
  WifiIcon,
  GlobeAltIcon,
  VideoCameraIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";

const solutions = [
  {
    name: "Wifi Connectivity",
    description: "Get the most out of your internet connection.",
    href: "/solutions/WiFi",
    includedFeatures: [
      {feat:"Wide range of options", tip: "Choose from a wide range of options"},
      {feat:"Own your equipment", tip: "When your internet service provider installs hardware in your home"},
      {feat:"Highly Flexible"},
      {feat:"Next generation WiFi 6 solutions available"},
    ],
    icon: WifiIcon,
  },
  {
    name: "Networking",
    description: "Connect your property.",
    href: "/solutions/Networking",
    includedFeatures: [
      {feat:"High speed: modern hardware"},
      {feat:"Wired and wireless networking"},
      {feat:"Connect multiple buildings together"},
      {feat:"Remote monitoring available"},
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "Security & Surveillance",
    description:
      "Keep an eye on what's yours. Privacy first video surveillance.",
    href: "/solutions/Surveillance",
    includedFeatures: [
      {feat:"Highly scalable"},
      {feat:"Footage stored locally or in a private cloud"},
      {feat:"Privacy first - we don't rely on Amazon or Google"},
      {feat:"Catch bad actors in high resolution"},
    ],
    icon: VideoCameraIcon,
  },
  {
    name: "Smart Home",
    description:
      "Automate your home or business. Save time and energy instantly.",
    href: "/solutions/SmartHome",
    includedFeatures: [
      {feat:"Access from anywhere"},
      {feat:"Smart lighting"},
      {feat:"Intelligent thermostat & window treatment control"},
      {feat:"Smart Audio & Video"},
    ],
    icon: DeviceMobileIcon,
  },
];

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
  }
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

const config = {
  solutions: solutions,
  solutionsTabs: {
    wifi: solutionsTabs,
    networking: solutionsTabs,
    surveillance: solutionsTabs,
    smartHome: solutionsTabs,
  },
};

export default config;
export { solutions, allSolutions, faqs, people };