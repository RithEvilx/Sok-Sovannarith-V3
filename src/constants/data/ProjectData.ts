import type { ProjectDataType } from "@/types/ProjectDataType";

export const ProjectData: ProjectDataType[] = [
  {
    image: "",
    name: "Romdoul Kravanh Resort Booking System",
    description:
      "A specialized booking platform developed to automate guest reservations for a resort client. I conceptualized the UI and built the frontend to integrate seamlessly with the client's existing internal management system. By implementing a real-time API sync and ABA Bank payments, I transformed a manual administrative task into an automated, user-friendly digital experience that increased operational efficiency and customer accessibility.",
    stack: ["React", "TypeScript", "Chakra UI", "Tanstack Query"],
    github: "",
    demo: "",
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
];
