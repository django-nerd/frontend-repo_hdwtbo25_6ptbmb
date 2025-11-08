import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 dark:text-gray-300 text-center md:text-left">
            <div className="font-medium text-gray-900 dark:text-gray-100">Let’s build something great.</div>
            <a href="mailto:adebudiono.work@gmail.com" className="hover:underline">adebudiono.work@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:adebudiono.work@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Ade Budiono — Front End Developer</div>
      </div>
    </footer>
  );
}
