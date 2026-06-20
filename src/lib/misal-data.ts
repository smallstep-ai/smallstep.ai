export type MisalStat = {
  title: string;
};

export type MisalLink = {
  title: string;
  description?: string;
  bullets?: string[];
  href: string;
  ctaLabel?: string;
};

export const misalTrySection = {
  title: "Try our Misal",
  bullets: [
    "Build culturally relevant and engaging Marathi experiences for millions of speakers.",
    "Sign up to access hosted Marathi LLM for free.",
  ],
} as const;

export const misalStats: MisalStat[] = [
  { title: "Pretrained on corpus of 2 Billion+ Marathi Tokens" },
  { title: "Instruction tuned model on 200K Marathi Instructions" },
  { title: "Variants of both 7B & 1B models for Marathi" },
  { title: "Specializes in Reading Comprehension, Paraphrasing and sentiment analysis" },
];

export const misalLinks: MisalLink[] = [
  {
    title: "Blog",
    description:
      "Discover our inspiration, insights and procedure for building Misal a Marathi LLM in our blogpost here.",
    href: "/making-misal",
    ctaLabel: "here",
  },
  {
    title: "Run Colab trials",
    bullets: [
      "Ready to use inference code",
      "Quickly test the model on T4 GPU",
      "Integrate seamlessly into your projects",
    ],
    href: "https://colab.research.google.com/drive/1USRytNCbPBfIgobzgv4knZXawlWf9Pom?usp=sharing",
    ctaLabel: "Demo colab notebook",
  },
  {
    title: "Models",
    description: "Checkout our huggingface space here.",
    href: "https://huggingface.co/smallstepai",
    ctaLabel: "here",
  },
];
