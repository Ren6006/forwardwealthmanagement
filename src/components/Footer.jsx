import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#A9C0C8] text-black pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl border-b-2 border-black/30 pb-1 w-fit">Email</h2>
            <a
              href="mailto:office@fwdwlth.com"
              className="inline-block mt-6 text-black hover:text-brandDark transition-colors text-lg"
            >
              office@fwdwlth.com
            </a>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-10 text-base md:text-lg font-semibold md:justify-center flex-1 md:px-4">
            <NavLink to="/" className="hover:text-brandDark hover:underline hover:underline-offset-4">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-brandDark hover:underline hover:underline-offset-4">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-brandDark hover:underline hover:underline-offset-4">
              Who We Serve
            </NavLink>
            <NavLink to="/contact" className="hover:text-brandDark hover:underline hover:underline-offset-4">
              Contact
            </NavLink>
          </nav>

          <NavLink
            to="/terms-of-use"
            className="ml-auto mt-1 text-sm md:text-base font-semibold text-black/80 hover:text-black underline underline-offset-2"
          >
            Terms of Use
          </NavLink>
        </div>

        <div className="border-t border-black/10 mt-10 pt-6 text-xs text-black/60">
          &copy; {currentYear} Forward Wealth Management. All rights reserved.
        </div>

        <div className="mt-10 text-xs md:text-sm leading-relaxed text-black/80 space-y-4 w-full">
          <p>
            Forward Wealth Management offers advisory services through XYPN Sapphire, an SEC-
            Registered Investment Adviser.
          </p>
          <p>
            The information on this site is educational and is not intended as specific financial,
            tax, accounting, or legal advice, nor is it an offer or solicitation to buy or sell, or
            as an endorsement of any company, security, fund, or other offering. Information
            provided should not be solely relied upon for decision making. Please consult your
            financial, legal, tax, or accounting professional regarding your specific situation.
            Investments involve risk and have the potential for complete loss. It should not be
            assumed that any recommendations made will necessarily be profitable.
          </p>
          <p>
            The information on this site is provided “AS IS” and without warranties either express
            or implied and the information may not be free from error. Your use of the information
            provided is at your sole risk. Under no circumstances shall XYPN Sapphire be liable for
            any direct, indirect, special or consequential damages that result from the use of, or
            the inability to use, the information provided on this site, even if XYPN Sapphire or an
            XYPN Sapphire authorized representative has been advised of the possibility of such
            damages.
          </p>
        </div>
      </div>
    </footer>
  );
}
