import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const impactData = [
  { amount: "₹500", icon: "📚", title: "Education", desc: "Provides books and stationery for 2 underprivileged children" },
  { amount: "₹1000", icon: "🏥", title: "Healthcare", desc: "Covers medicine and checkup for 5 rural families" },
  { amount: "₹2000", icon: "🍱", title: "Food Relief", desc: "Feeds 10 families for a week during disaster relief" },
  { amount: "₹5000", icon: "👩‍💼", title: "Women Empowerment", desc: "Funds skill training for 3 women for self-employment" },
]

const quickAmounts = [500, 1000, 2000, 5000, 10000]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const Donate = () => {
  const navigate = useNavigate()
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState("")
  const [copied, setCopied] = useState("")

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="relative bg-[#0B1F3A] text-white py-24 px-6 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
          Support Our <span className="text-yellow-400">Mission</span>
        </motion.h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Your donation helps us educate children, provide healthcare and support communities.
        </p>
      </section>

      {/* AMOUNT */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Choose Amount</h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6 max-w-xl mx-auto">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => { setSelectedAmount(amount); setCustomAmount("") }}
              className={`py-3 rounded-xl font-bold ${
                selectedAmount === amount && !customAmount
                  ? "bg-[#0B1F3A] text-white"
                  : "bg-white border"
              }`}
            >
              ₹{amount}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Custom Amount"
          value={customAmount}
          onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
          className="border p-3 rounded-xl w-64"
        />

        <p className="text-3xl font-bold mt-6">
          ₹{customAmount || selectedAmount || 0}
        </p>

        <button
          onClick={() => document.getElementById("payment").scrollIntoView({ behavior: "smooth" })}
          className="mt-6 bg-yellow-400 px-6 py-3 rounded-xl font-bold"
        >
          Donate Now →
        </button>
      </section>

      {/* PAYMENT */}
      <section id="payment" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Payment Methods</h2>

        {/* UPI */}
        <div className="mb-10">
          <p className="mb-2">UPI ID:</p>
          <div className="flex justify-center gap-2">
            <span className="font-bold">8340506515@ybl</span>
            <button onClick={() => handleCopy("8340506515@ybl", "upi")}>
              {copied === "upi" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* AFTER PAYMENT FIXED */}
        <p>
          After donating, send screenshot to{" "}
          <a
            href="https://wa.me/918757113845"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            +91 8757113845
          </a>
        </p>
      </section>

      {/* CTA FIXED */}
      <section className="py-20 text-center bg-yellow-400">
        <h2 className="text-3xl font-bold mb-6">Need Help?</h2>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/918757113845"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            💬 WhatsApp Us
          </a>

          <button
            onClick={() => navigate("/contact")}
            className="border px-6 py-3 rounded-xl"
          >
            📞 Contact Us
          </button>

        </div>
      </section>

    </div>
  )
}

export default Donate