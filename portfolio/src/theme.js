import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";

export const lightTheme = {
  body: '#fff',
  text: '#292926',
  textReverse: '#fff',
  backgroundColor: '#fff',
  headerBackground: '#f1f1f1',
  navLinkColor: '#292926',
  menuLinkColor: 'white',
  buttonHoverColor: '#ade87a',
  detailsGradientStart: 'rgba(255,255,255,0)',
  detailsGradientEnd: '#e8e8e8',
  cvButtonBackground: '#292926',
  cvButtonHoverBackground: '#ade87a',
  cvButtonHoverColor: 'black',
  buttonsBorderColor: 'black',
  containerColor: '#292926',
};

export const darkTheme = {
  body: '#292926',
  text: '#fff',
  textReverse: '#292926',
  backgroundColor: '#292926',
  headerBackground: '#2b2b2b',
  navLinkColor: '#fff',
  menuLinkColor: 'white',
  buttonHoverColor: '#ade87a',
  detailsGradientStart: 'rgba(41,41,38,0)',
  detailsGradientEnd: '#1f1f1c',
  cvButtonBackground: '#fff',
  cvButtonHoverBackground: '#ade87a',
  cvButtonHoverColor: '#292926',
  buttonsBorderColor: '#fff',
  containerColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.headerBackground};
    transition: background-color 0.3s, color 0.3s;
    padding-right: 50px;
    height: 80px
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: center;
    }

    .nav {
      display: none; 
    }

    .logo {
      width: 150px;
    }

    .menu-link {
      text-align: center;
    }
  }

  .floating-navbar {
    position: fixed;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 60px;
    border-radius: 25px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 20px;
    animation: slideDown 1.0s ease-out forwards;
  }

  @keyframes slideDown {
    0% {
      top: -100px; 
    }
    100% {
      top: 10px; 
    }
  }


  .logo {
    transition: all 0.3s ease-out;
    height: 60px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav {
    display: flex;
    gap: 2rem;
    transition: opacity 0.3s ease-out;
    font-weight: normal;
    justify-content: flex-start;
    width: 100%;
    padding: 50px;
    opacity: 1;
    transform: translateX(-100%); 
    animation: slideIn 2s forwards; 
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%); 
    }
    to {
      transform: translateX(0);
    }
  }


  .nav.hidden {
    opacity: 0; 
  }

  .nav a {
    color: ${({ theme }) => theme.navLinkColor};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: normal;
    transition: color 0.3s ease-out, opacity 0.3s ease-out;
  }

  .nav a:hover {
    color: #3498db;
  }

  .menu-open .nav {
    opacity: 1;
  }

  .menu-toggle {
    display: none;
    margin-right: auto;
    padding: 0.5rem;
  }

  .floating-navbar .menu-toggle {
    display: block;
  }

  .cursor {
    position: fixed;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
    transition: background-color 0.5s ease, transform 0.2s ease;
  }

  .cursor.hovered {
    width: 120px;
    height: 120px;
    background-color: #ade87ac9;
    transform: translate(-50%, -50%) scale(1.2);
  }

  .moving-text-container {
    overflow: hidden;
    margin-top: 1px;
    white-space: nowrap;
    z-index: 1;
  }

  .moving-text:hover {
    animation-play-state: paused;
  }

  .moving-text {
    font-size: 14rem;
    font-weight: 500;
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.06em;
    animation: 200s slide infinite linear;
    display: inline-block;
  }

  .name {
    position: relative;
  }

  .photo-overlay {
    position: absolute;
    right: 20px; 
    z-index: 2;
  }

  .photo-overlay img {
    max-height: 805px; 
    width: auto;
    object-fit: contain; 
  }
    
  .details-container {
    background: linear-gradient(to right, ${({ theme }) => theme.detailsGradientStart}, ${({ theme }) => theme.detailsGradientEnd});
    height: 470px;
    position: relative;
    z-index: 0;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  .details-container p {
    padding-right: 40%;
  }

  .details-container button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.buttonsBorderColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.buttonsBorderColor};
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 3;
  }

  .details-container button:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
  }

  .details-container .cv-button {
    width: 200px;
    height: 50px;
    background-color: ${({ theme }) => theme.cvButtonBackground};
    color: ${({ theme }) => theme.body};
    border: none;
    border-radius: 25px; 
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
    align-self: flex-start; 
    outline: ${({ theme }) => theme.cvButtonBackground};
  }

  .details-container .cv-button:hover {
    background-color: ${({ theme }) => theme.cvButtonHoverBackground};
    color: ${({ theme }) => theme.cvButtonHoverColor};
  }

  .details-container .buttons-container {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 20px;
  }
    

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .about-container {
    background-color: ${({ theme }) => theme.navLinkColor};
    height: 1100px;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    transition: transform 0.3s ease-out;
    z-index: 5;
  }

  .about-slide {
    background-color: #ade87a;
    height: 50px;
    color: #6e9a48;
    animation: 100s slide infinite linear;
    font-size: 1.5rem;
    font-weight: 500;
    display: inline-block;
    padding: 8px 0;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  .about-motto {
    color: ${({ theme }) => theme.textReverse};
    font-size: 4rem;
    font-weight: 500;
    font-family: 'Playfair Display', serif;
    white-space: wrap;
    text-align: center; 
    position: absolute; 
    top: 20%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  .about-cards {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 750px;
    background: ${({ theme }) => theme.backgroundColor};
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 100px 0;
    display: flex;
    justify-content: center; 
    align-items: center; 
    overflow: hidden;
    z-index: 1;
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  .about-cards-slide {
    display: flex;
    gap: 0;
    z-index: 2;
    transition: transform 0.3s ease-out;
    position: relative;
    padding-top: 80px;
    scroll-snap-type: x mandatory; 
    scroll-behavior: smooth;
    
  }

  .about-cards-slide img {
    height: 450px;
    width: 325px;
    border-radius: 25px;
    transition: transform 0.3s ease-out;
    z-index: 1;
    object-fit: cover
  }

  .scroll-buttons {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10; 
  }

  .scroll-buttons button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.buttonsBorderColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
    font-size: 20px;
    padding: 10px 15px;
    color: ${({ theme }) => theme.buttonsBorderColor};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
  }

  .scroll-buttons button:hover {
    background: #333;
  }
    
  .tech-skills-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      margin-top: -1100px;
      height: max-width;
      background: #ade87a;
      padding-top: 50px;
  }

  .tech-skills-container h3{
    font-size: 20px;
    font-weight: bold; /* Bold */
    font-family: 'Playfair Display', serif;
  }
  .tech-skills-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .tech-skills-header,
  .tech-skills-languages,
  .tech-skills-frontend,
  .tech-skills-backend,
  .tech-skills-tools,
  .tech-skills-proficiencies {
    width: 300px;
    border-radius: 20px;
    color: black;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    gap: 10px;
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    position: relative; 
    overflow: visible; 
    transition: background 0.3s ease-in-out;
  }

  .tech-skills-header:hover,
  .tech-skills-languages:hover,
  .tech-skills-frontend:hover,
  .tech-skills-backend:hover,
  .tech-skills-tools:hover,
  .tech-skills-proficiencies:hover {

  }

  /* Skill item styles */
  .skill-item-box {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 10px 15px;
    background-color: white;  
    border: 1px solid #ddd; 
    border-radius: 100px; 
    cursor: grab; 
    width: 240px;
    text-align: center;
    user-select: none;
    cursor: grab;
  }

  .skill-item-box:active {
    cursor: grabbing;
  }

  /* Header styles */
  .tech-skills-header {
      height: 200px;
  }

  .tech-skills-header-1 {
      font-size: 15px;
      font-weight: 300;
      text-transform: uppercase;
  }

  .tech-skills-header-2 {
      font-size: 2rem; 
      font-weight: bold; 
      font-family: 'Playfair Display', serif; 
  }

  .tech-skills-languages { background-color: white; height: 500px; }
  .tech-skills-frontend { background-color: white; height: 350px; }
  .tech-skills-backend { background-color: white; height: 350px; }
  .tech-skills-tools { background-color: white; height: 400px; }
  .tech-skills-proficiencies { background-color: white; height: 300px; }

  @keyframes appear {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .proj-desc {
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }

  .tech-stack {
      color: ${({ theme }) => theme.text};
      border: 1px solid ${({ theme }) => theme.text};
      border-radius: 20px;
    }

  .sliding-title {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    white-space: nowrap;
    padding: 8px 16px;
  }

  /* Keyframes for sliding effect */
  @keyframes title-slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .projects-container {
    background: linear-gradient(90deg, #ade87a, #292926);
    background-size: 200% 200%;
    animation: moveBackground 10s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: Arial, sans-serif;
  }

  @keyframes moveBackground {
    0% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }

  .project-card {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .footer {
    text-align: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.backgroundColor};
    bottom: 0;
    width: 100%;
    font-size: 14px;
    color: #555;
  }

  .footer p {
    margin: 0;
    color: ${({ theme }) => theme.text};
  }

  .footer .back-to-top {
    color: ${({ theme }) => theme.buttonHoverColor};
    text-decoration: none;
  }

  .footer .back-to-top:hover {
    text-decoration: underline;
  }


`;
