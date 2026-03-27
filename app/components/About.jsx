"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Users, Database, FlaskRound, Leaf, Cpu } from "lucide-react";

/* Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Card */
const SimpleCard = ({ children, className = "", delay = 0, icon: Icon }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={`relative ${className}`}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(125, 226, 209, 0.8)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="relative bg-(--card-bg-color) p-4 sm:p-6 rounded-lg sm:rounded-xl border border-(--border-color)/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
      >
        {Icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-(--border-color) to-(--accent-color)  flex items-center justify-center  mb-3 sm:mb-4 shadow-lg"
          >
            <Icon size={20} className="sm:w-6 sm:h-6 text-(--bg-color)" />
          </motion.div>
        )}

        <div className="relative z-10">{children}</div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-lg sm:rounded-xl border border-(--accent-color) opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const researchAreas = [
    { name: "Plant Molecular Biology", icon: Leaf },
    { name: "Proteomics & Metabolomics", icon: FlaskRound },
    { name: "Biofilm Technology", icon: Database },
    { name: "Sustainable Packaging", icon: Leaf },
    { name: "Data Analysis & Bioinformatics", icon: Cpu },
    { name: "Agricultural Biotechnology", icon: Leaf },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8  py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20 bg-(--bg-color)"
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-(--accent-color) text-base sm:text-lg lg:text-xl mb-3 font-inter"
        >
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair mb-4 sm:mb-6 text-(--text-primary)"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto px-2 sm:px-4"
        >
          <div className="text-(--text-primary) text-base sm:text-lg leading-relaxed font-inter space-y-6">

            <p>
              <strong className="text-(--accent-color)">Dr. Parneeta Chaudhary</strong> is an accomplished{" "}
              <strong>biotechnology researcher and educator</strong> with a{" "}
              <strong>Ph.D. in Biotechnology</strong> from{" "}
              <strong>Guru Gobind Singh Indraprastha University</strong>.
            </p>

            <p>
              Her research focuses on the development of{" "}
              <strong>novel biotechnological tools</strong> for the production of{" "}
              <strong>bioactive compounds</strong> and their applications in the{" "}
              <strong>food and pharmaceutical industries</strong>.
            </p>

            <p>
              With a strong foundation in <strong>life sciences</strong>, advanced training
              in <strong>bioinformatics</strong>, and experience teaching{" "}
              <strong>computer science</strong>, she works at the{" "}
              <strong>intersection of multiple disciplines</strong>. This diverse journey
              has shaped her into an <strong>educator, researcher, and mentor</strong>{" "}
              committed to fostering innovation and student growth.
            </p>

            <p>
              She is currently associated with <strong>VIPS-TC</strong> and previously served
              as an <strong>Assistant Professor</strong> teaching{" "}
              <strong>Artificial Intelligence</strong> and{" "}
              <strong>Design & Analysis of Algorithms</strong> at{" "}
              <strong>Delhi Technological University (DTU)</strong>.
            </p>

            <p>
              An experienced researcher with a demonstrated history in the{" "}
              <strong>biotechnology industry</strong>, she is skilled in{" "}
              <strong>bioinformatics</strong>,{" "}
              <strong>biotechnology research</strong>,{" "}
              <strong>analytical thinking</strong>,{" "}
              <strong>communication</strong>, and{" "}
              <strong>academic writing</strong>.
            </p>

            <p>
              Dr. Chaudhary holds a{" "}
              <strong>Master’s degree in Bioinformatics</strong> from{" "}
              <strong>Jamia Millia Islamia</strong> and a{" "}
              <strong>Bachelor’s degree in Life Sciences</strong> from{" "}
              <strong>Zakir Husain Delhi College, University of Delhi</strong>.
            </p>

          </div>
        </motion.div>
      </div>

      {/* Key Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 font-playfair text-(--accent-color)">
          Key Research Areas
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {researchAreas.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-3 sm:p-4 rounded-lg text-center border border-(--border-color)/30 bg-(--card-bg-color) transition-all duration-300"
            >
              <span className="text-(--text-primary) font-inter text-xs sm:text-sm lg:text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
