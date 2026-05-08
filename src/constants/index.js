import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "contact Us",
    url: "#contact",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Asset Forensic Recovery",
  "Threat Mitigation",
  "Discreet Intelligence Gathering",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Advanced Blockchain Tracing",
    text: "Implement deep-layer ledger analysis to track anonymized crypto transactions across multiple chains for faster fund recovery.",
    date: "January 2026",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Zero-Day Exploit Research",
    text: "Ongoing development of proprietary penetration tools to bypass modern security protocols for authorized account reclamation.",
    date: "March 2026",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Automated Evidence Vault",
    text: "Launch a secure, encrypted dashboard for clients to access and download gathered digital evidence in real-time.",
    date: "April 2026",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Dark Web Intelligence Nodes",
    text: "Integrating global monitoring nodes to detect and alert clients of leaked personal data or blackmail attempts before they escalate.",
    date: "May 2026",
    status: "progress",
    imageUrl: roadmap4,
  },
];
export const collabText =
  "Leveraging advanced forensic automation and ironclad encryption, we provide the ultimate framework for rapid asset recovery and discreet digital intelligence.";

export const collabContent = [
  {
    id: "0",
    title: "Strategic Threat Integration",
    text: "Seamlessly aligning our specialized recovery tools with your specific case requirements for rapid execution.",
  },
  {
    id: "1",
    title: "Automated Evidence Tracing",
  },
  {
    id: "2",
    title: "Fortified Operational Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Initial Consultation",
    description: "Security assessment, case evaluation, vulnerability scanning",
    price: "",
    features: [
      "Comprehensive digital footprint and vulnerability assessment",
      "Initial case analysis and feasibility study for recovery",
      "Ability to explore our white-hat services without upfront cost",
    ],
  },
  {
    id: "1",
    title: "Priority Recovery",
    description: "Active threat mitigation, asset tracking, priority support",
    price: "",
    features: [
      "Advanced blockchain forensics and digital asset tracking",
      "Real-time monitoring and active mitigation of blackmail threats",
      "Priority status for rapid evidence gathering and reporting",
    ],
  },
  {
    id: "2",
    title: "Full-Scale Operation",
    description: "Custom digital intel, forensic suites, dedicated operative",
    price: null,
    features: [
      "Bespoke ethical hacking operations tailored to complex cases",
      "Advanced decryption and wallet recovery for high-value assets",
      "Dedicated case manager and direct remote access oversight",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ethical Hacking & Monitoring",
    text: "Utilize discreet digital oversight and professional penetration testing to secure your interests or gather critical information.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Blackmail Mitigation",
    text: "Take back control of your digital identity by permanently deleting social accounts used for harassment or extortion.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Investment Asset Recovery",
    text: "Trace and reclaim lost capital or stolen crypto funds through advanced blockchain forensics and recovery protocols.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Crypto Wallet Recovery",
    text: "Regain access to locked or compromised cryptocurrency wallets using specialized technical decryption and seed phrase recovery.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Discreet Evidence Gathering",
    text: "Obtain undeniable proof across social platforms and remote devices to confirm suspicions regarding partner infidelity.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "General White Hat Expertise",
    text: "Access a wide spectrum of elite cybersecurity solutions provided by verified ethical hacking specialists.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
