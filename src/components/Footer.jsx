import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ]

  const legalDetails = [
    { label: "GST", value: "XXXXXXX" },
    { label: "PAN", value: "XXXXXXX" },
    { label: "12A", value: "XXXXXXX" },
    { label: "80G", value: "XXXXXXX" },
  ]

  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/91XXXXXXXXXX" },
  ]

  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Top CTA */}
      <div className="bg-yellow-400 px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#0B1F3A] font-bold text-lg text-center md:text-left">
            Want to make a difference? Support our mission today.
          </p>

          <Link
            to="/contact"
            className="bg-[#0B1F3A] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-black transition"
          >
            Donate Now →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">SAMVET</h2>
            <p className="text-sm text-gray-400 mb-6 leading-6">
              A public charitable trust working in education, healthcare,
              disaster relief, and social welfare for underserved communities.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-black hover:scale-110 transition duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-bold mb-4">Legal Info</h3>
            <div className="flex flex-col gap-2">
              {legalDetails.map((item) => (
                <p key={item.label} className="text-sm text-gray-400">
                  <span className="text-yellow-400 font-semibold">
                    {item.label}:
                  </span>{" "}
                  {item.value}
                </p>
              ))}
            </div>

            <div className="mt-4 text-xs text-green-400">
              ✓ Donations eligible for tax exemption (80G)
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>

            <p className="text-sm text-gray-400 mb-2">
              📍 Darbhanga, Bihar
            </p>

            <a
              href="tel:+91XXXXXXXXXX"
              className="block text-sm text-gray-400 hover:text-yellow-400 transition"
            >
              📞 +91 XXXXX XXXXX
            </a>

            <a
              href="mailto:info@samvet.org"
              className="block text-sm text-gray-400 hover:text-yellow-400 transition mt-1"
            >
              ✉️ info@samvet.org
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2026 SAMVET SANSTHANAM. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer