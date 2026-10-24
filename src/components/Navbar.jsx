import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-300 transition-colors duration-200"

  const mobileLinkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold text-lg py-3 border-b border-white/10 block"
      : "text-white hover:text-yellow-300 transition-colors duration-200 text-lg py-3 border-b border-white/10 block"

  // ── Donate removed from here — it's the button on right ──
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1F3A] shadow-lg py-3"
            : "bg-[#0B1F3A]/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">

          {/* ── Logo ── */}
          <NavLink to="/" className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              Samvet
            </span>
            <span className="text-[10px] text-yellow-400 tracking-[3px] uppercase font-medium">
              Sansthanam
            </span>
          </NavLink>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkStyle}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ── Donate Button → /donate ✅ ── */}
          <div className="hidden md:block">
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl font-bold text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-yellow-300 text-[#0B1F3A]"
                    : "bg-yellow-400 text-[#0B1F3A] hover:bg-yellow-300"
                }`
              }
            >
              Donate Now
            </NavLink>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0B1F3A] border-t border-white/10 px-6 pt-4 pb-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={mobileLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* ── Mobile Donate Button → /donate ✅ ── */}
            <NavLink
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-yellow-400 text-[#0B1F3A] px-5 py-3 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors duration-200"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      </nav>

      {/* spacer */}
      <div className="h-[64px]" />
    </>
  )
}

export default Navbar