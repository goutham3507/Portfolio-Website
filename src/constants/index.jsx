import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";


import { 
  RiHtml5Line, 
  RiCss3Line, 
  RiJavascriptLine, 
  RiReactjsLine, 
  RiNodeTree, 
  RiDatabaseLine, 
  RiCodeSSlashLine, 
  RiGitBranchLine, 
  RiFlutterFill, 
  RiTerminalBoxLine, 
  RiCodeLine, 
  RiDatabase2Line, 
  RiExchangeLine, // Alternative for API icon
  RiGitBranchFill, 
  RiCloudLine,  
} from "@remixicon/react";  

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Goutham Ganapathiappan",
  role: "Full Stack Developer",
  subheading:
    "As a passionate software engineer, I specialize in building intuitive and scalable applications, blending expertise in full-stack development. I enjoy solving complex problems, crafting seamless user experiences, and collaborating on innovative projects. Currently exploring AI-driven solutions, fintech integrations, and automation, I’m always eager to learn, build, and push boundaries",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Netflix Clone ",
    description:
      "A feature-rich movie streaming app built with Swift and UIKit. It fetches real-time movie data from TMDb API and offers a seamless user experience with smooth navigation and dynamic UI components.",
    techStack: ["Swift", "UIKit", "TMDb API", "Alamofire", "Kingfisher"],
    imgSrc: project1,
    link: "https://github.com/goutham3507/Netflix-Clone",
  },
  {
    id: 2,
    title: "NULA - E-Commerce",
    description:
      "A modern MERN stack e-commerce website featuring user authentication, product management, cart system, and a secure checkout process",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    imgSrc: project2,
    link: "https://github.com/goutham3507/NULA",
  },
  {
    id: 3,
    title: "Automated Whiteboard Eraser",
    description:
      "A Raspberry Pi-powered robotic system that uses computer vision to detect and erase markings on a whiteboard, ensuring efficient and automated cleaning.",
    techStack: ["Raspberry Pi", "Python", "OpenCV", "Motor Control", "Computer Vision"],
    imgSrc: project3,
    link: "https://github.com/hamchinny/batman",
  },
  {
    id: 4,
    title: "AI Career Guide",
    description:
      "An AI-powered career coaching tool that provides job recommendations, resume analysis, and skill gap insights to help users enhance their professional growth.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Gemini AI API"],
    imgSrc: project4,
    link: "https://github.com/goutham3507/AI-Career-Guide",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A sleek and fully responsive personal portfolio website showcasing projects, skills, and experience with smooth animations and an optimized UI.",
    techStack: ["React.js", "Tailwind CSS", "GSAP"],
    imgSrc: project5,
    link: "https://github.com/goutham3507/Portfolio-Website",
  },
  {
    id: 6,
    title: "3D Car Showcase",
    description:
      "An interactive 3D car visualization app built with Three.js, allowing users to explore, rotate in a dynamic web experience.",
    techStack: ["React.js", "Three.js"],
    imgSrc: project6,
    link: "https://nik-car-show.netlify.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Flutter",
    icon: <RiFlutterFill className="text-blue-500" />,
  },
  {
    name: "Python",
    icon: <RiTerminalBoxLine className="text-yellow-400" />,
  },
  {
    name: "C++",
    icon: <RiCodeLine className="text-purple-500" />,
  },
  {
    name: "Swift",
    icon: <RiCodeLine className="text-red-500" />,
  },
  {
    name: "SQL",
    icon: <RiDatabase2Line className="text-indigo-500" />,
  },
  {
    name: "REST API",
    icon: <RiExchangeLine className="text-green-500" />,
  },
  {
    name: "Git & GitHub",
    icon: <RiGitBranchFill className="text-gray-700" />,
  },
 
  {
    name: "Firebase",
    icon: <RiCloudLine className="text-orange-500" />,
  },
];
export const EXPERIENCES = [
  {
    yearRange: "2022 - Present",
    role: "Technology Trainer",
    company: "Digital Learners to Leaders Tech, Atlanta, GA",
    description:
      "Led computer science workshops for GSU students and faculty, focusing on practical applications. Gained expertise in various CS technologies through LinkedIn Learning and LeetCode. Developed skills in task prioritization, communication, and visual representation.",
    techStack: ["Python", "Java", "Web Development", "Teaching"],
  },
  {
    yearRange: "2022 - Present",
    role: "Intern",
    company: "Digital Learners to Leaders Internship, Atlanta, GA",
    description:
      "Strengthened digital portfolio with guidance from industry professionals in education, commercial, and nonprofit sectors. Developed technical leadership and collaboration skills through team-based projects. Contributed to a collective initiative addressing social issues at Georgia State University.",
    techStack: ["Team Collaboration", "Leadership", "Digital Portfolio", "Technical Skills"],
  },
  {
    yearRange: "2022",
    role: "Student Assistant",
    company: "Law Library, Georgia State University, Atlanta, GA",
    description:
      "Assisted law students at the circulation desk and handled inquiries for library services. Managed library materials, student accounts, and digital resources. Developed knowledge in library systems, organization, and record management.",
    techStack: ["Library Systems", "Customer Service", "Data Management"],
  },
  {
    yearRange: "2022",
    role: "Hackathon Participant",
    company: "HackGSU – Spudos (Bus Tracking System)",
    description:
      "Developed and coded a bus tracking system with a team of five to improve commuter safety and convenience. Integrated Google GPS tracking software to provide real-time bus location and speed. Gained experience in team management, analytical problem-solving, and software development.",
    techStack: ["Google GPS API", "JavaScript", "Software Development", "Problem-Solving"],
  },
  {
    yearRange: "2021",
    role: "Hackathon Participant",
    company: "UGAHacks6 – Beauty Light (Light Sensing System)",
    description:
      "Developed a JavaScript-based light-sensing system using ambient sensor API. Integrated Apple device sensors for real-world testing and accuracy. Enhanced skills in API integration, backend development, and software design.",
    techStack: ["JavaScript", "API Integration", "Backend Development"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Georgia State University",
    duration: "2021 - 2025",
    description:
   "Focused on software development, algorithms, and system design, with expertise in Java, Python, C++, JavaScript, and Flutter. Experienced in full-stack development, API integration, and database management."
  },
];


