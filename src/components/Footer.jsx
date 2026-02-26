export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brandDark text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-md">
          <h2 className="font-heading text-3xl">Contact</h2>
          <div className="mt-2 h-px w-16 bg-brandAccent" />

          <div className="mt-6 space-y-2 text-white/70">
            <p>Office: (555) 201-9400</p>
            <p>Fax: (555) 201-9405</p>
            <p>123 Legacy Avenue</p>
            <p>Scottsdale, AZ 85251</p>
            <a
              href="mailto:info@forwardwealth.com"
              className="inline-block text-white hover:text-brandAccent transition-colors"
            >
              info@forwardwealth.com
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white hover:bg-brandAccent hover:text-brandDark hover:border-brandAccent transition-colors"
            >
              in
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white hover:bg-brandAccent hover:text-brandDark hover:border-brandAccent transition-colors"
            >
              X
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white hover:bg-brandAccent hover:text-brandDark hover:border-brandAccent transition-colors"
            >
              f
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/60">
          &copy; {currentYear} Forward Wealth Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
