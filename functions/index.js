const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { Resend } = require("resend");

const resendApiKey = defineSecret("RESEND_API_KEY");

function formatPhoneForEmail(rawPhone) {
  if (!rawPhone) return "-";

  const digits = String(rawPhone).replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (normalized.length === 10) {
    return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  }

  return String(rawPhone).trim() || "-";
}

exports.sendContactEmail = onRequest(
  { region: "us-central1", secrets: [resendApiKey] },
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    const { firstName, lastName = "", phone = "", email, message } = req.body ?? {};

    if (!firstName || !email || !message) {
      res.status(400).json({ error: "First name, email, and message are required." });
      return;
    }

    const resend = new Resend(resendApiKey.value());
    const safeLastName = lastName ? ` ${lastName}` : "";
    const formattedPhone = formatPhoneForEmail(phone);

    try {
      await resend.emails.send({
        from: "Forward Wealth Contact <hilal@fwdwlth.com>",
        to: ["hilal@fwdwlth.com"],
        replyTo: email,
        subject: `New contact form submission from ${firstName}${safeLastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName || "-"}</p>
          <p><strong>Phone:</strong> ${formattedPhone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        `,
      });

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Resend email error:", error);
      res.status(500).json({ error: "Failed to send message." });
    }
  }
);
