"use client";

import { useEffect, useState, useRef } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Hero from "@/components/hero";


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
      center: [-74.0060, 40.7128],
      zoom: 10,
      interactive: false,
      attributionControl: false,
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-[IBMPlex]">
      <Navbar />

      <main className="pt-24 sm:pt-32 px-6 sm:px-8">
        <div className="max-w-xl mx-auto flex justify-center">
          <section className="w-full max-w-xl">
            <Hero currentTime={currentTime} mapContainer={mapContainer as React.RefObject<HTMLDivElement>} />
          </section>
        </div>

        <section
          id="experience"
          className="max-w-7xl mx-auto mt-20 sm:mt-20 mb-20 px-2 sm:px-0 scroll-mt-24 sm:scroll-mt-32"
        >
          <Experience />
        </section>

        <section
          id="projects"
          className="max-w-7xl mx-auto mt-20 sm:mt-32 mb-20 scroll-mt-24 sm:scroll-mt-32"
        >
          <Projects />
        </section>
      </main >
    </div >
  );
}
