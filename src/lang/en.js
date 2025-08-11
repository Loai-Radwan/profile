import skillsData from "../data";
export default {
  lang: "en",
  nav: {
    home: "Home",
    projects: "Projects",
    contact: "Contact Me",
    darkMode: "Dark Mode",
  },
  hero: {
    greeting: "Hello, I am ",
    name: "Loai",
    words: [
      "Front-End Developer",
      "Creative Coder",
      "Fast Learner",
      "Passionate Programmer",
      "Problem Solver",
      "Lifelong Learner",
    ],
    getResume: "Get Resume",
    getToKnowMe: "Get To Know Me",
    intro:
      "I'm a self-taught front-end developer with a strong passion for coding and creativity. At just 17 years old, I'm already building responsive, interactive websites using HTML, CSS, JavaScript, and modern tools like React, Tailwind CSS, Sass, and Bootstrap.",
    mission:
      "Turning ideas into real projects—whether it's designing a smooth user interface, adding animations, or solving problems with code. I'm currently on a journey to become a full stack developer, and I'm always learning new technologies and improving my skills through online courses, documentation, and hands-on practice.",
    hobbies:
      "Outside of coding, I enjoy experimenting with design, helping others with tech, and contributing to personal and creative web projects.",
  },
  skills: {
    title: "Skills",
    currentlyLearning: "Currently Learning",
    skillsData,
  },
  footer: {
    quickLinks: "Quick Links",
    copyright: "All rights reserved",
    quote:
      "Always learning, always building — exploring modern web technologies one project at a time.",
  },
  contact: {
    inputName: "Enter Your Name",
    inputEmail: "Enter Your Email",
    inputMessage: "Enter Your Message",
    sendMessage: "Send Message",
    respondEmail: (name) => {
      return `Hi ${name} 

      Thank you for reaching out through my website. I’ve received your message and will get back to you as soon as possible.

      Looking forward to connecting with you!

      Best regards,
      Loai Alshujaa

      `;
    },
    invalidName: "Name must be at least 3 characters long.",
    invalidEmail: "Please enter a valid email address.",
    invalidMessage: "Message must be at least 10 characters long.",
    title: "We’ve received your message",
  },
  projects: {
    view: "View",
    github: "Github",
  },
};
