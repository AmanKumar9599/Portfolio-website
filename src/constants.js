// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import oracle from './assets/tech_logo/oracle-sql.jpg';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import gla from './assets/company_logo/GLA_University_logo.png';
import w3 from './assets/company_logo/w3grads_logo.jpeg';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import kmps from './assets/education_logo/kmps.jpg';

// Project Section Logo's
import chat from './assets/work_logo/chat.png';
import guess from './assets/work_logo/guess.png';
import game from './assets/work_logo/game.png';
import gf from './assets/work_logo/gf.png';
import cstm from './assets/work_logo/cstm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Oracle', logo: oracle},
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gla,
      role: "Student Developer",
      company: "GLA University",
      date: "August 2024 - Present",
      desc: "Developed multiple full-stack real-world applications using the MERN stack. Optimized backend APIs to improve performance and response times. Implemented secure authentication using JWT and bcrypt to strengthen data protection and application security",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: w3,
      role: "Competitive Programming Trainee",
      company: "W3 Grads",
      date: "June 2024 - July 2024",
      desc: "Solved 150+ algorithmic challenges, ranking in the top 5%. Enhanced problem-solving speed, achieving over 80% accuracy in coding competitions. Designed optimized solutions, reducing execution time by up to 50%.",
      skills: [
        "Java",
        "DSA",
        "Algorithm",
        "Problem Solving",
        "Competitive Programming",
        
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "August 2022 - July 2026",
      grade: "8.77 CGPA",
      desc: "I have completed my B.Tech in Computer Science from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: kmps,
      school: "Kanha Makhan Public School, Mathura",
      date: "April 2021 - March 2022",
      grade: "92.8%",
      desc: "I completed my Class 12th (CBSE - PCM) from Kanha Makhan Public School, Mathura. During this period, I studied core subjects like Physics, Chemistry, and Mathematics, which strengthened my analytical and problem-solving skills.",
      degree: "CBSE (XII) - PCM",
    },
    {
      id: 2,
      img: kmps,
      school: "Kanha Makhan Public School, Mathura",
      date: "Apr 2019 - March 2020",
      grade: "94.4%",
      desc: "I completed my Class 10th (CBSE) from Kanha Makhan Public School, Mathura. This phase helped me build a strong foundation in subjects like Mathematics, Science, and English, and developed my discipline, curiosity, and interest in logical thinking.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Chat Application",
      description:
        "Developed a real-time chat application using the MERN stack with a focus on security and user experience. Integrated JWT authentication with HTTP-only cookies to securely manage user login, logout, and access to protected routes. Implemented user-to-user messaging with support for both text and image sharing. Used Socket.IO to enable real-time communication and online status tracking, allowing users to see who is currently active. Ensured smooth message flow and state updates across all connected clients.",
      image: chat,
      tags: ["React JS","Express Js", "Node Js", "MongoDB", "Socket.io"],
      github: "https://github.com/AmanKumar9599/Chat-Application",
      webapp: "https://fabulous-sunburst-24e987.netlify.app/",
    },
    
    {
      id: 2,
      title: "Customer Support Ticketing System",
      description:
        "Led a team in building a full-stack Customer Support Ticketing System using React, Node.js, Express, and MongoDB. The application allows users to raise support tickets and enables admins and agents to manage and resolve them efficiently. Implemented secure authentication and role-based authorization using JWT and bcrypt to control access between users, agents, and admins. Designed and developed responsive login, signup, and home pages in React with dynamic error handling to ensure a smooth user experience.",
      image: cstm,
      tags: ["React JS","Express Js", "Node Js", "MongoDB", "Socket.io"],
      github: "https://github.com/AmanKumar9599/Customer-Support-Ticketing-System",
    },
    {
      id: 3,
      title: "Birthday Date Guesser",
      description:
        "Created an interactive web-based game using HTML, CSS, and JavaScript that guesses the user’s birthday through a series of logical questions. Designed a user-friendly interface to make the experience engaging and accessible. Implemented optimized JavaScript logic to accurately determine the birth date based on the user's responses, ensuring both performance and accuracy.",
      image: guess,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AmanKumar9599/birthday",
      webapp: "https://amankumar9599.github.io/birthday/",
    },
    {
      id: 1,
      title: "Gourmet Fusion",
      description:
        "Built a responsive hotel website to showcase its food menu, top offerings, and location details. The website allows users to explore the complete menu card with categorized items and pricing. It also integrates an interactive map feature to display the hotel’s location, helping users navigate easily. The project focuses on providing a clean, user-friendly interface for better customer engagement and accessibility.",
      image: gf,
      tags: ["React JS", "CSS"],
      github: "https://github.com/AmanKumar9599/TBPPP-Group-12",
      webapp: "https://btechdhaba.vercel.app/",
    },
    {
      id: 4,
      title: "Mind Spark",
      description:
        "Developed MindSpark, an interactive memory game using HTML, CSS, and JavaScript. The game challenges users to match pairs of cards, enhancing concentration and recall through engaging gameplay.",
      image: game,
      tags: ["HTML", "CSS", "JavaScript" ],
      github: "https://github.com/AmanKumar9599/MindSpark",
      webapp: "https://amankumar9599.github.io/MindSpark/",
    },
    
    
  ];  