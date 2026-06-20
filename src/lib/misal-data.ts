export type MisalStat = {
  title: string;
  icon: string;
  iconAlt: string;
};

export type MisalLink = {
  title: string;
  description?: string;
  bullets?: string[];
  href: string;
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
};

export const misalTrySection = {
  title: "Try our Misal",
  bullets: [
    "Build culturally relevant and engaging Marathi experiences for millions of speakers.",
    "Sign up to access hosted Marathi LLM for free.",
  ],
} as const;

export const misalStats: MisalStat[] = [
  {
    title: "Pretrained on corpus of 2 Billion+ Marathi Tokens",
    icon: "/images/misal/4ls87KGXhpY4s8B7ev3btRGTcz0.png",
    iconAlt: "Token scale illustration",
  },
  {
    title: "Instruction tuned model on 200K Marathi Instructions",
    icon: "/images/misal/QvHe4KQKeF4SdlMfkZm4ZCghTk.png",
    iconAlt: "Instruction tuning illustration",
  },
  {
    title: "Variants of both 7B & 1B models for Marathi",
    icon: "/images/shared/f0HEEzRQxCUtKyThUP60hvJiShI.png",
    iconAlt: "Model variants illustration",
  },
  {
    title: "Specializes in Reading Comprehension, Paraphrasing and sentiment analysis",
    icon: "/images/misal/HDaIzUPiig3yMOVm70RaPTHo0.svg",
    iconAlt: "Task specialization icon",
  },
];

export const misalLinks: MisalLink[] = [
  {
    title: "Blog",
    description:
      "Discover our inspiration, insights and procedure for building Misal a Marathi LLM in our blogpost here.",
    href: "/making-misal",
    ctaLabel: "here",
    image: "/images/shared/1neDfMk18fMbYVdHvaMGjVi7nY.jpg",
    imageAlt: "Blog decorative image",
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
    image: "/images/misal/colab-logo.png",
    imageAlt: "Google Colab logo",
  },
  {
    title: "Models",
    description: "Checkout our huggingface space here.",
    href: "https://huggingface.co/smallstepai",
    ctaLabel: "here",
    image: "/images/misal/hf-logo.png",
    imageAlt: "Hugging Face logo",
  },
];
