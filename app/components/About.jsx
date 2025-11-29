'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Database, FlaskRound, Leaf, Cpu } from 'lucide-react'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

// Simple Card Component without glow effects
const SimpleCard = ({ children, className = "", delay = 0, icon: Icon }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

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
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative bg-[#2B2C28] p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#339989]/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
                {/* Icon */}
                {Icon && (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={inView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: delay + 0.2, duration: 0.5 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#339989] to-[#7DE2D1] flex items-center justify-center mb-3 sm:mb-4 shadow-lg flex-shrink-0"
                    >
                        <Icon size={20} className="sm:w-6 sm:h-6 text-[#131515]" />
                    </motion.div>
                )}
                
                {/* Main Content */}
                <div className="relative z-10">
                    {children}
                </div>

                {/* Hover border effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-lg sm:rounded-xl border-1 border-[#7DE2D1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </motion.div>
        </motion.div>
    )
}

const About = () => {
    const researchAreas = [
        { name: "Plant Molecular Biology", icon: Leaf },
        { name: "Proteomics & Metabolomics", icon: FlaskRound },
        { name: "Biofilm Technology", icon: Database },
        { name: "Sustainable Packaging", icon: Leaf },
        { name: "Data Analysis & Bioinformatics", icon: Cpu },
        { name: "Agricultural Biotechnology", icon: Leaf }
    ]

    return (
        <section id='about' className='w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#131515]'>
            {/* Header Section */}
            <div className='text-center mb-12 sm:mb-16'>
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-[#7DE2D1] text-base sm:text-lg lg:text-xl mb-3 font-inter'
                >
                    Introduction
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFAFB] font-playfair mb-4 sm:mb-6'
                >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='max-w-3xl mx-auto px-2 sm:px-4'
                >
                    <p className='text-[#FFFAFB] text-sm sm:text-base lg:text-lg leading-relaxed font-inter'>
                        Dr. Parneeta Chaudhary is an accomplished biotechnology researcher and educator with a Ph.D. in 
                        Biotechnology from Guru Gobind Singh Indraprastha University. Her research focuses on the development 
                        of novel biotechnological tools for the production of bioactive compounds and their applications 
                        in the food and pharmaceutical industries.
                    </p>
                </motion.div>
            </div>

            {/* Research Expertise Section */}
            <div className='max-w-6xl mx-auto mb-12 sm:mb-16'>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFFAFB] text-center mb-8 sm:mb-12 font-playfair'
                >
                    Research Expertise
                </motion.h3>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'
                >
                    {/* Left Column */}
                    <div className='space-y-6'>
                        <SimpleCard delay={0} icon={BookOpen}>
                            <h4 className='text-lg sm:text-xl font-bold text-[#7DE2D1] mb-3 sm:mb-4 font-inter'>Teaching Experience</h4>
                            <ul className='space-y-3 sm:space-y-4 text-[#FFFAFB]'>
                                <li className='flex items-start group/item'>
                                    <motion.span 
                                        whileHover={{ scale: 1.2 }}
                                        className='text-[#339989] mr-3 mt-1 text-lg transition-transform duration-200 flex-shrink-0'
                                    >
                                        •
                                    </motion.span>
                                    <div className='min-w-0'>
                                        <strong className='group-hover/item:text-[#7DE2D1] transition-colors duration-200 text-sm sm:text-base'>
                                            Assistant Professor
                                        </strong> 
                                        <span className='text-[#FFFAFB] text-sm sm:text-base'> : Vivekananda Institute of Professional Studies, Delhi</span>
                                        <p className='text-[#FFFAFB]/80 mt-1 text-xs sm:text-sm'>Taught courses in Programming to B.Tech. CSE-AM and Electrical Engineering students.</p>
                                    </div>
                                </li>
                                <li className='flex items-start group/item'>
                                    <motion.span 
                                        whileHover={{ scale: 1.2 }}
                                        className='text-[#339989] mr-3 mt-1 text-lg transition-transform duration-200 flex-shrink-0'
                                    >
                                        •
                                    </motion.span>
                                    <div className='min-w-0'>
                                        <strong className='group-hover/item:text-[#7DE2D1] transition-colors duration-200 text-sm sm:text-base'>
                                            Assistant Professor (Guest Faculty)
                                        </strong> 
                                        <span className='text-[#FFFAFB] text-sm sm:text-base'> : Department of Biotechnology, Delhi Technological University</span>
                                        <p className='text-[#FFFAFB]/80 mt-1 text-xs sm:text-sm'>Taught courses in Artificial Intelligence and Design & Analysis of Algorithms for M.Tech students.</p>
                                    </div>
                                </li>
                            </ul>
                        </SimpleCard>

                        <SimpleCard delay={0.1} icon={Users}>
                            <h4 className='text-lg sm:text-xl font-bold text-[#7DE2D1] mb-3 font-inter'>Collaborative Research</h4>
                            <p className='text-[#FFFAFB] leading-relaxed text-sm sm:text-base'>
                                Assisted an M.Sc. student in data analysis for a publication in a reputable journal,
                                focusing on a meta-analysis of plant responses to cold stress. This work contributed to
                                a better understanding of stress tolerance mechanisms in plants.
                            </p>
                        </SimpleCard>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-6'>
                        <SimpleCard delay={0.2} icon={Leaf}>
                            <h4 className='text-lg sm:text-xl font-bold text-[#7DE2D1] mb-3 font-inter'>Plant Molecular Biology</h4>
                            <p className='text-[#FFFAFB] leading-relaxed text-sm sm:text-base'>
                                Skilled in various molecular techniques to explore plant biology at the molecular level. 
                                Successfully conducted a comprehensive comparative proteomic analysis of tubers and bulbils 
                                in Dioscorea alata L., integrating transcriptome, metabolome, and proteome data.
                            </p>
                        </SimpleCard>

                        <SimpleCard delay={0.3} icon={Database}>
                            <h4 className='text-lg sm:text-xl font-bold text-[#7DE2D1] mb-3 font-inter'>Database Development</h4>
                            <p className='text-[#FFFAFB] leading-relaxed text-sm sm:text-base'>
                                Currently developing a comprehensive proteomic and metabolomic profile database for
                                Dioscorea, Brassica, and hippophae species, aimed at facilitating future research in
                                these areas.
                            </p>
                        </SimpleCard>

                        <SimpleCard delay={0.4} icon={FlaskRound}>
                            <h4 className='text-lg sm:text-xl font-bold text-[#7DE2D1] mb-3 font-inter'>Biofilm Innovation</h4>
                            <p className='text-[#FFFAFB] leading-relaxed text-sm sm:text-base'>
                                Leading the development of "intelligent" biofilms from agricultural waste of plants like
                                Brassica sp. and Dioscorea sp. These biofilms utilize their halochromic properties to
                                visually indicate food freshness, offering a sustainable alternative to harmful PVC-based 
                                plastic packaging.
                            </p>
                        </SimpleCard>
                    </div>
                </motion.div>
            </div>

            {/* Key Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='max-w-4xl mx-auto'
            >
                <h3 className='text-xl sm:text-2xl font-bold text-[#7DE2D1] text-center mb-6 sm:mb-8 font-playfair'>
                    Key Research Areas
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>
                    {researchAreas.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: "rgba(125, 226, 209, 0.8)",
                                transition: { duration: 0.2 }
                            }}
                            className="relative p-3 sm:p-4 rounded-lg text-center border border-[#339989]/30 bg-[#2B2C28] cursor-pointer group transition-all duration-300"
                        >
                            <span className='text-[#FFFAFB] font-inter text-xs sm:text-sm lg:text-base'>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default About