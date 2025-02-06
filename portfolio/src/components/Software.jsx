import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiR, SiTailwindcss, SiDart, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import mrkITImage from '../assets/projects/mrkIT.png';
import elbiCareImage from '../assets/projects/14.png';
import cropCircleImage from '../assets/projects/15.png';
import querViewImage from '../assets/projects/16.png';
import lolcodeImage from '../assets/projects/lolcode.png';
import polySolveHubImage from '../assets/projects/11.png';
import kuninMoSiguroImage from '../assets/projects/9.png';
import farm2MarketImage from '../assets/projects/12.png';

const techIcons = {
  Python: <FaPython className="text-blue-500" />,
  Java: <FaJava className="text-red-500" />,
  "React": <FaReact className="text-blue-400" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "SQL": <FaDatabase className="text-gray-700" />,
  "R": <SiR className="text-blue-700" />,
  "Flutter": <SiFlutter className="text-blue-500" />,
  "Dart": <SiDart className="text-blue-400" />,
  "HTML/CSS": <SiHtml5 className="text-orange-600" />,
  "CSS": <SiCss3 className="text-blue-600" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "TailwindCss": <SiTailwindcss className="text-teal-500" />
};

const projects = [
  { title: "mrkIT", image: mrkITImage, description: "Started a personal portfolio on January 29, 2025, to explore UI/UX design and animations while preparing for CMSC 128.", techStack: ["React", "JavaScript", "TailwindCss", "HTML/CSS"], year: "2025" },
  { title: "ElbiCare", image: elbiCareImage, description: "Created a mobile app to manage and simplify donations to charitable organizations with a focus on UI/UX design.", techStack: ["Flutter", "Dart", "Android"], year: "2024" },
  { title: "Crop Circle", image: cropCircleImage, description: "Built an e-commerce platform for the Department of Agriculture to connect farmers directly with customers.", techStack: ["JavaScript", "React", "MongoDB"], year: "2024" },
  { title: "QuerView", image: querViewImage, description: "Designed an SQL-based information system with an ERD to manage food reviews and items from food establishments.", techStack: ["Python", "SQL", "Database"], year: "2024" },
  { title: "LOLCode Interpreter", image: lolcodeImage, description: "Implemented a LOLCode interpreter with lexical analysis, syntax parsing, and semantic validation.", techStack: ["Python", "LOLCode"], year: "2024" },
  { title: "PolySolve Hub", image: polySolveHubImage, description: "Developed a mathematical tool using R with features like CSV input, Quadratic Spline Interpolation, and Polynomial Regression.", techStack: ["R"], year: "2023" },
  { title: "Kunin Mo Siguro?", image: kuninMoSiguroImage, description: "It is a play-until-you-lose game where the goal is to gather as many points as possible to help in Sonnie Robredough’s Angat Buhay Project.", techStack: ["Java", "OOP"], year: "2023" },
  { title: "Farm2Market", image: farm2MarketImage, description: "This is a farm simulation game. You'll play the role of a farmer in this game. You are given an initial amount of PHP. 5,000 pesos as a budget for your farm.", techStack: ["Python"], year: "2022" }
];
const ProjectCard = ({ project }) => {
  return (
    <motion.div className="project-card relative rounded-2xl shadow-lg overflow-hidden w-80 h-136 flex flex-col bg-white" whileHover={{ scale: 1.05 }}>
      <h3 className="text-lg font-bold text-center mt-2 p-2 font-[Playfair_Display]">{project.title}</h3>
      <div className="relative flex-grow">
        <img src={project.image} alt={project.title} className="w-full h-60 object-cover " />
      </div>
      <div className="proj-desc p-5 flex-grow flex flex-col">
        <div className="text-[#ade87a] text-sm font-bold mb-2">{project.year}</div>
        <p className="mb-3 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <motion.div key={i} className="tech-stack px-3 py-1 text-sm flex items-center gap-1 rounded-md" whileHover={{ backgroundColor: "#ade87a" }}>
              {techIcons[tech] || null} {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Software = () => {
  return (
    <div className="projects-container p-10 flex flex-col items-center relative">
      <div className="text-white text-3xl font-bold mb-8 font-[Playfair_Display]">Discover all my works</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Software;
