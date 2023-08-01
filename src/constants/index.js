import {
  mobile,
  
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,

  git,
  
  taskManager,
  linkedinImage,
  
  threejs,
  java,
  nit,
  newton,
  school,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
 
  {
    title: "Java Developer",
    icon: java,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Java",
    icon:  java,
  }
  
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Newton School",
    icon: newton,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Full Stack Development along with Data Structure and problem-solving skills.",
      "Technical Stack Learnt: HTML, CSS, JavaScript, React.js,Redux.js.",
      "Worked on various projects and given many contests.",
    ],
  },
  {
    title: "National Institute of Technology, Silchar",
    company_name: "Mechanical Engineer",
    icon: nit,
    iconBg: "#383E56",
    date: "July 2016 - July 2020",
    points: [
      
    ],
  },
  {
    title: "Bal Vikas Inter College Babarpur",
    company_name: "Higher Secondary ",
    icon: school,
    iconBg: "#E6DEDD",
    date: " July 2015",
    points: [
      
    ],
  },
  {
    title: "BRSD Inter College Babarpur",
    company_name: "Secondary",
    icon: school,
    iconBg: "#383E56",
    date: "July 2012",
    points: [
     
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Niharika",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Kunal Verma",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aditi Sharma",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Linkedin Clone",
    description:
      "A LinkedIn clone with added functionality including login/logout  allowing users to connect and engage with their professional network.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: linkedinImage,
    source_code_link: "https://github.com/tripathiprachi18/LinkedIn-Clone---React-Project---e8mzmi7tf2cv",
  },
  {
    name: "Task Manager",
    description:
      "Created an Task Manager website in which there is an input option with which we can add new task and could be dragged as per the status and later on edit or delete.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: taskManager,
    source_code_link: "https://github.com/tripathiprachi18/TaskManager",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
