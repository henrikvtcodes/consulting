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


const config = {
  solutions: solutions,
};

export default config;
export { solutions, allSolutions };