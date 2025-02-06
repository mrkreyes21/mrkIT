import React, { useEffect, useState, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import ImageCard from "../components/cards/ImageCards";
import { 
  FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaPython, FaJava, 
  FaDatabase, FaFigma, FaGitAlt, FaCuttlefish, FaRProject 
} from "react-icons/fa";

import { 
  SiTailwindcss, SiDart, SiMongodb, SiFirebase, SiMysql, 
  SiAssemblyscript, SiAdobe, SiAdobeillustrator, SiAdobephotoshop, 
  SiWordpress, SiCanva 
} from "react-icons/si";
import { motion, useAnimation } from 'framer-motion';
import Modal from './Modal';
import EducationImg1 from '../assets/about/Education.png';
import HackStreetImg1 from '../assets/about/hack-a-street.JPEG';
import SurfingImg from '../assets/about/surfing.jpeg';
import ViganImg from '../assets/about/vigan.jpeg';
import OrgImg1 from '../assets/about/org.jpg';
import MarkImg from '../assets/mark.png';
import Resume from '../assets/Reyes_resume.pdf';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null); 
  const cardsContainerRef = useRef(null); 
  const languagesRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);
  const proficienciesRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(true);
  
  const SkillItem = ({ icon, label, containerRef }) => {
    const controls = useAnimation();
    const itemRef = useRef(null);
    const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      if (containerRef.current && itemRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const itemRect = itemRef.current.getBoundingClientRect();
        const x = itemRect.left - containerRect.left;
        const y = itemRect.top - containerRect.top;
        setOriginalPosition({ x, y });
      }
    }, [containerRef]);
  
    const handleDragEnd = (event) => {
      const container = containerRef.current;
      if (!container || !itemRef.current) return;
  
      const containerRect = container.getBoundingClientRect();
      const itemRect = itemRef.current.getBoundingClientRect();
  
      const isOutside =
        itemRect.left < containerRect.left ||
        itemRect.right > containerRect.right ||
        itemRect.top < containerRect.top ||
        itemRect.bottom > containerRect.bottom;
  
      if (isOutside) {
        controls.start({
          x: 0,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        });
      }
    };
  
    return (
      <motion.div
        ref={itemRef}
        className="skill-item-box"
        drag
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        whileDrag={{
          scale: 1.1,
          y: -10,
          transition: { type: 'spring', stiffness: 300, damping: 10 }
        }}
      >
        {icon} {label}
      </motion.div>
    );
  };
  

  const greetings = [
    "Hello",
    "Kumusta",
    "Hola",
    "Ciao",
    "안녕하세요",
    "Olá",
    "สวัสดี",
    "こんにちは",
    "Hallo",
  ];

  const cardsData = [
    {
      images: [EducationImg1],
      title: "Where I've Learned?",
      desc: "Junior BS Computer Science student at UPLB specializing in Full Stack Development, Machine Learning, and Software Engineering."
    },
    {
      images: [HackStreetImg1],
      title: "Hands-On Learning",
      desc: "Proficient in Flutter, Firebase, MERN Stack, Java, SQL, Git/GitHub, database design, and UI/UX optimization."
    },
    {
      images: [SurfingImg, ViganImg],
      title: "Life Beyond the Screen",
      desc:"Passionate about traveling, photography, and music, balancing tech with creative pursuits.",
    },
    {
      images: [OrgImg1],
      title: "Belonging & Beyond",
      desc: "Active member of ACSS UPLB and UPLB CAP Corp., engaging in hackathons and industry collaborations."
    },
  ];

  const duplicatedCards = [...cardsData, ...cardsData, ...cardsData];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setTranslateX((prev) => prev - 2);
      } else {
        setTranslateX((prev) => prev + 2);
      }

      setLastScroll(currentScroll);
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const handleScrollLeft = () => {
    setTranslateX((prev) => prev + 200);
  };

  const handleScrollRight = () => {
    setTranslateX((prev) => prev - 200); 
  };

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      const containerWidth = container.scrollWidth / 3;
      if (translateX < -containerWidth) {
        setTranslateX(0);
      } else if (translateX > 0) {
        setTranslateX(-containerWidth);
      }
    }
  }, [translateX]);

  return (
    <div className="home">
      <div className="me-container">
        <div className="photo-overlay">
          <img src={MarkImg} alt="Mark Reyes" />
        </div>
        <div className="moving-text-container">
          {Array(2)
            .fill()
            .map((_, index) => (
              <div key={index} className="moving-text">
                {greetings.map((greeting, idx) => (
                  <span key={idx}>{greeting}, World! I'm Mark Reyes. &nbsp;</span>
                ))}
              </div>
            ))}
        </div>
        <div className="details-container">
          <div className="buttons-container">
          <a href="https://www.linkedin.com/in/markandreireyes" target="_blank">
            <button>
              <i className="fab fa-linkedin"></i>
            </button>
          </a>

          <a href="https://www.instagram.com/_mrkreyes/" target="_blank">
            <button>
              <i className="fab fa-instagram"></i>
            </button>
          </a>

          <a href="https://web.facebook.com/markandrei.reyes.5/" target="_blank">
            <button>
              <i className="fab fa-facebook"></i>
            </button>
          </a>

          </div>
          <p>
          A Computer Science undergraduate passionate about leveraging technical expertise to build innovative software solutions. Experienced Full Stack Developer with a background in mobile and web applications using Flutter, Firebase, and the MERN Stack. Dedicated to delivering scalable, user-centric solutions with a keen focus on optimizing UI/UX and resolving design inconsistencies. Strengthened these skills through leading academic projects, taking on leadership roles, and maintaining a deep interest in design principles and user experience.
          </p>
          <a href={Resume} download>
            <button className="cv-button">View my CV</button>
          </a>
        </div>
      </div>

      <div
        className="about-container"
        style={{
          transform: `translateY(-${Math.min(scrollPosition / 3, 100)}%)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="about-slide">
          ADAPTIVE &nbsp;✎ᝰ. CREATIVE &nbsp;✎ᝰ. ORGANIZE &nbsp;✎ᝰ. RESOURCEFUL
          &nbsp;✎ᝰ. LEADERSHIP &nbsp;✎ᝰ. ADAPTIVE &nbsp;✎ᝰ. CREATIVE &nbsp;✎ᝰ.
          ORGANIZE &nbsp;✎ᝰ. RESOURCEFUL &nbsp;✎ᝰ. LEADERSHIP &nbsp;✎ᝰ.
        </div>
        <div className="about-slide">
          ADAPTIVE &nbsp;✎ᝰ. CREATIVE &nbsp;✎ᝰ. ORGANIZE &nbsp;✎ᝰ. RESOURCEFUL
          &nbsp;✎ᝰ. LEADERSHIP &nbsp;✎ᝰ. ADAPTIVE &nbsp;✎ᝰ. CREATIVE &nbsp;✎ᝰ.
          ORGANIZE &nbsp;✎ᝰ. RESOURCEFUL &nbsp;✎ᝰ. LEADERSHIP &nbsp;✎ᝰ.
        </div>
        <div className="about-motto">
          <p>Where Mark's IT Journey Takes Shape.</p>
        </div>
        <div className="about-cards">
          <div className="scroll-buttons">
            <button onClick={handleScrollLeft}>&lt;</button>
            <button onClick={handleScrollRight}>&gt;</button>
          </div>

          <div
            className="about-cards-slide"
            ref={cardsContainerRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="card-wrapper"
                onMouseEnter={() => setActiveCardIndex(index)}
                onMouseLeave={() => setActiveCardIndex(null)}
                style={{
                  transform:
                    activeCardIndex !== null
                      ? index === activeCardIndex
                        ? "none"
                        : index < activeCardIndex
                        ? "translateX(-30px) rotate(-5deg)"
                        : "translateX(30px) rotate(5deg)"
                      : "none",
                  transition: "transform 0.3s ease-out",
                  zIndex: activeCardIndex === index ? 2 : 1,
                }}
              >
                <ImageCard images={card.images} title={card.title} description={card.desc}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tech-skills-container">
      <div className="tech-skills-column">
        <div className="tech-skills-header">
          <p className="tech-skills-header-1">WHAT DO I USE?</p>
          <p className="tech-skills-header-2">Let's know more about me</p>
        </div>

        <div className="tech-skills-languages" ref={languagesRef}>
          <h3>Languages</h3>
          <SkillItem icon={<FaPython />} label="Python" containerRef={languagesRef} />
          <SkillItem icon={<FaJs />} label="JavaScript" containerRef={languagesRef} />
          <SkillItem icon={<SiDart />} label="Dart" containerRef={languagesRef} />
          <SkillItem icon={<FaJava />} label="Java" containerRef={languagesRef} />
          <SkillItem icon={<FaCuttlefish />} label="C" containerRef={languagesRef} />
          <SkillItem icon={<FaRProject />} label="R" containerRef={languagesRef} />
          <SkillItem icon={<SiAssemblyscript />} label="Assembly" containerRef={languagesRef} />
        </div>
      </div>

      <div className="tech-skills-column">
        <div className="tech-skills-frontend" ref={frontendRef}>
          <h3>Front End</h3>
          <SkillItem icon={<FaReact />} label="ReactJS" containerRef={frontendRef} />
          <SkillItem icon={<SiTailwindcss />} label="TailwindCSS" containerRef={frontendRef} />
          <SkillItem icon={<FaHtml5 />} label="HTML" containerRef={frontendRef} />
          <SkillItem icon={<FaCss3 />} label="CSS" containerRef={frontendRef} />
        </div>

        <div className="tech-skills-backend" ref={backendRef}>
          <h3>Back End</h3>
          <SkillItem icon={<SiFirebase />} label="Firebase" containerRef={backendRef} />
          <SkillItem icon={<SiMongodb />} label="MongoDB" containerRef={backendRef} />
          <SkillItem icon={<SiMysql />} label="SQL" containerRef={backendRef} />
          <SkillItem icon={<FaNodeJs />} label="Node.js" containerRef={backendRef} />
        </div>
      </div>

      <div className="tech-skills-column">
        <div className="tech-skills-tools" ref={toolsRef}>
          <h3>Tools</h3>
          <SkillItem icon={<FaFigma />} label="Figma" containerRef={toolsRef} />
          <SkillItem icon={<SiCanva />} label="Canva" containerRef={toolsRef} />
          <SkillItem icon={<SiAdobeillustrator />} label="Illustrator" containerRef={toolsRef} />
          <SkillItem icon={<SiAdobephotoshop />} label="Photoshop" containerRef={toolsRef} />
          <SkillItem icon={<SiWordpress />} label="WordPress" containerRef={toolsRef} />
        </div>

        <div className="tech-skills-proficiencies" ref={proficienciesRef}>
          <h3>Proficiencies</h3>
          <SkillItem icon={<FaGitAlt />} label="Git/GitHub" containerRef={proficienciesRef} />
          <SkillItem icon={<FaDatabase />} label="Database Design" containerRef={proficienciesRef} />
          <SkillItem icon={<SiAdobe />} label="Media Editing" containerRef={proficienciesRef} />
          <SkillItem icon={<FaReact />} label="Full Stack Dev" containerRef={proficienciesRef} />
        </div>
      </div>
      <div className="footer">
          <p>Thanks for dropping by!</p>
          <p>© 2025 Mark Andrei Reyes. All rights reserved.</p>
          <a href="#top" className="back-to-top">Back to top</a>
      </div>
    </div>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
    </div>
  );
};

export default Home;