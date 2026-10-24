import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const programs = [
  {
    icon: "📚",
    title: "Education Support",
    desc: "Providing scholarships, free classes, study materials, and educational support to underprivileged children to build a brighter future.",
    slug: "education",
  },
  {
    icon: "🏥",
    title: "Healthcare Services",
    desc: "Organizing free medical camps, health awareness drives, and medicine distribution for rural and underserved communities.",
    slug: "healthcare",
  },
  {
    icon: "🌊",
    title: "Disaster Relief",
    desc: "Supporting families during floods, droughts, and emergencies by providing food, shelter, and essential supplies.",
    slug: "disaster",
  },
  {
    icon: "👩‍💼",
    title: "Women Empowerment",
    desc: "Helping women through skill development programs, awareness campaigns, and self-employment opportunities.",
    slug: "women",
  },
  {
    icon: "🌾",
    title: "Agriculture Support",
    desc: "Assisting farmers with training, modern techniques, seeds, and tools to improve productivity and livelihood.",
    slug: "agriculture",
  },
  {
    icon: "🎭",
    title: "Cultural Development",
    desc: "Promoting cultural activities, youth engagement, and social awareness through events and community programs.",
    slug: "culture",
  },
]

const stats = [
  { num: "6+", label: "Core Programs" },
  { num: "10K+", label: "Lives Touched" },
  { num: "15+", label: "Villages Reached" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const Programs = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans">

      {/* ───── HERO ───── */}
      <section className="relative bg-[#0B1F3A] text-white py-24 px-6 text-center overflow-hidden">
        {/* background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
        >
          Samvet Sansthanam
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Our <span className="text-yellow-400">Programs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We work across multiple sectors to uplift communities and create
          sustainable impact through education, healthcare, relief work, and
          empowerment initiatives.
        </motion.p>

        {/* Stats */}
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

      {/* ───── PROGRAMS GRID ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          What We Do
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Programs That Create Change
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

              {/* card number */}
              <span className="text-xs font-bold tracking-widest text-gray-300 mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* icon */}
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-7 text-sm flex-1">
                {item.desc}
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-6 flex items-center gap-1 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group/btn w-fit"
              >
                Learn More
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
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
          Support Our Mission
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#0B1F3A]/75 text-lg mb-8 max-w-xl mx-auto"
        >
          Your contribution can help us reach more lives and create a lasting
          impact across communities.
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
            Get Involved
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="bg-transparent text-[#0B1F3A] border-2 border-[#0B1F3A] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
          >
            Volunteer With Us
          </button>
        </motion.div>
      </section>

    </div>
  )
}

export default Programs