"use client";

import { useEffect, useState, useRef } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";


export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
      });
      setCurrentTime(timeString + " EDT");
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/positron',
      center: [-74.0060, 40.7128], // Lincoln Center, NYC
      zoom: 10,
      interactive: false, // Disable user interaction
      attributionControl: false, // Hide attribution popup
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-[IBMPlex]">
      <Navbar />

      <main className="pt-24 sm:pt-32 px-6 sm:px-8">
        <div className="max-w-xl mx-auto flex justify-center">
          <section className="w-full max-w-xl">
            <div className="relative rounded-xl overflow-hidden h-[380px] sm:h-[350px]">
              <div ref={mapContainer} className="absolute inset-0 w-full h-full"></div>

              <div className="absolute gradient-overlay" />

              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute -inset-2 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <div className="bg-background backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs sm:text-sm border border-white/10">
                  {currentTime || "Loading..."}
                </div>
              </div>

              <div className="absolute bottom-[130px] sm:bottom-[160px] left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 bg-background p-5 sm:p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl sm:text-2xl text-white flex items-center gap-2">
                      Hi! I&apos;m Roberto
                      <img
                        src="/assets/pika-wave.gif"
                        alt="Waving Pikachu"
                        className="inline-block w-6 h-6 sm:w-10 sm:h-10 pb-2"
                      />
                    </h1>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/robpty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg
                          className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/agueror"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-gray-300 text-sm">
                      Actively looking for Summer 2026 Internships
                    </span>
                  </div>
                  <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
                    I'm a graduate student at Fordham based out of New York, NY. Looking to get into AI/ML. Have a background in full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="experience" className="max-w-7xl mx-auto mt-20 sm:mt-20 mb-20 px-2 sm:px-0">
          <Experience />
        </section>

        <section id="projects" className="max-w-7xl mx-auto mt-20 sm:mt-32 mb-20">
          <Projects />
        </section>
      </main >
    </div >
  );
}
