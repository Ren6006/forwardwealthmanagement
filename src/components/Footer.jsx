export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#A9C0C8] text-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-md">
          <h2 className="font-heading text-3xl border-b-2 border-black/30 pb-1 w-fit">Contact</h2>
          <a
            href="mailto:office@fwdwlth.com"
            className="inline-block mt-6 text-black hover:text-brandDark transition-colors text-lg"
          >
            office@fwdwlth.com
          </a>
        </div>

        <div className="border-t border-black/10 mt-10 pt-6 text-xs text-black/60">
          &copy; {currentYear} Forward Wealth Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
