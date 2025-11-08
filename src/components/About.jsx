import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">About Me</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m Ade Budiono, a senior Front End Developer focused on the React ecosystem. Over the years, I’ve helped product teams ship fast, accessible, and maintainable interfaces — prioritizing clean architecture, DX, performance, and UI/UX.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat label="Years Experience" value="7+" />
              <Stat label="Projects Delivered" value="30+" />
              <Stat label="Focus Areas" value="UI Engineering" />
            </div>
            <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Next.js, React, TypeScript, Tailwind</li>
              <li>• ShadCN UI, MUI, Chakra, RHF, TanStack</li>
              <li>• Zustand, Redux, performance tuning</li>
              <li>• Figma to production-quality UI</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="mx-auto aspect-square w-56 sm:w-64 md:w-72 rounded-3xl overflow-hidden ring-1 ring-gray-200/60 dark:ring-gray-800/60 shadow-lg bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Ade Budiono portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-4">
      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}
