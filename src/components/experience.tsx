export default function Experience() {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl sm:text-2xl text-foreground mb-2">Experience</h2>
            </div>

            <div className="relative">
                <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-[2px] bg-white/5" />
                <div className="space-y-8">
                    <article className="flex sm:items-start gap-4 sm:gap-6">
                        <div className="flex-1">
                            <div className="bg-background/60 backdrop-blur-sm border border-white/6 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <span className="text-lg sm:text-xl font-medium text-gray-300">
                                            Fordham University, Graduate Research Assistant
                                        </span>
                                        <time className="block text-sm text-gray-400 mt-2">August 2025 — Present</time>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <div className="text-sm text-gray-300">New York, NY</div>
                                        <span className="inline-flex items-center text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded-full border border-emerald-600/30">
                                            Research
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-3 text-base text-gray-300 leading-relaxed">
                                    Under Dr. Yiyin Zhou at the fruit fly brain laboratory, optimizing machine learning algorithms to analyze neural imaging data and identify patterns in neuronal activity.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">Python</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">Pandas</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">Jupyter Notebooks</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="flex sm:items-start gap-4 sm:gap-6">
                        <div className="flex-1">
                            <div className="bg-background/60 backdrop-blur-sm border border-white/6 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <span className="text-lg sm:text-xl font-medium text-gray-300">
                                            <a href="https://www.samsara.com" target="_blank">Samsara</a>, Software Engineer Intern
                                        </span>
                                        <time className="block text-sm text-gray-400 mt-2">May 2024 — August 2024</time>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <div className="text-sm text-gray-300">San Francisco, CA</div>
                                        <span className="inline-flex items-center text-xs bg-violet-600/10 text-violet-300 px-2 py-1 rounded-full border border-white/6">
                                            Internship
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-3 text-base text-gray-300 leading-relaxed">Driver portal product for the Training team, "Focus on Customer Success" 2024 award winner</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">React</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">TypeScript</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">GoLang</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">GraphQL</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="flex sm:items-start gap-4 sm:gap-6">
                        <div className="flex-1">
                            <div className="bg-background/60 backdrop-blur-sm border border-white/6 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <span className="text-lg sm:text-xl font-medium text-gray-300">
                                            <a href="https://www.swytek.com" target="_blank">Swytek Software</a>, Software Engineer Intern
                                        </span>
                                        <time className="block text-sm text-gray-400 mt-2">May 2023 — August 2023</time>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <div className="text-sm text-gray-300">Remote</div>
                                        <span className="inline-flex items-center text-xs bg-violet-600/10 text-violet-300 px-2 py-1 rounded-full border border-white/6">
                                            Internship
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-3 text-base text-gray-300 leading-relaxed">Worked on a CRM for an events company optimizing data pipeliness</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">C#</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">.NET</span>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/3 border border-white/6">SQL</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
