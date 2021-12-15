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
      "Wide range of options",
      "Own your equipment",
      "Optimized for cost-effectiveness and value",
      "Next generation WiFi 6 solutions available",
    ],
    icon: WifiIcon,
  },
  {
    name: "Networking",
    description: "Connect your property.",
    href: "/solutions/Networking",
    includedFeatures: [
      "High speed",
      "Wired and wireless networking",
      "Connect multiple buildings together",
      "Remote monitoring available",
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "Security & Surveillance",
    description:
      "Keep an eye on what's yours. Privacy first video surveillance.",
    href: "/solutions/Surveillance",
    includedFeatures: [
      "Highly scalable",
      "Footage stored locally or in a private cloud",
      "Privacy first - we don't rely on Amazon or Google",
      "Catch bad actors in high resolution",
    ],
    icon: VideoCameraIcon,
  },
  {
    name: "Smart Home",
    description:
      "Automate your home or business. Save time and energy instantly.",
    href: "/solutions/SmartHome",
    includedFeatures: [
      "Access from anywhere",
      "Smart lighting",
      "Intelligent thermostat & window treatment control",
      "Smart Audio & Video",
    ],
    icon: DeviceMobileIcon,
  },
];

const config = {
  solutions: solutions,
};

export default config;
export { solutions };
