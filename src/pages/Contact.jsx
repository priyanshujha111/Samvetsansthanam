import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: "📍",
    label: "Address",
    value: "Darbhanga, Bihar, India",
    sub: "Visit our office",
    color: "bg-yellow-50",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 8757113845",
    sub: "Mon - Sat, 9am - 6pm",
    color: "bg-blue-50",
    href: "tel:+918757113845",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@samvet.org",
    sub: "We reply within 24 hours",
    color: "bg-green-50",
    href: "mailto:info@samvet.org",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 8757113845",
    sub: "Chat with us directly",
    color: "bg-pink-50",
    href: "https://wa.me/918757113845",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await emailjs.send(
        "service_xxxxxxx",   // 👉 replace
        "template_xxxxxxx",  // 👉 replace
        formData,
        "xxxxxxxxxxxxxxx"    // 👉 replace
      )

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    }
  }

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="bg-[#0B1F3A] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {contactInfo.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className={`text-2xl mb-2 ${item.color}`}>{item.icon}</div>
              <p className="text-xs text-gray-400">{item.label}</p>

              {item.href ? (
                <a href={item.href} className="font-bold text-sm text-[#0B1F3A]">
                  {item.value}
                </a>
              ) : (
                <p className="font-bold text-sm">{item.value}</p>
              )}

              <p className="text-xs text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border p-3 rounded"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="border p-3 rounded"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="border p-3 rounded"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="border p-3 rounded"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0B1F3A] text-white py-3 rounded disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500">✅ Message sent successfully!</p>
            )}

            {status === "error" && (
              <p className="text-red-500">❌ Failed to send message. Try again.</p>
            )}

          </form>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-md border min-h-[300px]">
            <iframe
              title="Darbhanga Airport Location"
              src="https://www.google.com/maps?q=Darbhanga+Airport&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-400 text-center">
        <div className="flex justify-center gap-4">

          <a
            href="https://wa.me/918757113845"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0B1F3A] text-white px-6 py-3 rounded"
          >
            WhatsApp
          </a>

          <a
            href="tel:+918757113845"
            className="border px-6 py-3 rounded"
          >
            Call
          </a>

        </div>
      </section>

    </div>
  )
}

export default Contact