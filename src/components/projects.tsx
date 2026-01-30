import Image from "next/image";
import { projects } from "@/data/projects";

// Show the 2 most recent projects
const recentProjects = projects.slice(0, 2);

export default function Projects() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl sm:text-2xl text-foreground mb-2 font-semibold">
                    Projects
                </h2>

            </div>
            <div className="space-y-8">
                {recentProjects.map((project) => {
                    const primaryLink = project.links.find((link) => !link.disabled);
                    return (
                        <article
                            key={project.title}
                            className={`flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-2xl border p-4 sm:p-6 ${project.featured
                                ? "bg-[#fff6d5] border-[#e2d2a2]"
                                : "bg-surface border-border"
                                }`}
                        >
                            <div className="relative w-full sm:w-72 md:w-80 aspect-video rounded-lg overflow-hidden border border-border bg-white">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="object-contain"
                                    fill
                                />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg sm:text-xl text-foreground font-semibold">
                                    {primaryLink ? (
                                        <a
                                            href={primaryLink.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-link transition-colors"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                <p className="text-muted mt-2">
                                    {project.description}
                                </p>
                                <p className="text-foreground mt-3 text-sm">
                                    <span className="text-muted">Tech:</span> {project.techStack.join(", ")}
                                </p>

                                {project.links.length > 0 && (
                                    <div className="mt-3 flex flex-wrap items-center">
                                        {project.links.map((link, index) => (
                                            <span key={link.label} className="flex items-center">
                                                {index > 0 && (
                                                    <span className="text-muted mx-2">/</span>
                                                )}
                                                {link.disabled ? (
                                                    <span className="text-muted">[{link.label}]</span>
                                                ) : (
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-link hover:text-link/80 transition-colors"
                                                    >
                                                        [{link.label}]
                                                    </a>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
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
