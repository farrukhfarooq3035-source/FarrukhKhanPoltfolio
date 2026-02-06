import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900 py-16">
      <div className="container-base grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Farrukh Khan</h3>
          <p className="mt-4 text-sm text-white/70">
            Data Scientist, Analyst, and Full-Stack Developer delivering premium data-driven
            experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="#projects" className="hover:text-white">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">Skills</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white">Experience</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact Info
          </h4>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>farrukh.khan@example.com</p>
            <p>+92 XXX XXXXXXX</p>
            <p>Lahore, Punjab, Pakistan</p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2 text-white/70 hover:border-primary-500 hover:text-white"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2 text-white/70 hover:border-primary-500 hover:text-white"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:farrukh.khan@example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full border border-white/10 p-2 text-white/70 hover:border-primary-500 hover:text-white"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-base mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
        <span>© 2026 Farrukh Khan. All rights reserved.</span>
        <span>Built with ❤️ using Next.js, TypeScript & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
