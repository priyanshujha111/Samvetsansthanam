import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const services = [
  {
    icon: "📚",
    title: "Education Support",
    slug: "education",
    desc: "Providing scholarships, free classes, study materials, and educational support to underprivileged children to build a brighter future.",
    features: ["Free Scholarships", "Study Materials", "Coaching Classes", "Career Guidance"],
    color: "bg-yellow-50",
  },
  {
    icon: "🏥",
    title: "Healthcare Services",
    slug: "healthcare",
    desc: "Organizing free medical camps, health awareness drives, and medicine distribution for rural and underserved communities.",
    features: ["Free Medical Camps", "Medicine Distribution", "Health Awareness", "Child Welfare"],
    color: "bg-blue-50",
  },
  {
    icon: "🌊",
    title: "Disaster Relief",
    slug: "disaster",
    desc: "Supporting families during floods, droughts, and emergencies by providing food, shelter, and essential supplies.",
    features: ["Emergency Food", "Shelter Support", "Medicine Relief", "Family Rehabilitation"],
    color: "bg-red-50",
  },
  {
    icon: "👩‍💼",
    title: "Women Empowerment",
    slug: "women",
    desc: "Helping women through skill development programs, awareness campaigns, and self-employment opportunities.",
    features: ["Skill Training", "Self Employment", "Awareness Drives", "Legal Support"],
    color: "bg-pink-50",
  },
  {
    icon: "🌾",
    title: "Agriculture Support",
    slug: "agriculture",
    desc: "Assisting farmers with training, modern techniques, seeds, and tools to improve productivity and livelihood.",
    features: ["Modern Training", "Free Seeds & Tools", "Govt Scheme Help", "Kisan Sammelan"],
    color: "bg-green-50",
  },
  {
    icon: "🎭",
    title: "Cultural Development",
    slug: "culture",
    desc: "Promoting cultural activities, youth engagement, and social awareness through events and community programs.",
    features: ["Cultural Events", "Youth Programs", "Social Awareness", "Community Meets"],
    color: "bg-purple-50",
  },
]

const stats = [
  { num: "6+", label: "Core Services" },
  { num: "10K+", label: "Lives Touched" },
  { num: "15+", label: "Villages Reached" },
  { num: "50+", label: "Volunteers" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const Services = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans">

      {/* ───── HERO ───── */}
      <section className="relative bg-[#0B1F3A] text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
        >
          Samvet Sansthanam
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Our <span className="text-yellow-400">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-8"
        >
          We deliver impactful services across education, healthcare, relief
          work, and empowerment — creating lasting change in communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center flex-wrap gap-10 mt-12 pt-8 border-t border-white/10"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{s.num}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ───── SERVICES GRID ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          What We Offer
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Services That Create Change
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

              {/* number */}
              <span className="text-xs font-bold tracking-widest text-gray-300 mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* icon */}
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-7 mb-5 flex-1">
                {item.desc}
              </p>

              {/* feature tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.features.map((f, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-1 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group/btn w-fit text-sm"
              >
                Get This Service
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section className="relative py-20 px-6 md:px-10 bg-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Why Us
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Why Choose <span className="text-yellow-400">Samvet Sansthanam</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "🤝", title: "Community Driven", desc: "All our services are designed by listening to the real needs of communities we serve." },
            { icon: "✅", title: "Transparent & Trusted", desc: "Registered trust with 12A & 80G certification. Every rupee is accounted for." },
            { icon: "📍", title: "On Ground Impact", desc: "We work directly at the grassroots level — no middlemen, real impact." },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-200 text-center"
            >
              <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-20 px-6 md:px-10 bg-yellow-400 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4"
        >
          Need Our Services?
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#0B1F3A]/75 text-lg mb-8 max-w-xl mx-auto"
        >
          Reach out to us and our team will connect with you to provide
          the right support for your community.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#0B1F3A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-colors duration-200"
          >
            Contact Us
          </button>
          <button
            onClick={() => navigate("/about")}
            className="bg-transparent text-[#0B1F3A] border-2 border-[#0B1F3A] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
          >
            Learn About Us
          </button>
        </motion.div>
      </section>

    </div>
  )
}

export default Services