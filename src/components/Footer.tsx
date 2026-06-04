import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-padding bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flat no shadows">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto transition-all duration-500 ease-in-out">
        <div className="font-accent-script text-[40px] text-primary dark:text-on-primary-fixed mb-4 md:mb-0">
          Debayan Manna
        </div>
        <div className="font-meta-sm text-meta-sm tracking-widest uppercase text-on-secondary-container dark:text-on-secondary-fixed-variant flex flex-wrap justify-center gap-6">
          <Link
            className="hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 underline-offset-4"
            href="#"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 underline-offset-4"
            href="#"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 underline-offset-4"
            href="#"
          >
            Medium
          </Link>
          <Link
            className="hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 underline-offset-4"
            href="#"
          >
            Email
          </Link>
        </div>
        <div className="font-meta-sm text-meta-sm tracking-widest uppercase text-secondary mt-4 md:mt-0 text-center md:text-right">
          © {new Date().getFullYear()} DEBAYAN MANNA. ARCHITECTING INTELLIGENCE.
        </div>
      </div>
    </footer>
  );
}
