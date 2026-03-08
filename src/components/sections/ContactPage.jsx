import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus({ type: "success", message: "Thanks! Your message was sent." });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-brandDark text-center">Contact</h1>
        <div className="mt-4 h-[2px] w-20 mx-auto bg-brandAccent" />

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <label className="block">
              <span className="block text-sm uppercase tracking-wide text-brandDark mb-2">
                First Name *
              </span>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                required
                className="w-full border border-brandDark/20 px-4 py-3 focus:outline-none focus:border-brandAccent"
              />
            </label>

            <label className="block">
              <span className="block text-sm uppercase tracking-wide text-brandDark mb-2">
                Last Name
              </span>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                className="w-full border border-brandDark/20 px-4 py-3 focus:outline-none focus:border-brandAccent"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm uppercase tracking-wide text-brandDark mb-2">
              Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="w-full border border-brandDark/20 px-4 py-3 focus:outline-none focus:border-brandAccent"
            />
          </label>

          <label className="block">
            <span className="block text-sm uppercase tracking-wide text-brandDark mb-2">
              Email *
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full border border-brandDark/20 px-4 py-3 focus:outline-none focus:border-brandAccent"
            />
          </label>

          <label className="block">
            <span className="block text-sm uppercase tracking-wide text-brandDark mb-2">
              Write a Message *
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
              className="w-full border border-brandDark/20 px-4 py-3 focus:outline-none focus:border-brandAccent"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex border border-brandAccent bg-brandAccent px-7 py-3 uppercase tracking-wide text-sm text-brandDark transition-colors hover:bg-transparent hover:text-brandAccent disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p className={status.type === "success" ? "text-green-700" : "text-red-700"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
