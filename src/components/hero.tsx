import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
                    <Image
                        src="/assets/photos/my_room.JPG"
                        alt="Portrait of Roberto Aguero"
                        fill
                        className="rounded-full object-cover border border-border"
                        priority
                    />
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl text-foreground">Roberto Aguero</h1>
                    <p className="text-muted mt-2">robertoagueron at gmail dot com</p>
                    <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <a
                            href="https://github.com/robpty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            [GitHub]
                        </a>
                        <a
                            href="https://linkedin.com/in/agueror"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            [LinkedIn]
                        </a>
                        <a 
                            href="https://x.com/rcadxwn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            [Twitter]
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6">
                <h2 className="text-lg text-black font-semibold mb-2">About</h2>
                <div className="text-black text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                        I&apos;m a MSc. student at{" "}
                        <a
                            href="https://www.fordham.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            Fordham University
                        </a>{" "}
                        based out of New York City.
                    </p>
                    <p>
                        My research interests revolve around Multimodal AI, 2D and 3D Vision, and Computational Neuroscience. I am currently
                        working with{" "}
                        <a
                            href="https://ieeexplore.ieee.org/author/37894197900"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            Dr. Yiyin Zhou
                        </a>{" "}
                        on optimizing segmentation algorithms for microscopic Drosophila brain images.
                    </p>
                    <p>
                        Previously, I worked as a Software Engineer Intern at{" "}
                        <a
                            href="https://www.samsara.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            Samsara
                        </a>{" "}
                        on the Training platform. I also interned at{" "}
                        <a
                            href="https://www.swytek.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link hover:text-link/80 transition-colors"
                        >
                            Swytek Software
                        </a> as a Software Engineer Intern.
                    </p>
                </div>
            </div>
        </section>
    );
}