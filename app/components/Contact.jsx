"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Star, MapPin } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faSkype,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons"

const highlights = [
  "Collaborative biotechnology research opportunities",
  "Guest lectures, workshops, and training sessions",
  "Consultation on bioinformatics and proteomics",
  "Industry-academia partnerships",
  "Mentorship for research scholars",
  "Speaking engagements and conferences",
]

const Contact = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" })
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!accessKey) {
      setStatus({ state: "error", message: "Missing Web3Forms key." })
      return
    }

    const formData = new FormData(form)
    formData.append("access_key", accessKey)

    try {
      setStatus({ state: "loading", message: "Sending message..." })
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setStatus({ state: "success", message: "Thank you! I will get back to you shortly." })
        form.reset()
      } else {
        setStatus({ state: "error", message: data.message || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Unable to send message. Please try again later.",
      })
    }
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#131515] scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-[#7DE2D1] text-base sm:text-lg font-inter mb-3">Get in Touch</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4">
          Let's Collaborate
        </h2>
        <p className="text-[#FFFAFB]/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4">
          Whether it's research, mentorship, or keynote sessions, feel free to reach out using the
          form or connect through the quick links below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Left Column - How I Can Help */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2B2C28] border border-[#339989]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#FFFAFB] font-playfair mb-4 sm:mb-6">How I Can Help</h3>
          <ul className="space-y-3 sm:space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                  <Star size={16} className="sm:w-4 sm:h-5 text-[#7DE2D1]" />
                </div>
                <p className="text-[#FFFAFB]/80 text-sm sm:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[#FFFAFB]/80 text-sm">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="text-[#7DE2D1] w-4 h-4" />
              <a 
                href="https://linkedin.com/in/parnitachaudhary" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#7DE2D1] transition-colors duration-200"
              >
                parnitachaudhary
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSkype} className="text-[#7DE2D1] w-4 h-4" />
              <a 
                href="skype:parnitachaudhary?chat"
                className="hover:text-[#7DE2D1] transition-colors duration-200"
              >
                parnitachaudhary
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faResearchgate} className="text-[#7DE2D1] w-4 h-4" />
              <a 
                href="https://researchgate.net/profile/Parnitee-Chaudhary" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#7DE2D1] transition-colors duration-200"
              >
                parnitee
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2B2C28] border border-[#339989]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#FFFAFB] font-playfair mb-4 sm:mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="text-sm text-[#FFFAFB]/70">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-[#131515] border border-[#339989]/30 px-4 py-2.5 sm:py-3 text-[#FFFAFB] focus:outline-none focus:border-[#7DE2D1] text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFFAFB]/70">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-[#131515] border border-[#339989]/30 px-4 py-2.5 sm:py-3 text-[#FFFAFB] focus:outline-none focus:border-[#7DE2D1] text-sm sm:text-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFFAFB]/70">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-[#131515] border border-[#339989]/30 px-4 py-2.5 sm:py-3 text-[#FFFAFB] focus:outline-none focus:border-[#7DE2D1] text-sm sm:text-base resize-vertical"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#339989] text-[#131515] font-semibold hover:bg-[#7DE2D1] transition-colors duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
          
          {status.state !== "idle" && (
            <p
              className={`mt-3 sm:mt-4 text-sm font-inter text-center sm:text-left ${
                status.state === "success" ? "text-[#7DE2D1]" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact