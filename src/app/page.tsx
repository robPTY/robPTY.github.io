import Navbar from "@/components/navbar";
import Research from "@/components/experience";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-[IBMPlex]">
      <Navbar />

      <main className="pt-24 sm:pt-32 px-6 sm:px-8">
        <div className="mx-auto flex justify-center">
          <section className="w-full max-w-4xl lg:w-3/5">
            <Hero />
          </section>
        </div>

        <section
          id="research"
          className="max-w-7xl mx-auto mt-10 sm:mt-10 mb-20 px-2 sm:px-0 scroll-mt-24 sm:scroll-mt-32"
        >
          <Research />
        </section>

      </main >
    </div >
  );
}
