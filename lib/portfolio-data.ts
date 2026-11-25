
export const profileData = {
  name: 'Ashwani Pal',
  title: 'Java Backend Developer',
  avatar: '/myimg2.png',
  email: 'ashwani56740@gmail.com',
  phone: '9424497754',
  birthday: 'Oct 20, 2004',
  location: 'Delhi NCR, India',

  social: {
    github: 'https://github.com/account',
    Linkedin: 'https://www.linkedin.com/in/ashwanipal7',
    instagram: 'https://instagram.com/Ashwan812',
  },
};

export const aboutData = {
  description: [
    "Java Backend Developer with hands-on experience building RESTful APIs and backend applications using Java, Spring Boot, Spring MVC, Spring Data JPA, and Hibernate. Completed a software development internship and built backend projects covering API Gateway architecture, microservices, database integration, and API management. Strong foundation in OOP, DBMS, data structures and algorithms, and problem-solving.",
  ],

  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description:
        'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Zap',
      title: 'Backend Development',
      description:
        'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    {
      icon: 'CloudCog',
      title: 'DevOps Engineering',
      description:
        'Currently building DevOps skills through hands-on work with Docker, CI/CD pipelines, cloud deployment, and application monitoring.',
      status: 'Ongoing',
    },
    {
      icon: 'Rocket',
      title: 'Forward Deployed Engineer',
      description:
        'Working directly with users to understand real-world needs, rapidly prototype solutions, and deploy reliable software in production environments.',
      status: 'Ongoing',
    },
    {
      icon: 'BrainCircuit',
      title: 'AI Engineering',
      description:
        'Exploring AI engineering by integrating AI capabilities into applications and connecting AI services with backend systems.',
      status: 'Ongoing',
    },
  ],

  highlights: [
    {
      title: 'Java Backend Development',
      description:
        'Hands-on experience building REST APIs and backend applications with Java, Spring Boot, JPA/Hibernate, and MySQL.',
    },
    {
      title: 'Project-Based Experience',
      description:
        'Built projects including a Gym Management System, Student CRM, and Multi-Vendor Course Platform.',
    },
    {
      title: 'Currently Building',
      description:
        'Developing GateKeeper, a custom API Gateway with request routing, rate limiting, idempotency, and Kafka-based analytics.',
    },
    {
      title: 'Continuous Learning',
      description:
        'Growing skills in DevOps and AI engineering through ongoing learning and hands-on practice.',
    },
  ],

  technologies: [
    { name: 'Java', logo: '/java.png' },
    { name: 'Spring Boot', logo: '/spring-boot.png' },
    { name: 'Microservices', logo: '' },
    { name: 'MySQL', logo: '/mysql.png' },
    { name: 'MongoDB', logo: '/mongodb.png' },
    { name: 'Apache Kafka', logo: '/kafka.png' },
    { name: 'React', logo: '/react.png' },
  ],

  
education: [
  {
    title: 'B.Tech in Computer Science Engineering',
    institution: 'SAGE University, Bhopal',
    period: '2022 — 2026',
    description:
      'Graduated in 2026 with a Bachelor of Technology in Computer Science Engineering from SAGE University, Bhopal. Built a strong foundation in object-oriented programming, data structures and algorithms, database management systems, and software engineering, while developing practical skills in Java, Spring Boot, RESTful APIs, and microservices through coursework and hands-on projects.',
  },
],


  
experience: [
  {
    title: 'Software Development Intern',
    company: 'Naman Digital Pvt. Ltd.',
    period: 'Jul 2026 — Oct 2026',
    description:
      'Worked on backend application development using Java and Spring Boot. Developed and tested RESTful APIs, implemented backend modules, and integrated application components with MySQL databases. Gained practical experience in API integration, database operations, debugging, and writing clean, maintainable code while following software development best practices.',
  },
],
};

export const portfolioData = {
  categories: ['all', 'web development', 'applications'],

  projects: [
    {
      title: 'GateKeeper – Custom API Gateway',
      category: 'web development',
      description:
        'Ongoing backend-focused API Gateway project built with Spring Boot and microservices. Includes request routing, reverse proxying, rate limiting, idempotency, API management, and Kafka-based asynchronous analytics.',
      tech: [
        'Java',
        'Spring Boot',
        'Microservices',
        'Kafka',
        'MySQL',
        'MongoDB',
      ],
      image: '/gatekeeper.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Gym Management System',
      category: 'web development',
      description:
        'Full-stack gym management application with a React.js frontend and Spring Boot microservices backend. Includes REST APIs, MySQL database integration, and responsive user interfaces. Currently used by a gym owner.',
      tech: [
        'Java',
        'Spring Boot',
        'Microservices',
        'MySQL',
        'React.js',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      image: '/gym.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Student CRM System',
      category: 'web development',
      description:
        'Full-stack CRM system for managing student data with Admin & User modules.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      image: '/crm.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Multi-Vendor Course Platform',
      category: 'web development',
      description:
        'Microservices-based marketplace platform with authentication and course management.',
      tech: ['Spring Boot', 'Spring Cloud', 'React', 'MySQL'],
      image: '/course.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Weather Web Application',
      category: 'applications',
      description:
        'Real-time weather app using REST APIs to display temperature, humidity, and conditions.',
      tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
      image: '/weather.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Quiz Application',
      category: 'applications',
      description:
        'Desktop quiz application with login system, MCQs, and score tracking.',
      tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
      image: '/quiz.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },
  ],
};

export const resumeData = {
  education: aboutData.education,
  experience: aboutData.experience,
};

export const contactData = {
  email: 'ashwani56740@gmail.com',
  phone: '9424497754',
  location: 'Delhi NCR, India',

  mapEmbedUrl:
    'https://www.google.com/maps?q=Delhi%20NCR&output=embed',
};
