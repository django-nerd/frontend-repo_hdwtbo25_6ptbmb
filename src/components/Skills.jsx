import { motion } from 'framer-motion'
import { Code, Layout, Palette, Layers, Wrench } from 'lucide-react'

const groups = [
  {
    title: 'Frontend Frameworks',
    icon: Code,
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Vite'],
  },
  {
    title: 'UI Libraries',
    icon: Layout,
    items: ['Tailwind', 'ShadCN UI', 'MUI', 'Chakra UI', 'TanStack Table', 'React Hook Form'],
  },
  {
    title: 'State Management',
    icon: Layers,
    items: ['Zustand', 'Redux'],
  },
  {
    title: 'Tools / Others',
    icon: Wrench,
    items: ['Node.js (basics)', 'Git'],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    items: ['Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl">
            Skills & Tools
          </h2>
          <p className="hidden max-w-md text-sm text-slate-600 dark:text-slate-300 sm:block">
            Modern React-first toolchain with an emphasis on performance, DX, and elegant, scalable UI systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <g.icon className="h-5 w-5 text-cyan-600" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
