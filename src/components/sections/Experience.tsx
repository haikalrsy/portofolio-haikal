import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff", // Background putih bersih
        color: "#333333", // Text warna gelap untuk kontras
        border: "2px solid #f0f0f0", // Border abu-abu terang
        borderRadius: "12px", // Rounded corners
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Subtle shadow
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #ffffff" // Arrow putih
      }}
      date={experience.date}
      dateClassName="text-gray-600" // Date dengan warna abu-abu
      iconStyle={{ 
        background: "#ffffff", // Icon background putih
        border: "3px solid #e5e7eb", // Border abu-abu terang pada icon
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-gray-800">
          {experience.title}
        </h3>
        <p
          className="text-gray-600 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-700 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#FBF5E5" // Garis timeline putih
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");  