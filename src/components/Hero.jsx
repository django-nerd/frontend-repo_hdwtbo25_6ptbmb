import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-black/70 dark:via-black/60 dark:to-black" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Ade Budiono
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Front End Developer</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I craft performant, accessible interfaces in the React ecosystem — specializing in Next.js, TypeScript, Tailwind, and thoughtful UI engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-medium shadow-sm transition-transform hover:translate-y-[-2px]">
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/Ade-Budiono-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-5 py-3 text-gray-900 dark:text-gray-100 font-medium transition hover:bg-white dark:hover:bg-gray-900"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
