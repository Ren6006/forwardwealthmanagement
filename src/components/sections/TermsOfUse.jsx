import { useNavigate } from "react-router-dom";

export default function TermsOfUse() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 inline-flex items-center text-sm text-brandDark hover:text-brandAccent transition-colors"
        >
          <span className="mr-2">&#8592;</span>
          Back
        </button>

        <h1 className="text-3xl md:text-4xl font-heading text-brandDark">
          Terms of Use
        </h1>
        <div className="mt-3 h-[2px] w-20 bg-[#A9C0C8]" />

        <p className="mt-6 text-brandDark/85 leading-relaxed">
          By accessing or using this website, you agree to the following Terms of Use. Please read
          these terms carefully before using this site.
        </p>

        <div className="mt-8 space-y-6 text-brandDark/90 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              1. Informational Purposes Only
            </h2>
            <p className="mt-2">
              The content provided on this website is for informational purposes only and does not
              constitute a solicitation or offer to sell securities or investment advisory
              services. The information is not intended to provide specific financial, legal, tax,
              or investment advice and should not be relied upon as such. For personalized advice,
              please engage in an advisory relationship with this or another financial advisor.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              2. No Guarantee of Results
            </h2>
            <p className="mt-2">
              All investments involve risk, including the potential loss of principal. Past
              performance is not indicative of future results. No guarantees or warranties are
              provided regarding the accuracy, completeness, or suitability of the information on
              this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              3. Licensing and Jurisdiction
            </h2>
            <p className="mt-2">
              Forward Wealth Management is a registered investment adviser representative of XYPN
              Sapphire, an SEC registered investment adviser. Advisory services are only offered to
              clients or prospective clients where Forward Wealth Management and XYPN Sapphire are
              properly registered or exempt from registration. This website is not intended for use
              by individuals or entities in jurisdictions where the representative or firm is not
              registered.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              4. Third-Party Links
            </h2>
            <p className="mt-2">
              This website may contain links to third-party websites. These links are provided for
              convenience only, and we do not endorse, control, or assume responsibility for the
              content, privacy policies, or practices of any third-party website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              All materials on this website, including but not limited to text, graphics, logos, and
              downloadable resources, are the property of Forward Wealth Management, XYPN Sapphire,
              or the individually specified source party and are protected by copyright, trademark,
              and other intellectual property laws. Any unauthorized use or reproduction is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              6. Limitations of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, [IAR NAME], [DBA NAME], and XYPN Sapphire
              disclaim all liability for any damages arising from your use of this website,
              including but not limited to inaccuracies, errors, or omissions in the content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              7. Privacy Policy
            </h2>
            <p className="mt-2">
              We respect your privacy. Please review our Privacy Policy for information on how we
              collect, use, and protect your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              8. Amendments
            </h2>
            <p className="mt-2">
              We reserve the right to update or modify these Terms of Use at any time without prior
              notice. Your continued use of this website constitutes acceptance of any such
              changes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl md:text-2xl font-semibold">
              9. Contact Information
            </h2>
            <p className="mt-2">
              If you have any questions about these Terms of Use, please contact Forward Wealth
              Management or XYPN Sapphire’s compliance officer at{" "}
              <a
                href="mailto:Compliance@XYPNSapphire.com"
                className="text-brandDark underline hover:text-brandAccent"
              >
                Compliance@XYPNSapphire.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

