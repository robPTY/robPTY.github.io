import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ProjectsPage() {
    const GitHubIcon = () => (
        <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
            />
        </svg>
    );

    const projects = [
        {
            image: "/assets/photos/prompt_home.JPG",
            title: "PromptHome",
            description: "LLM prompt sharing/discovery platform",
            techStack: ["TypeScript", "NextJS", "React", "Supabase"],
            links: [
                { label: "Repo", icon: <GitHubIcon />, href: "https://github.com/robPTY/promptjar", disabled: true },
                { label: "Visit", icon: <span>🌐</span>, href: "https://prompthome.app", disabled: false }]
        },
        {
            image: "/assets/photos/tyson.JPG",
            title: "Tyson Foods Capstone Project",
            description: "AI-Powered industrial inspection system",
            techStack: ["Python", "OpenCV", "PyTorch", "MariaDB", "SCADA"],
            links: [
                { label: "Repo", icon: <GitHubIcon />, href: "https://github.com/robPTY/JBU_Tyson_Capstone", disabled: false },
                { label: "More Info", icon: <span>📄</span>, href: "https://drive.google.com/file/d/1JiCMIwvak_pIPLcLRyhhYjEAk3lck0sf/view", disabled: false },
            ]
        },
        {
            image: "/assets/photos/7brew.JPG",
            title: "Issue Tracker System",
            description: "Ticketing system web-app for 7Brew Coffee",
            techStack: ["JavaScript", "Vue", "Nuxt3", "Firebase"],
            links: [
                { label: "Repo", icon: <GitHubIcon />, href: "https://github.com/AriGaspar/TicketingSys7brew", disabled: false }
            ]
        },
        {
            image: "/assets/photos/all_lights.png",
            title: "All Of The Lights",
            description: "Hand-gesture LED/House light controls",
            techStack: ["Python", "OpenCV", "Arduino"],
            links: [
                { label: "1st at JBHunt 2023 Hackathon", icon: <span>🏆</span>, href: "https://drive.google.com/file/d/1JiCMIwvak_pIPLcLRyhhYjEAk3lck0sf/view", disabled: true }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 sm:pt-32 px-6 sm:px-8 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Projects
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            A collection of some of my most recent work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform flex flex-col"
                            >
                                <div className="relative w-full h-48 sm:h-56 bg-white/5 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} Screenshot`}
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {project.links.map((link, linkIndex) => (
                                            link.disabled ? (
                                                <span
                                                    key={linkIndex}
                                                    className="px-4 py-2 bg-white/5 text-gray-500 text-sm rounded-lg border border-white/10 flex items-center gap-2 cursor-not-allowed"
                                                >
                                                    {link.icon && link.icon}
                                                    {link.label}
                                                </span>
                                            ) : (
                                                <a
                                                    key={linkIndex}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/10 hover:border-white/20 flex items-center gap-2"
                                                >
                                                    {link.icon && link.icon}
                                                    {link.label}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
        </div >
    );
}