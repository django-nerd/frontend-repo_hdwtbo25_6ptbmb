import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Dynamic CRUD Builder for Backoffice",
    desc: "Config-driven admin tooling to generate forms, tables, and workflows on the fly.",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind", "RHF", "TanStack"],
    demo: "#",
    code: "#",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HRIS Job Management System",
    desc: "End-to-end job posting, approvals, candidate flows, and dashboards.",
    tech: ["React", "MUI", "Redux", "Node"],
    demo: "#",
    code: "#",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bounty Settlement System",
    desc: "Workflow engine for validating and settling incentives across teams.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "#",
    code: "#",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Live Account Summary Module",
    desc: "Real-time portfolio and balances overview with streaming updates.",
    tech: ["React", "Zustand", "WebSocket"],
    demo: "#",
    code: "#",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Next.js AI Chat Dashboard",
    desc: "Multi-panel AI chat interface with prompt tools and histories.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "#",
    code: "#",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
];

function Card({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur hover:shadow-sm"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-xs rounded-md border border-gray-200 dark:border-gray-800 px-2 py-1 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-cyan-700 dark:text-cyan-400 hover:underline">
            <ExternalLink size={16} /> View Demo
          </a>
          <a href={p.code} className="inline-flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:underline">
            <Code size={16} /> View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <a href="#contact" className="text-sm text-cyan-700 dark:text-cyan-400 hover:underline">Open to collaborations</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
