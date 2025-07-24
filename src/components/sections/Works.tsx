import { motion } from "framer-motion";
import { useState } from "react";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects, certificates } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject, TCertificate } from "../../types";

// Animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 10
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    y: -12,
    scale: 1.02,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const glowVariants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// ------------------- Project Card -------------------
const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative perspective-1000"
    >
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"
      />
      
      <div className="relative bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
        {/* Image Container with advanced effects */}
        <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900">
          {!imageError && (
            <motion.img
              src={image}
              alt={name}
              className={`h-full w-full object-cover transition-all duration-700 ease-out ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.log('Project image failed to load:', image);
                setImageError(true);
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
          
          {/* Loading/Error State */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center">
              {imageError ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center">
                    <span className="text-2xl">📁</span>
                  </div>
                  <span className="text-white text-sm font-medium">Image not available</span>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <span className="text-white text-sm">Loading...</span>
                </div>
              )}
            </div>
          )}
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Action Button */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
            className="absolute bottom-4 right-4"
          >
            <motion.button
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={github}
                alt="github"
                className="w-6 h-6 filter brightness-0 invert"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
        </motion.div>
        
        {/* Tags with stagger animation */}
        <motion.div 
          className="mt-5 flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5 + index * 0.1
              }
            }
          }}
        >
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag.name}
              variants={{
                hidden: { opacity: 0, scale: 0, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              className={`text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${tag.color}`}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            >
              #{tag.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// ------------------- Certificate Card -------------------
const CertificateCard: React.FC<{ index: number } & TCertificate> = ({
  index,
  name,
  issuer,
  image,
  certificateLink,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative perspective-1000"
    >
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
        className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"
      />
      
      <div className="relative bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
        {/* Image Container */}
        <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900">
          {!imageError && (
            <motion.img
              src={image}
              alt={name}
              className={`h-full w-full object-cover transition-all duration-700 ease-out ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.log('Certificate image failed to load:', image);
                setImageError(true);
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
          
          {/* Loading/Error State */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center">
              {imageError ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <span className="text-white text-sm font-medium">Certificate not available</span>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <span className="text-white text-sm">Loading...</span>
                </div>
              )}
            </div>
          )}
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Certificate View Button */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
            className="absolute bottom-4 right-4"
          >
            <motion.button
              onClick={() => window.open(certificateLink, "_blank")}
              className="relative w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-xl"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-white text-xs font-bold"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                View
              </motion.span>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
        >
          <motion.h3 
            className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            Issued by: {issuer}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ------------------- Works Section -------------------
const Works = () => {
  return (
    <>
      {/* Project Section */}
      <Header useMotion={true} {...config.sections.works} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
      >
        {config.sections.works.content}
      </motion.p>

      <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-8 px-4">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Certificate Section */}
      <div className="mt-32">
        <Header useMotion={true} {...config.sections.certificates} />

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
        >
          {config.sections.certificates.content}
        </motion.p>

        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-8 px-4">
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
