import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  // 	title: "Full Stack Developer",
  // 	icon: web
  // },
  {
    title: "QA Engineer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Manual & Automation Testing",
    icon: <FreelancerIcon />,
  },

  {
    title: "Data structures & Algorithms",
    icon: <ProblemSolvingIcon/>,
  },
  // {
  // 	title: "Backend Developer",
  // 	icon: backend
  // }
  // {
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    
   
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
  
    
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Selenium",
      icon: "/assets/tech/selenium-original.svg",
      link: "https://www.selenium.dev/",
    },
    {
      name: "TestNG",
      icon: "/assets/tech/Testng.png",
      link: "https://testng.org/",
    },
    {
      name: "Cucumber BDD",
      icon: "/assets/tech/cucumber-plain.svg",
      link: "https://cucumber.io/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins-svgrepo-com.svg",
      link: "https://www.jenkins.io/",
    }
    

    
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
  
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
   
  ],
};

const experiences = [
  
  {
    title: "QA Engineer Trainee",
    company_name: "Albino pvt ltd",
    icon: "/assets/company/Albino pvt ltd.png",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [

"Project Description: Web School ERP is an integrated software application for accomplishing the active running of schools. Web-School is a custom-made solution to make administration easier for schools. Web School is easily approachable, user-friendly, and dynamic school management software that provides academic excellence. The whole administrative needs of academic institutions can be served with this integrated software, featuring a multi-user interface. Web School lets school administration get organized by involving parents, teachers, and employees.",
"Developed Manual and Automation Test Scripts in Selenium WebDriver using Java.",
"Reviewed stories and participated in daily agile/scrum, iteration planning.",
"Performed system, smoke, sanity, functional, end-to-end, positive and negative testing, and monitored the behavior of applications during different phases of testing.",
"Involved in defect validation, logging, and tracking defects, ensuring all high and urgent priority defects are resolved prior to release using Taiga.",
"Prepared the Requirement Traceability Matrix (RTM)."




    ],
  },

  {
    title: "Technical Coordinator",
    company_name: "Teksystem",
    icon: "/assets/company/Teksystems.png",
    iconBg: "#E6DEDD",
    date: "Aug 2023 to Sep 2024",
    points: [
      "Managed the end-to-end candidate experience from scheduling interviews to making job offers.",
      "Collaborated with clients to ensure accurate job descriptions and quality hires."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "FigPro",
  //   description:
  //     "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "next.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "fabricjs",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "liveblocks",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/fig-pro.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
  //   deployed_link: "https://fig-pro-github.vercel.app",
  // },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.tech/",
  // },
  // {
  //   name: "Facility Management System",
  //   description:
  //     "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "tanstack/react-query",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/facility-manager.png",
  //   source_code_link:
  //     "https://github.com/Shivam-Sharma-1/Facility-Management-System",
  //   deployed_link:
  //     "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  // },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Codingnaveen46",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/naveenqa11/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/codewithnaveen_46/",
  },
];

const heroTexts = [
  " QA Engineer/SDET",
  500,
  "Freelancer",
  500,
  "QA Engineer",
  500,
  "Full stack QA",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
