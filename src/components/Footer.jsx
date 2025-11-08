export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <a
          href="mailto:adebudiono.work@gmail.com"
          className="text-sm text-zinc-300 hover:text-white"
        >
          adebudiono.work@gmail.com
        </a>
        <div className="mt-3 text-xs text-zinc-500">
          © {new Date().getFullYear()} Ade Budiono
        </div>
      </div>
    </footer>
  );
}
