import Image from "next/image";
import { projects } from "@/data/projects";

// Show the 2 most recent projects
const recentProjects = projects.slice(0, 2);

export default function Projects() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl sm:text-2xl text-foreground mb-2">
                    Recent projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentProjects.map((project) => {
                    const primaryLink = project.links.find((l) => !l.disabled) ?? project.links[0];
                    return (
                        <a
                            key={project.title}
                            href={primaryLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} Screenshot`}
                                        className="object-cover w-full h-full"
                                        fill
                                    />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
            <div className="mt-8">
                <a
                    href="/projects"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl text-foreground hover:text-blue-400 transition-colors group"
                >
                    <span>More projects</span>
                    <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </>
    );
}
