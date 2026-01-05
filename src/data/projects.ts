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
}

export const projects: Project[] = [
    {
        image: "/assets/photos/seq2seq.png",
        title: "Neural Machine Translation (English to Spanish)",
        description: "Seq2Seq model for text generation, built from first principles (no autograd)",
        techStack: ["Python", "PyTorch"],
        links: [
            { label: "Repo", icon: "github", href: "https://github.com/robPTY/sammy/tree/main/src/LSTM/seq2seq" },
        ],
    },
    {
        image: "/assets/photos/prompt_home.JPG",
        title: "PromptHome",
        description: "LLM prompt sharing/discovery platform",
        techStack: ["TypeScript", "NextJS", "React", "Supabase"],
        links: [
            { label: "Repo", icon: "github", href: "https://github.com/robPTY/promptjar", disabled: true },
            { label: "Visit", icon: "web", href: "https://prompthome.app" },
        ],
    },
    {
        image: "/assets/photos/tyson.JPG",
        title: "Tyson Foods Capstone Project",
        description: "AI-Powered industrial inspection system",
        techStack: ["Python", "OpenCV", "PyTorch", "MariaDB", "SCADA"],
        links: [
            { label: "Repo", icon: "github", href: "https://github.com/robPTY/JBU_Tyson_Capstone" },
            { label: "More Info", icon: "doc", href: "https://drive.google.com/file/d/1JiCMIwvak_pIPLcLRyhhYjEAk3lck0sf/view" },
        ],
    },
    {
        image: "/assets/photos/7brew.JPG",
        title: "Issue Tracker System",
        description: "Ticketing system web-app for 7Brew Coffee",
        techStack: ["JavaScript", "Vue", "Nuxt3", "Firebase"],
        links: [
            { label: "Repo", icon: "github", href: "https://github.com/AriGaspar/TicketingSys7brew" },
        ],
    },
    {
        image: "/assets/photos/all_lights.png",
        title: "All Of The Lights",
        description: "Hand-gesture LED/House light controls",
        techStack: ["Python", "OpenCV", "Arduino"],
        links: [
            { label: "1st at JBHunt 2023 Hackathon", icon: "trophy", href: "#", disabled: true },
        ],
    },
];

