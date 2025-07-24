import Tilt from "react-parallax-tilt";
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
}) => {
  // Detect mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isMobile ? (
        // Mobile version without Tilt
        <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white transform hover:scale-105 transition-transform duration-300">
          <div className="relative h-[200px] sm:h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
              onError={(e) => {
                console.log('Image failed to load:', image);
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.display = 'flex';
                e.currentTarget.style.alignItems = 'center';
                e.currentTarget.style.justifyContent = 'center';
                e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image not available</span>';
              }}
            />
            <div className="absolute bottom-3 right-3">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="bg-black bg-opacity-80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        // Desktop version with Tilt
        <Tilt
          glareEnable
          tiltEnable
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          glareColor="#867bcaff"
        >
          <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white">
            <div className="relative h-[200px] sm:h-[230px] w-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-2xl object-cover"
                loading="eager"
                onError={(e) => {
                  console.log('Image failed to load:', image);
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.display = 'flex';
                  e.currentTarget.style.alignItems = 'center';
                  e.currentTarget.style.justifyContent = 'center';
                  e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image not available</span>';
                }}
              />
              <div className="absolute inset-0 m-3 flex justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="bg-black bg-opacity-80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      )}
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
  // Detect mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isMobile ? (
        // Mobile version without Tilt
        <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white transform hover:scale-105 transition-transform duration-300">
          <div className="relative h-[200px] sm:h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
              loading="eager"
              onError={(e) => {
                console.log('Certificate image failed to load:', image);
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.display = 'flex';
                e.currentTarget.style.alignItems = 'center';
                e.currentTarget.style.justifyContent = 'center';
                e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Certificate not available</span>';
              }}
            />
            <div className="absolute bottom-3 right-3">
              <div
                onClick={() => window.open(certificateLink, "_blank")}
                className="bg-black bg-opacity-80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm"
              >
                <span className="text-white text-[9px] font-medium">View</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[13px] sm:text-[14px]">Issued by: {issuer}</p>
          </div>
        </div>
      ) : (
        // Desktop version with Tilt
        <Tilt
          glareEnable
          tiltEnable
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          glareColor="#867bcaff"
        >
          <div className="bg-tertiary w-full max-w-[350px] min-w-[280px] rounded-2xl p-5 border border-white">
            <div className="relative h-[200px] sm:h-[230px] w-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-2xl object-cover"
                loading="eager"
                onError={(e) => {
                  console.log('Certificate image failed to load:', image);
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.display = 'flex';
                  e.currentTarget.style.alignItems = 'center';
                  e.currentTarget.style.justifyContent = 'center';
                  e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Certificate not available</span>';
                }}
              />
              <div className="absolute inset-0 m-3 flex justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div
                  onClick={() => window.open(certificateLink, "_blank")}
                  className="bg-black bg-opacity-80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm"
                >
                  <span className="text-white text-[10px] sm:text-[12px] font-medium">View</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[13px] sm:text-[14px]">Issued by: {issuer}</p>
            </div>
          </div>
        </Tilt>
      )}
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
        className="text-secondary mt-3 max-w-3xl text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px]"
      >
        {config.sections.works.content}
      </motion.p>

      <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-7 px-2 sm:px-4">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Certificate Section */}
      <div className="mt-16 sm:mt-20">
        <Header useMotion={true} {...config.sections.certificates} />

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px]"
        >
          {config.sections.certificates.content}
        </motion.p>

        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-7 px-2 sm:px-4">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`certificate-${index}`}
              index={index}
              {...certificate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
