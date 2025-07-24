import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects, certificates } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject, TCertificate } from "../../types";

// ------------------- Animation Variants -------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ------------------- Project Card -------------------
const ProjectCard: React.FC<TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white shadow-lg"
  >
    <div className="relative h-[200px] sm:h-[230px] w-full">
      <img
        src={image}
        alt={name}
        className="h-full w-full rounded-2xl object-cover"
        onError={(e) => {
          console.log("Project image failed to load:", image);
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="h-full w-full rounded-2xl bg-zinc-800 flex items-center justify-center">
                <span class="text-white text-sm">Image not available</span>
              </div>
            `;
          }
        }}
      />
      <div className="absolute bottom-3 right-3">
        <button
          onClick={() => window.open(sourceCodeLink, "_blank")}
          className="bg-black bg-opacity-90 hover:bg-opacity-100 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          title="View Source Code"
        >
          <img src={github} alt="github" className="h-5 w-5 object-contain" />
        </button>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-xl sm:text-2xl font-bold text-white">{name}</h3>
      <p className="text-gray-300 mt-2 text-sm leading-relaxed">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag.name} className={`text-xs px-2 py-1 rounded ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

// ------------------- Certificate Card -------------------
const CertificateCard: React.FC<TCertificate> = ({
  name,
  issuer,
  image,
  certificateLink,
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white shadow-lg"
  >
    <div className="relative h-[200px] sm:h-[230px] w-full">
      <img
        src={image}
        alt={name}
        className="h-full w-full rounded-2xl object-cover"
        onError={(e) => {
          console.log("Certificate image failed to load:", image);
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="h-full w-full rounded-2xl bg-zinc-800 flex items-center justify-center">
                <span class="text-white text-sm">Certificate not available</span>
              </div>
            `;
          }
        }}
      />
      <div className="absolute bottom-3 right-3">
        <button
          onClick={() => window.open(certificateLink, "_blank")}
          className="bg-black bg-opacity-90 hover:bg-opacity-100 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          title="View Certificate"
        >
          <span className="text-white text-xs font-medium">View</span>
        </button>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-lg sm:text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-300 mt-2 text-sm">Issued by: {issuer}</p>
    </div>
  </motion.div>
);

// ------------------- Works Section -------------------
const Works = () => {
  return (
    <div className="w-full">
      {/* Project Section */}
      <Header useMotion={false} {...config.sections.works} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
      >
        {config.sections.works.content}
      </motion.p>

      <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
        {projects.slice(0, 4).map((project, index) => (
          <div key={`project-${index}`} className="flex-shrink-0">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Certificate Section */}
      <div className="mt-20">
        <Header useMotion={false} {...config.sections.certificates} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 mt-3 max-w-3xl text-base sm:text-lg leading-relaxed"
        >
          {config.sections.certificates.content}
        </motion.p>

        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
          {certificates.map((certificate, index) => (
            <div key={`certificate-${index}`} className="flex-shrink-0">
              <CertificateCard {...certificate} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
