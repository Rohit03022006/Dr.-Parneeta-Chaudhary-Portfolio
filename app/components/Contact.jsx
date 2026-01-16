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
  "Collaborative Biotechnology and Bioinformatics research opportunities",
  "Guest lectures, workshops, and training sessions",
  "Consultation on multi-omics",
  "Industry-academia partnerships",
  "Mentorship and Research Projects for students",
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
        headers: { Accept: "application/json" },
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
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-(--bg-color) scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair mb-4 text-(--text-primary)">
          To Contact  
        </h2>

        <p className="text-(--text-primary)/80 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-4">
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
          className="bg-(--card-bg-color) border border-(--border-color)/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-4 sm:mb-6 text-(--text-primary)">
            How I Can Help
          </h3>

          <ul className="space-y-3 sm:space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                  <Star size={16} className="sm:w-4 sm:h-5 text-(--accent-color)" />
                </div>
                <p className="text-(--text-primary)/80 text-sm sm:text-base leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-(--card-bg-color) border border-(--border-color)/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-4 sm:mb-6 text-(--text-primary)">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="text-sm text-(--text-primary)/70">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-(--bg-color) border border-(--border-color)/30 px-4 py-2.5 sm:py-3 text-(--text-primary) focus:outline-none focus:border-(--accent-color) text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-(--text-primary)/70">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-(--bg-color) border border-(--border-color)/30 px-4 py-2.5 sm:py-3 text-(--text-primary) focus:outline-none focus:border-(--accent-color) text-sm sm:text-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-(--text-primary)/70">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-1 rounded-lg sm:rounded-xl bg-(--bg-color) border border-(--border-color)/30 px-4 py-2.5 sm:py-3 text-(--text-primary) focus:outline-none focus:border-(--accent-color) text-sm sm:text-base resize-vertical"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-(--button-color) text-(--bg-color) font-semibold hover:bg-(--accent-color) transition-colors duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.state === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>

          {status.state !== "idle" && (
            <p
              className={`mt-3 sm:mt-4 text-sm font-inter text-center sm:text-left ${
                status.state === "success"
                  ? "text-(--accent-color)"
                  : "text-red-400"
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
