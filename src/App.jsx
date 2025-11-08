import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/70 dark:bg-black/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 md:px-12 lg:px-16">
          <a href="#" className="text-sm font-semibold tracking-wide">AB</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="mailto:adebudiono.work@gmail.com" className="rounded-md bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default App
