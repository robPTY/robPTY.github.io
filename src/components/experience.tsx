import Image from "next/image";
import { researchEntries } from "@/data/research";

const highlightName = "Roberto Aguero";

function renderAuthors(authors: string) {
    const matchIndex = authors.indexOf(highlightName);
    if (matchIndex === -1) {
        return authors;
    }

    const before = authors.slice(0, matchIndex);
    const after = authors.slice(matchIndex + highlightName.length);

    return (
        <>
            {before}
            <span className="underline">{highlightName}</span>
            {after}
        </>
    );
}

export default function Research() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl sm:text-2xl text-black mb-2 font-semibold">Research</h2>
                <p className="text-black max-w-3xl">
                    Research I'm working on, and some of my past work.
                </p>
            </div>

            <div className="space-y-8">
                {researchEntries.map((entry) => {
                    const primaryLink = entry.links[0];
                    return (
                        <article
                            key={entry.title}
                            className={`flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-2xl border p-4 sm:p-6 ${entry.highlight
                                ? "bg-[#fff6d5] border-[#e2d2a2]"
                                : "bg-surface border-border"
                                }`}
                        >
                            <div className="relative w-full sm:w-72 md:w-80 aspect-video rounded-lg overflow-hidden border border-border bg-white p-2">
                                <Image
                                    src={entry.image}
                                    alt={`${entry.title} thumbnail`}
                                    className="object-contain"
                                    fill
                                />
                            </div>

                            <div className="flex-1 text-black">
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {primaryLink ? (
                                        <a
                                            href={primaryLink.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-link transition-colors"
                                        >
                                            {entry.title}
                                        </a>
                                    ) : (
                                        entry.title
                                    )}
                                </h3>
                                <p className="mt-2">
                                    {renderAuthors(entry.authors)}
                                </p>
                                <p className="mt-1">
                                    {entry.venue}
                                    {entry.presentation && (
                                        <span className="text-red-600"> (Presentation)</span>
                                    )}
                                </p>
                                {entry.summary && (
                                    <p className="text-black mt-2">
                                        {entry.summary}
                                    </p>
                                )}

                                {entry.links.length > 0 && (
                                    <div className="mt-3 flex flex-wrap items-center">
                                        {entry.links.map((link, index) => (
                                            <span key={link.label} className="flex items-center">
                                                {index > 0 && (
                                                    <span className="text-black mx-2">/</span>
                                                )}
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-link hover:text-link/80 transition-colors"
                                                >
                                                    [{link.label}]
                                                </a>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
}
