import type { ProjectDataType } from "@/types/ProjectDataType";
import { CameraStoreImg, CarShopImg, FacebookCloneImg, FirstPortfolioImg, HoverCardEffectImg, ImageSliderImg, RomdoulKravanhResortImg } from "../app";

export const ProjectData: ProjectDataType[] = [
  // Romdoul Kravanh Resort
  {
    id: 1,
    image: RomdoulKravanhResortImg,
    name: "Romdoul Kravanh Resort",
    date: "July 2025 - Oct 2025",
    description:
      "A specialized booking platform developed to automate guest reservations for a resort client. I conceptualized the UI and built the frontend to integrate seamlessly with the client's existing internal management system. By implementing a real-time API sync and ABA Bank payments, I transformed a manual administrative task into an automated, user-friendly digital experience that increased operational efficiency and customer accessibility.",
    stack: ["React", "TypeScript", "Chakra UI", "Tanstack Query"],
    demo: "https://www.romdoul-kravanh.com",
    story:
      "I developed a custom, high-sync booking interface for a resort client already utilizing a private SBU management system. The primary challenge was bridging the gap between a manual check-in process and a digital-first customer experience. By architecting a modern frontend that communicates directly with the client's internal backend, I successfully automated the entire booking pipeline, eliminating the need for manual data entry by resort staff.",
    keyContributions: [
      {
        title: "End-to-End UI/UX Design",
        task: "Designed a minimalist, mobile-first interface from scratch—without existing prototypes—prioritizing a smooth user flow for tech-savvy travelers.",
      },
      {
        title: "System Automation",
        task: "Engineered the frontend logic to trigger real-time updates in the client's internal management system, ensuring that every digital reservation is instantly recorded and synced.",
      },
      {
        title: "Secure Payment Integration",
        task: "Integrated the ABA Bank Payment Gateway, implementing a secure transaction flow that protects both the client and the customer during the checkout process.",
      },
      {
        title: "Operational Efficiency",
        task: "Successfully transitioned the client from a manual booking model to a 24/7 automated 'E-commerce style' service, allowing guests to book rooms from anywhere in the world.",
      },
    ],
  },
  // Hover Card Effect
  {
    id: 2,
    image: HoverCardEffectImg,
    name: "Hover Card Effect",
    date: "June 2025",
    description:
      "A technical exploration of modern CSS capabilities. This project demonstrates the power of advanced selectors like :has() and sibling combinators to create interactive UI elements without relying on JavaScript for state management.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/HoverCardEffect",
    github: "https://github.com/RithEvilx/HoverCardEffect",
    story:
      "I wanted to push the boundaries of 'CSS-only' interactivity. By utilizing the :has() pseudo-class, I was able to create parent-aware styling that previously required complex JS logic.",
    keyContributions: [
      {
        title: "Advanced Selectors",
        task: "Implemented complex UI logic using the adjacent sibling combinator (+) and the universal selector (*).",
      },
      {
        title: "Parent-State UI",
        task: "Used the :has() pseudo-class to toggle styles based on child element hover states.",
      },
    ],
  },
  // Image Slider
  {
    id: 3,
    image: ImageSliderImg,
    name: "Image Slider",
    date: "June 2025",
    description:
      "A smooth, responsive image slider focusing on fluid CSS animations and layout transitions to enhance user engagement through visual storytelling.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/ImageSlider",
    github: "https://github.com/RithEvilx/ImageSlider",
    story: "The goal was to create a lightweight slider that feels native and responsive across all devices using pure CSS transition properties.",
    keyContributions: [
      {
        title: "Animation Optimization",
        task: "Created keyframe animations for smooth transitions between image states.",
      },
    ],
  },
  // First Portfolio
  {
    id: 4,
    image: FirstPortfolioImg,
    name: "First Portfolio",
    date: "May 2024",
    description:
      "A personal milestone project created after my Year 4 exams. This portfolio serves as a comprehensive showcase of my academic journey, technical skills, and initial professional experiences.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/soksovannarith",
    github: "https://github.com/RithEvilx/soksovannarith",
    story:
      "After finishing my university exams, I built this to bridge the gap between student life and professional career, organizing my work into a clean, readable digital resume.",
    keyContributions: [
      {
        title: "Information Architecture",
        task: "Structured multi-section content to highlight education and skills effectively.",
      },
    ],
  },
  // Camera Store
  {
    id: 5,
    image: CameraStoreImg,
    name: "Camera Store",
    date: "May 2023",
    description:
      "My first full-page web project following the completion of an HTML short course at ANT Technology Training Center. It focuses on semantic HTML and foundational layout design.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/sovannarith-camera-store",
    github: "https://github.com/RithEvilx/sovannarith-camera-store",
    story:
      "This was my 'hello world' into structured web development. I applied everything I learned during my training at ANT to build a functional retail-style landing page.",
    keyContributions: [
      {
        title: "Semantic Structure",
        task: "Used proper HTML5 tags to ensure a SEO-friendly and accessible document structure.",
      },
    ],
  },
  // Car Shop
  {
    id: 6,
    image: CarShopImg,
    name: "Car Shop",
    date: "March 2023",
    description:
      "A focused development task from my time at ANT Technology Training Center, designed to practice grid and flexbox layouts within a commercial context.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/Shop-Car",
    github: "https://github.com/RithEvilx/Shop-Car",
    story: "Building this helped me master the alignment and spacing challenges often found in e-commerce product grids.",
    keyContributions: [
      {
        title: "Layout Practice",
        task: "Implemented basic grid layouts to display car listings and specifications.",
      },
    ],
  },
  // Facebook Clone
  {
    id: 7,
    image: FacebookCloneImg,
    name: "Facebook Clone",
    date: "January 2023",
    description:
      "A structural clone of the Facebook homepage, focusing on replicating a complex, multi-column layout and mimicking a familiar user interface.",
    stack: ["HTML", "CSS"],
    demo: "https://rithevilx.github.io/Facebook-Homepage/",
    github: "https://github.com/RithEvilx/Facebook-Homepage",
    story:
      "This was my first attempt at reverse-engineering a major platform's UI to understand how professional websites handle complex navigation and sidebars.",
    keyContributions: [
      {
        title: "UI Re-engineering",
        task: "Analyzed and replicated the visual hierarchy and component placement of a world-class social platform.",
      },
    ],
  },
];
