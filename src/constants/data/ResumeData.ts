import type { personalData } from "@/types/ResumeDataType";

export const personal_curriculumn_vitae: personalData = {
  first_name: "Sok",
  last_name: "Sovannarith",
  address: "Kouk Khleang, Sen Sok, Phnom Penh, Cambodia.",
  telephone: "016 302 954",
  email: "soksovannarithx@gmail.com",
  about_me:
    "Frontend Developer | Computer Science Graduate (RUPP). Passionate about transforming complex ideas into functional, aesthetic digital experiences. Proven ability to implement modern JS frameworks and responsive design to deliver high-impact, user-centric web solutions.",
  public_link: [
    { name: "GitHub", url: "https://github.com/RithEvilx" },
    { name: "Linkedin", url: "https://linkedin.com/in/sok-sovannarith" },
    { name: "Telegram", url: "https://t.me/rithevil" },
  ],
  work_experience: [
    {
      company: "UDAYA Technology",
      position: "Frontend Developer",
      duration: "Mar 2025 - Present",
      responsibility: [
        "Led the frontend development of a scalable hotel booking platform using React.js, TypeScript, and Chakra UI (v3), focusing on high-performance UI/UX.",
        "Integrated secure real-time payment processing via ABA Bank API, enabling seamless online transactions for end-users.",
        "Engineered the company's internal system, building complex internal management interfaces for resource monitoring and control.",
        "Optimized application performance and data synchronization using TanStack React Query for efficient API communication and caching.",
        "Mastered modern UI frameworks, transitioning projects from Chakra UI v2 to v3 while maintaining accessibility and responsive standards.",
        "Collaborated in Agile workflows using Git/GitHub for version control, ensuring smooth production deployments and bug-free releases.",
      ],
    },
    {
      company: "Cambodia Scholarship Center",
      position: "Web Developer Intern",
      duration: "Dec 2024 - Feb 2025",
      responsibility: [
        "Maintained a custom, code-driven CMS (WordPress-like) and published fresh content daily.",
        "Built and updated content templates/components (HTML/JSX), ensuring brand consistency and accessibility.",
        "Performed on-page SEO: meta tags, structured data (JSON-LD), clean URLs, and internal linking.",
        "Fixed UI bugs and layout regressions, verified cross-browser behavior (Chrome, Safari, Firefox, Edge).",
      ],
    },
  ],
  education: [
    { school: "ROYAL UNIVERSITY OF PHNOM PENH", degree: "Bachelor Degree in Computer Science", duration: "2020 - 2024" },
    { school: "BELTEI INTERNATIONAL SCHOOL", degree: "High School Diploma", duration: "2017 - 2020" },
  ],
  training: [
    // { school: "", degree: "", duration: "" }
  ],
  technical_skills: [
    { name: "React", value: 75 },
    { name: "Javascript", value: 80 },
    { name: "Typescript", value: 65 },
    { name: "GitHub", value: 70 },
    { name: "Java", value: 50 },
    { name: "SQL", value: 50 },
  ],
  soft_skils: [
    { name: "Problem solving", value: 75 },
    { name: "Critical thinking", value: 70 },
    { name: "Adaptability", value: 80 },
    { name: "Communication", value: 50 },
  ],
  languages: [
    { name: "Khmer", value: 100 },
    { name: "English", value: 60 },
  ],
  references: [],
  hobbies: ["Exploring emerging technologies", "Continuous learning and skill development", "Listening to music"],
};
