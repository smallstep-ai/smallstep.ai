export type MisalStat = {
  title: string;
  description: string;
};

export type MisalLink = {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export const misalIntro = {
  title: "Try our Misal",
  bullets: [
    "Build culturally relevant and engaging Marathi experiences for millions of speakers.",
    "Sign up to access hosted Marathi LLM for free.",
  ],
} as const;

export const misalStats: MisalStat[] = [
  {
    title: "Pretrained on corpus of 2 Billion+ Marathi Tokens",
    description: "Foundation model built for high-quality Marathi understanding.",
  },
  {
    title: "Instruction tuned model on 200K Marathi Instructions",
    description: "Finetuned for helpfulness, coherence, and task-following in Marathi.",
  },
  {
    title: "Variants of both 7B & 1B models for Marathi",
    description: "Choose capability or efficiency based on your product needs.",
  },
  {
    title: "Specializes in Reading Comprehension, Paraphrasing and sentiment analysis",
    description: "Optimized for practical Marathi language tasks and evaluation settings.",
  },
];

export const misalLinks: MisalLink[] = [
  {
    title: "Blog",
    description: "Discover our inspiration, insights and procedure for building Misal a Marathi LLM in our blogpost here.",
    href: "/making-misal",
    ctaLabel: "here",
  },
  {
    title: "Run Colab trials",
    description: "Ready to use inference code. Quickly test the model on T4 GPU. Integrate seamlessly into your projects.",
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
