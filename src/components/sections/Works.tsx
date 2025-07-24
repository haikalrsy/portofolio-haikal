import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects, certificates } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject, TCertificate } from "../../types";

// ------------------- Project Card -------------------
const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="group"
  >
    <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          onError={(e) => {
            console.log('Project image failed to load:', image);
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="h-full w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span class="text-white text-sm font-medium">Image not available</span>
                </div>
              `;
            }
          }}
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Button with hover effects */}
        <div className="absolute bottom-3 right-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <button
            onClick={() => window.open(sourceCodeLink, "_blank")}
            className="bg-black/80 backdrop-blur-sm hover:bg-black/90 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
            title="View Source Code"
          >
            <img
              src={github}
              alt="github"
              className="h-5 w-5 object-contain filter brightness-0 invert"
            />
          </button>
        </div>
        
        {/* Mobile fallback button - always visible on touch devices */}
        <div className="absolute bottom-3 right-3 group-hover:hidden sm:hidden">
          <button
            onClick={() => window.open(sourceCodeLink, "_blank")}
            className="bg-black/80 backdrop-blur-sm flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-lg"
            title="View Source Code"
          >
            <img
              src={github}
              alt="github"
              className="h-4 w-4 object-contain filter brightness-0 invert"
            />
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{name}</h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag.name} 
            className={`text-xs px-2 py-1 rounded-full transition-all duration-200 hover:scale-105 ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ------------------- Certificate Card -------------------
const CertificateCard: React.FC<{ index: number } & TCertificate> = ({
  index,
  name,
  issuer,
  image,
  certificateLink,
}) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="group"
  >
    <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          onError={(e) => {
            console.log('Certificate image failed to load:', image);
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="h-full w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span class="text-white text-sm font-medium">Certificate not available</span>
                </div>
              `;
            }
          }}
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Button with hover effects */}
        <div className="absolute bottom-3 right-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <button
            onClick={() => window.open(certificateLink, "_blank")}
            className="bg-black/80 backdrop-blur-sm hover:bg-black/90 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
            title="View Certificate"
          >
            <span className="text-white text-xs font-medium">View</span>
          </button>
        </div>
        
        {/* Mobile fallback button - always visible on touch devices */}
        <div className="absolute bottom-3 right-3 group-hover:hidden sm:hidden">
          <button
            onClick={() => window.open(certificateLink, "_blank")}
            className="bg-black/80 backdrop-blur-sm flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-lg"
            title="View Certificate"
          >
            <span className="text-white text-xs font-medium">View</span>
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{name}</h3>
        <p className="text-gray-300 mt-2 text-sm group-hover:text-gray-200 transition-colors duration-300">Issued by: {issuer}</p>
      </div>
    </div>
  </motion.div>
);

// ------------------- Works Section -------------------
const Works = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      {/* Project Section */}
      <Header useMotion={true} {...config.sections.works} />

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
      >
        {config.sections.works.content}
      </motion.p>

      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 px-4"
      >
        {projects.slice(0, 4).map((project, index) => (
          <div key={`project-${index}`} className="flex-shrink-0">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </motion.div>

      {/* Certificate Section */}
      <motion.div 
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-20"
      >
        <Header useMotion={true} {...config.sections.certificates} />

        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
        >
          {config.sections.certificates.content}
        </motion.p>

        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 px-4"
        >
          {certificates.map((certificate, index) => (
            <div key={`certificate-${index}`} className="flex-shrink-0">
              <CertificateCard index={index} {...certificate} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");
