import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 md:px-12 lg:px-16">
          <a href="#" className="text-sm font-semibold tracking-wide">AB</a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="mailto:adebudiono.work@gmail.com" className="rounded-md bg-white px-3 py-1.5 font-medium text-black hover:bg-zinc-200">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export default App
