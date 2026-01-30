export type IconType = "github" | "web" | "trophy" | "doc";

export interface ProjectLink {
  label: string;
  icon: IconType;
  href: string;
  disabled?: boolean;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    image: "/assets/photos/Transformer.png",
    title: "TinyLM (Transformer From Scratch)",
    description:
      "52M parameter Transformer model trained on 142k+ sentence pairs for English-Spanish translation.",
    techStack: ["Python", "PyTorch"],
    featured: false,
    links: [
      {
        label: "Repo",
        icon: "github",
        href: "https://github.com/robPTY/TinyLM",
      },
    ],
  },
  {
    image: "/assets/photos/Exsamine.png",
    title: "ExSAMine (Hoya Hacks 2026)",
    description:
      "Web app using Meta's SAM3 for image/video segmentation of cctv footage.",
    techStack: ["Python", "PyTorch"],
    links: [
      {
        label: "Repo",
        icon: "github",
        href: "https://github.com/robPTY/TinyLM",
      },
      {
        label: "Devpost",
        icon: "web",
        href: "https://devpost.com/software/exsamine",
      },{
        label: "2nd in Forensics",
        icon: "trophy",
        href: "#",
        disabled: true,
      }
    ],
  },
  {
    image: "/assets/photos/seq2seq.png",
    title: "Neural Machine Translation (English to Spanish)",
    description:
      "Seq2Seq model for translation, built from first principles (no autograd)",
    techStack: ["Python", "PyTorch"],
    links: [
      {
        label: "Repo",
        icon: "github",
        href: "https://github.com/robPTY/pureNMT/tree/main/src/LSTM/seq2seq",
      },
    ],
  },
  {
    image: "/assets/photos/prompt_home.JPG",
    title: "PromptHome",
    description: "LLM prompt sharing/discovery platform",
    techStack: ["TypeScript", "NextJS", "React", "Supabase"],
    links: [
      {
        label: "Repo",
        icon: "github",
        href: "https://github.com/robPTY/promptjar",
        disabled: true,
      },
      { label: "Visit", icon: "web", href: "https://prompthome.app" },
    ],
  },
  {
    image: "/assets/photos/7brew.JPG",
    title: "Issue Tracker System",
    description: "Ticketing system web-app for 7Brew Coffee",
    techStack: ["JavaScript", "Vue", "Nuxt3", "Firebase"],
    links: [
      {
        label: "Repo",
        icon: "github",
        href: "https://github.com/AriGaspar/TicketingSys7brew",
      },
    ],
  },
  {
    image: "/assets/photos/all_lights.png",
    title: "All Of The Lights",
    description: "Hand-gesture LED/House light controls",
    techStack: ["Python", "OpenCV", "Arduino"],
    links: [
      {
        label: "1st at JBHunt 2023 Hackathon",
        icon: "trophy",
        href: "#",
        disabled: true,
      },
    ],
  },
];
