import Link from "next/link";

export default function navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 sm:py-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl tracking-tight text-foreground">
                        <Link href="/" className="hover:cursor-pointer">
                            roberto aguero
                        </Link>
                    </h2>

                    <div className="flex items-center gap-6 sm:gap-8">
                        <Link
                            href="/#experience"
                            className="text-sm sm:text-base text-gray-400 hover:text-foreground transition-colors"
                        >
                            experience
                        </Link>
                        <Link
                            href="/#projects"
                            className="text-sm sm:text-base text-gray-400 hover:text-foreground transition-colors"
                        >
                            projects
                        </Link>
                        <Link
                            href="https://raguero.bearblog.dev/blog/"
                            className="text-sm sm:text-base text-gray-400 hover:text-foreground transition-colors"
                            target="_blank"
                        >
                            blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}
