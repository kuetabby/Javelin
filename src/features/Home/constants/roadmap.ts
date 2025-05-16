export const roadmapList = [
  {
    title: "Phase 1",
    description: [
      "Website Development",
      //   "Social Media Development",
      "Initial Marketing",
      "Token Deployment",
    ],
  },
  {
    title: "Phase 2",
    description: [
      "Testnet Live",
      "Bridge Live",
      "CG & CMC Applied",
      "Staking Live",
    ],
  },
  {
    title: "Phase 3",
    description: ["Swap Live", "Wallet Live", "Marketing campaign"],
  },
  {
    title: "Phase 4",
    description: ["Mainnet Live", "CEX Listing", "Marketing campaign"],
  },
];

export interface Feature {
  description: string;
}

export interface Step {
  title: string;
  subtitle: string;
  purpose: string;
  features: Feature[];
  active: boolean;
  released: boolean;
}

export interface Phase {
  steps: Step[];
}

export const roadmapData: Phase = {
  steps: [
    {
      title: "Foundation Launch",
      subtitle: "/",
      purpose: "/",
      features: [
        // {
        //   description:
        //     "Token Launch on -: Define the token utility, tokenomics, and launch strategy to attract investors and establish a strong project foundation.        ",
        // },
        // {
        //   description:
        //     "Market Awareness Campaign: Launch marketing efforts to create awareness and attract early adopters.",
        // },
        // {
        //   description:
        //     "Initial Javeline AI Release: Highlight Javeline’s key features and consider a public demo to showcase capabilities.",
        // },
      ],
      active: true,
      released: true,
    },
    {
      title: "Expansion Phase",
      subtitle: "/",
      purpose: "/",
      features: [
        // {
        //   description:
        //     "Foster a community through forums, social media, and events, encouraging user engagement and feedback.",
        // },
        // {
        //   description: "Built-in debugger and transaction simulation",
        // },
        // {
        //   description: "Collaboration mode (real-time team editing)",
        // },
        // {
        //   description: "Deployment to mainnet with one-click integration",
        // },
      ],
      active: false,
      released: true,
    },
    {
      title: "To Be Announce",
      subtitle: "To Be Announce",
      purpose: "To Be Announce",
      features: [
        // {
        //   description:
        //     "Exciting updates are coming soon! Stay tuned as we prepare to unveil new features and improvements to enhance your investment experience with our platform.",
        // },
      ],
      active: false,
      released: false,
    },
    {
      title: "To Be Announce",
      subtitle: "To Be Announce",
      purpose: "To Be Announce",
      features: [
        // {
        //   description:
        //     "Our team is working diligently to bring you the latest innovations in cryptocurrency security and usability. More details will be announced shortly. Thank you for your patience and continued support.",
        // },
      ],
      active: false,
      released: false,
    },
  ],
};
