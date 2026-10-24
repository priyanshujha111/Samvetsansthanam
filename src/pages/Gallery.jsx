import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryItems = [
  { id: 1, icon: "🏥", title: "Free Health Camp", category: "Healthcare", color: "bg-blue-100", span: "col-span-1 row-span-1" },
  { id: 2, icon: "📚", title: "Education Fair", category: "Education", color: "bg-yellow-100", span: "col-span-1 row-span-2" },
  { id: 3, icon: "🌊", title: "Flood Relief Drive", category: "Relief", color: "bg-red-100", span: "col-span-1 row-span-1" },
  { id: 4, icon: "🎭", title: "Cultural Mela", category: "Events", color: "bg-purple-100", span: "col-span-1 row-span-1" },
  { id: 5, icon: "👩‍💼", title: "Women Skill Workshop", category: "Events", color: "bg-pink-100", span: "col-span-1 row-span-1" },
  { id: 6, icon: "🌾", title: "Kisan Sammelan", category: "Relief", color: "bg-green-100", span: "col-span-1 row-span-2" },
  { id: 7, icon: "🎓", title: "Scholarship Drive", category: "Education", color: "bg-orange-100", span: "col-span-1 row-span-1" },
  { id: 8, icon: "💊", title: "Medicine Distribution", category: "Healthcare", color: "bg-cyan-100", span: "col-span-1 row-span-1" },
  { id: 9, icon: "🤝", title: "Community Meet", category: "Events", color: "bg-indigo-100", span: "col-span-1 row-span-1" },
  { id: 10, icon: "🏫", title: "School Program", category: "Education", color: "bg-lime-100", span: "col-span-1 row-span-1" },
  { id: 11, icon: "🚑", title: "Medical Awareness", category: "Healthcare", color: "bg-teal-100", span: "col-span-1 row-span-1" },
  { id: 12, icon: "🎪", title: "Annual Event", category: "Events", color: "bg-rose-100", span: "col-span-1 row-span-1" },
]

const tabs = ["All", "Events", "Healthcare", "Education", "Relief"]

const stats = [
  { num: "500+", label: "Photos" },
  { num: "50+", label: "Events Covered" },
  { num: "6+", label: "Categories" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeTab)

  const currentIndex = filtered.findIndex((g) => g.id === lightbox?.id)

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length
    setLightbox(filtered[prevIndex])
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filtered.length
    setLightbox(filtered[nextIndex])
  }

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
          Our <span className="text-yellow-400">Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-8"
        >
          A glimpse into our work, events, and impact across communities —
          every photo tells a story of change.
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

      {/* ───── FILTER TABS ───── */}
      <section className="bg-white py-8 px-6 border-b border-gray-100 sticky top-[64px] z-40">
        <div className="flex justify-center gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-yellow-400 text-[#0B1F3A] shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {tab}
              <span className="ml-2 text-xs">
                ({tab === "All"
                  ? galleryItems.length
                  : galleryItems.filter((g) => g.category === tab).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ───── GALLERY GRID ───── */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          {activeTab === "All" ? "All Photos" : `${activeTab} Photos`}
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-14">
          Moments That Matter
        </h2>

        {filtered.length === 0 ? (
          <div className="text-center text-gray-400 py-20 text-lg">
            No photos found.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightbox(item)}
                className={`${item.color} rounded-2xl cursor-pointer overflow-hidden group relative
                  ${index % 5 === 1 ? "row-span-2" : ""}
                  ${index % 7 === 0 ? "col-span-2" : ""}
                `}
                style={{ minHeight: index % 5 === 1 ? "320px" : "160px" }}
              >
                {/* content */}
                <div className="w-full h-full flex flex-col items-center justify-center p-6"
                  style={{ minHeight: "inherit" }}
                >
                  <span className="text-5xl mb-3">{item.icon}</span>
                  <p className="text-sm font-semibold text-gray-600 text-center">
                    {item.title}
                  </p>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-[#0B1F3A]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-2xl">
                  <span className="text-4xl">{item.icon}</span>
                  <p className="text-white font-bold text-sm text-center px-4">
                    {item.title}
                  </p>
                  <span className="text-xs bg-yellow-400 text-[#0B1F3A] px-3 py-1 rounded-full font-semibold">
                    {item.category}
                  </span>
                  <p className="text-gray-300 text-xs mt-1">Click to view</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ───── LIGHTBOX ───── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`${lightbox.color} rounded-3xl p-12 max-w-md w-full text-center relative`}
            >
              {/* close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-gray-700 font-bold transition-colors"
              >
                ✕
              </button>

              <div className="text-8xl mb-6">{lightbox.icon}</div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">
                {lightbox.title}
              </h3>
              <span className="inline-block text-xs bg-yellow-400 text-[#0B1F3A] px-4 py-1.5 rounded-full font-bold mb-6">
                {lightbox.category}
              </span>
              <p className="text-gray-500 text-sm leading-6">
                Real photos coming soon. This is a placeholder for{" "}
                <strong>{lightbox.title}</strong> event visuals.
              </p>

              {/* prev / next */}
              <div className="flex justify-between mt-8 gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 bg-[#0B1F3A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-black transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-[#0B1F3A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-black transition-colors"
                >
                  Next →
                </button>
              </div>

              {/* counter */}
              <p className="text-xs text-gray-400 mt-4">
                {currentIndex + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───── CTA ───── */}
      <section className="py-20 px-6 md:px-10 bg-yellow-400 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4"
        >
          Want to See More?
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#0B1F3A]/75 text-lg mb-8 max-w-xl mx-auto"
        >
          Follow us on social media or contact us to get more photos
          and updates from our on-ground activities.
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
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="bg-[#0B1F3A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-colors duration-200"
          >
            Follow Us
          </button>
          <button
            onClick={() => window.location.href = "/contact"}
            className="bg-transparent text-[#0B1F3A] border-2 border-[#0B1F3A] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
          >
            Contact Us
          </button>
        </motion.div>
      </section>

    </div>
  )
}

export default Gallery