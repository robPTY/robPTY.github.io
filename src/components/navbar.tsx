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
                            href="https://raguero.bearblog.dev/"
                            className="text-sm sm:text-base text-gray-400 hover:text-foreground transition-colors"
                        >
                            blog
                        </Link>
                        {/* <button>
                            Resume
                        </button> */}
                        {/* <button
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button> */}
                    </div>
                </div>
            </div>
        </nav >
    );
}
