export interface ResearchLink {
  label: string;
  href: string;
}

export interface ResearchEntry {
  image: string;
  title: string;
  authors: string;
  venue: string;
  summary?: string;
  highlight?: boolean;
  presentation?: boolean;
  links: ResearchLink[];
}

export const researchEntries: ResearchEntry[] = [
  {
    image: "/assets/photos/segmentation_ex.png",
    title: "Drosophila Multi-Neuron Connectome Assembly",
    authors: "Roberto Aguero, Dr. Yiyin Zhou",
    venue: "In Progress",
    summary:
      "We are developing an algorithm that can segment neurons in 2D & 3D Drosophila Light Microscopy images, using the multiple soma's in the brain as the starting point. The goal is to assemble a neuronal connectome.",
    links: [],
  },
  {
    image: "/assets/photos/nugget_sample.png",
    title: "Computer Vision-Powered Poultry Inspection System",
    authors: "Roberto Aguero, Noah Olson, Dr. Justus Selwyn",
    venue: "Arkansas STEM Posters at the Capitol 2025",
    summary:
      "We built a computer vision-based system that counted, weighed, and validated the chicken nugget batches using a fine-tuned YoloV10 model. It included a Ignition SCADA dashboard as well as a MariaDB backend.",
    highlight: false,
    presentation: true,
    links: [
      {
        label: "Abstract",
        href: "https://drive.google.com/file/d/1JiCMIwvak_pIPLcLRyhhYjEAk3lck0sf/view",
      },
      {
        label: "Poster",
        href: "https://drive.google.com/file/d/1ZFSO210V7kmnYoIssmvPuB1F9Im37BCS/view?usp=sharing",
      },
      { label: "Code", href: "https://github.com/robPTY/JBU_Tyson_Capstone" },
    ],
  },
];
