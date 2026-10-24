import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const stats = [
  { num: "5000+", label: "Students Helped" },
  { num: "200+", label: "Medical Camps" },
  { num: "10000+", label: "Families Supported" },
  { num: "50+", label: "Volunteers" },
]

const focusAreas = [
  {
    icon: "📚",
    title: "Education",
    desc: "Scholarships, schools, libraries, and student support programs for underprivileged children.",
    color: "bg-yellow-50",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Medical camps, health awareness, child welfare, and relief for rural communities.",
    color: "bg-blue-50",
  },
  {
    icon: "🌊",
    title: "Disaster Relief",
    desc: "Flood, drought, fire, and emergency support for affected families across districts.",
    color: "bg-red-50",
  },
  {
    icon: "👩‍💼",
    title: "Women Empowerment",
    desc: "Skill training, awareness campaigns, and self-employment opportunities for women.",
    color: "bg-pink-50",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    desc: "Modern farming techniques, tools, and training to improve farmer livelihoods.",
    color: "bg-green-50",
  },
  {
    icon: "🎭",
    title: "Cultural Development",
    desc: "Youth engagement, cultural events, and social awareness programs.",
    color: "bg-purple-50",
  },
]

const recentEvents = [
  {
    icon: "🏥",
    title: "Free Health Camp",
    date: "March 15, 2024",
    location: "Village Rampur",
    desc: "Free health checkups and medicine distribution for over 500 villagers.",
    color: "bg-blue-100",
  },
  {
    icon: "🎓",
    title: "Scholarship Drive",
    date: "February 10, 2024",
    location: "District Hall",
    desc: "Scholarships and books distributed to underprivileged students.",
    color: "bg-yellow-100",
  },
  {
    icon: "🌊",
    title: "Flood Relief Drive",
    date: "September 5, 2023",
    location: "Affected Areas",
    desc: "Emergency food, shelter and medicines for flood-affected families.",
    color: "bg-red-100",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans">

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen bg-[#0B1F3A] text-white px-6 md:px-16 flex items-center overflow-hidden">
        {/* background glows only — circles removed */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            Samvet Sansthanam
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Empowering Lives Through{" "}
            <span className="text-yellow-400">
              Education, Health & Social Welfare
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-gray-300 mb-10 leading-8 max-w-2xl"
          >
            SAMVET SANSTHANAM is dedicated to building a better tomorrow
            through education, healthcare, relief support, women empowerment,
            and long-term social impact initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => navigate("/programs")}
              className="bg-yellow-400 text-[#0B1F3A] px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors duration-200"
            >
              Explore Programs
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0B1F3A] transition-all duration-200"
            >
              Join as Volunteer
            </button>
          </motion.div>

          {/* mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{s.num}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── MISSION ───── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            Our mission is to empower underserved communities through quality
            education, accessible healthcare, disaster relief, skill development,
            and cultural initiatives that create long-term sustainable impact
            across rural and urban areas.
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/about")}
              className="flex items-center gap-1 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group"
            >
              Learn About Us
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ───── FOCUS AREAS ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          What We Do
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Our Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {focusAreas.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <span className="text-xs font-bold tracking-widest text-gray-300 mb-3 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/programs")}
            className="bg-[#0B1F3A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-colors duration-200"
          >
            View All Programs
          </button>
        </div>
      </section>

      {/* ───── IMPACT ───── */}
      <section className="relative py-20 px-6 md:px-10 bg-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Our Numbers
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Impact We've <span className="text-yellow-400">Created</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{s.num}</div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── RECENT EVENTS ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Latest Activities
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Recent Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentEvents.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`${item.color} h-36 flex items-center justify-center text-5xl`}>
                {item.icon}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                  <span>📅 {item.date}</span>
                  <span>📍 {item.location}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                <button
                  onClick={() => navigate("/events")}
                  className="mt-4 flex items-center gap-1 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group/btn text-sm"
                >
                  View Details
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/events")}
            className="bg-[#0B1F3A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-colors duration-200"
          >
            View All Events
          </button>
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
          Become a Volunteer
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#0B1F3A]/75 text-lg mb-8 max-w-xl mx-auto"
        >
          Join hands with us to bring meaningful change in society. Every effort
          counts and every volunteer makes a difference.
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
            Join Now
          </button>
          <button
            onClick={() => navigate("/programs")}
            className="bg-transparent text-[#0B1F3A] border-2 border-[#0B1F3A] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
          >
            Explore Programs
          </button>
        </motion.div>
      </section>

    </div>
  )
}

export default Home