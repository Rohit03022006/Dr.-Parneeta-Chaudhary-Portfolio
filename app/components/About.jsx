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
          <p className="text-(--text-primary) text-base sm:text-lg leading-relaxed font-inter space-y-4">
            <span className="block">
              Dr. Parneeta Chaudhary is an accomplished biotechnology researcher
              and educator with a Ph.D. in Biotechnology from Guru Gobind Singh
              Indraprastha University.
            </span>

            <span className="block">
              Her research focuses on the development of novel biotechnological
              tools for the production of bioactive compounds and their
              applications in the food and pharmaceutical industries.
            </span>

            <span className="block">
              With a strong foundation in life sciences, advanced training in
              bioinformatics, and experience teaching computer science, she
              works at the intersection of multiple disciplines. This diverse
              journey has shaped her into an educator, researcher, and mentor
              committed to fostering innovation and student growth.
            </span>

            <span className="block">
              She is currently associated with VIPS-TC and previously served as
              an Assistant Professor teaching Artificial Intelligence and Design
              & Analysis of Algorithms at Delhi Technological University (DTU).
            </span>

            <span className="block">
              An experienced researcher with a demonstrated history of working
              in the biotechnology industry, she is skilled in bioinformatics
              and biotechnology research, analytical thinking, communication,
              and academic writing.
            </span>

            <span className="block">
              Dr. Chaudhary holds a Master’s degree in Bioinformatics from Jamia
              Millia Islamia and a Bachelor’s degree in Life Sciences from Zakir
              Husain Delhi College, University of Delhi.
            </span>
          </p>
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
