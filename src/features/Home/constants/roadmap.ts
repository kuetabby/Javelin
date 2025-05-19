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
      title: "Foundations & Discovery",
      subtitle: "/",
      purpose: "/",
      features: [
        {
          description: "Define technical architecture",
        },
        {
          description: "Identify core use cases",
        },
        {
          description: "Validate market demand",
        },
      ],
      active: true,
      released: true,
    },
    {
      title: "MVP Development",
      subtitle: "/",
      purpose: "/",
      features: [
        {
          description: "Build a functional MVP",
        },
        {
          description: "Enable fine-tuning & evaluation of",
        },
        {
          description: "Collaboration mode (real-time team editing)",
        },
        {
          description: "models with auditable data lineage",
        },
      ],
      active: false,
      released: true,
    },
    {
      title: "Network Effects & Scaling ",
      subtitle: "/",
      purpose: "/",
      features: [
        {
          description: "Expand integrations",
        },
        {
          description: "Add team collaboration and governance at scale",
        },
      ],
      active: false,
      released: true,
    },
    {
      title: "Security, Compliance",
      subtitle: "/",
      purpose: "/",
      features: [
        {
          description: "Expand integrations",
        },
        {
          description: "Add team collaboration and governance at scale",
        },
      ],
      active: false,
      released: true,
    },
  ],
};
