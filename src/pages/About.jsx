import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const trustees = [
  {
    name: "Shivam Kumar Jha",
    role: "Founder & Settlor Trustee",
    initials: "SK",
    color: "bg-yellow-50 text-yellow-600",
    desc: "Leading the trust with a long-term vision of education, healthcare, and inclusive social welfare for underserved communities.",
  },
  {
    name: "Aman Kumar Jha",
    role: "Trustee",
    initials: "AK",
    color: "bg-blue-50 text-blue-600",
    desc: "Focused on rural development, youth engagement, and strengthening community welfare programs.",
  },
  {
    name: "Rajan Kumar",
    role: "Trustee & Social Worker",
    initials: "RK",
    color: "bg-green-50 text-green-600",
    desc: "Dedicated social worker supporting education drives, awareness programs, and grassroots outreach initiatives.",
  },
  {
    name: "Shivani Kumari",
    role: "Trustee",
    initials: "SK",
    color: "bg-pink-50 text-pink-600",
    desc: "Working towards women empowerment, education access, and family support initiatives.",
  },
]

const values = [
  { icon: "📚", text: "Education for every child" },
  { icon: "🏥", text: "Accessible healthcare support" },
  { icon: "👩‍💼", text: "Women & youth empowerment" },
  { icon: "🌾", text: "Agriculture and village development" },
  { icon: "🌊", text: "Disaster relief and rehabilitation" },
  { icon: "🎭", text: "Cultural and social awareness" },
]

const stats = [
  { num: "5K+", label: "Lives Impacted" },
  { num: "200+", label: "Health Camps" },
  { num: "50+", label: "Volunteers" },
  { num: "100+", label: "Village Programs" },
]

const legalDetails = [
  { label: "Trust Name", value: "SAMVET SANSTHANAM" },
  { label: "Registration No", value: "XXXXXXX" },
  { label: "PAN No", value: "XXXXXXX" },
  { label: "12A No", value: "XXXXXXX" },
  { label: "80G No", value: "XXXXXXX" },
  { label: "GST No", value: "XXXXXXX" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const About = () => {
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
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          About <span className="text-yellow-400">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-8"
        >
          A public charitable trust committed to creating sustainable social impact through
          education, healthcare, relief work, agriculture support, and community empowerment.
        </motion.p>

        {/* stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center flex-wrap gap-10 mt-12 pt-8 border-t border-white/10"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{s.num}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ───── OUR STORY ───── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-8 mb-4">
              SAMVET SANSTHANAM was established with a clear purpose: to bridge the gap between
              opportunity and need. We work closely with children, families, farmers, women, and
              vulnerable communities to ensure dignity, education, health, and growth opportunities.
            </p>
            <p className="text-gray-600 text-lg leading-8">
              Our trust believes that real transformation begins at the grassroots level. By combining
              local leadership, volunteer participation, and sustainable programs, we aim to build a
              stronger and more inclusive future.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-8 flex items-center gap-1 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group"
            >
              Get Involved
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                <h3 className="text-4xl font-bold text-yellow-500 mb-2">{s.num}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── VISION & MISSION ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          What Drives Us
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Vision & Mission
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "🔭",
              title: "Our Vision",
              desc: "To create an equitable society where every individual has access to education, healthcare, livelihood support, and the opportunity to live with dignity.",
            },
            {
              icon: "🎯",
              title: "Our Mission",
              desc: "To uplift underserved communities through impactful initiatives, transparent governance, and people-driven programs that create measurable long-term change.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-8">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── CORE VALUES ───── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          What We Stand For
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex items-center gap-4"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>
              <p className="text-[#0B1F3A] font-semibold text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── FOUNDER MESSAGE ───── */}
      <section className="relative py-20 px-6 md:px-10 bg-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            A Word From Our Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Founder's <span className="text-yellow-400">Message</span>
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-12">
            <div className="text-5xl text-yellow-400 mb-6 leading-none">"</div>
            <p className="text-xl leading-9 text-gray-200 italic">
              Our mission is not just to help people for today, but to empower them for tomorrow.
              Every child educated, every family supported, and every village uplifted brings us closer
              to a stronger society.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg">
                SK
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Shivam Kumar Jha</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Founder & Settlor Trustee</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ───── TRUSTEES ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          The People Behind It
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Leadership & Trustees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trustees.map((member, index) => (
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

              {/* avatar */}
              <div className={`w-14 h-14 ${member.color} rounded-2xl flex items-center justify-center text-xl font-bold mb-5`}>
                {member.initials}
              </div>

              <h3 className="text-lg font-bold text-[#0B1F3A] mb-1">{member.name}</h3>
              <p className="text-yellow-500 font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-7">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── LEGAL ───── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            Official Information
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-10">
            Legal & Registration Details
          </h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-md p-10 grid md:grid-cols-2 gap-6"
          >
            {legalDetails.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-[#0B1F3A]">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
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
          Be Part of the Change
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#0B1F3A]/75 text-lg mb-8 max-w-xl mx-auto"
        >
          Whether you want to volunteer, donate, or partner with us — every contribution
          creates a ripple of positive change in communities.
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

export default About