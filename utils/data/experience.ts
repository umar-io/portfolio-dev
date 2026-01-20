export interface Skill {
  name: string;
}

export type PositionType =
  | "Co-op"
  | "Internship"
  | "Part-time"
  | "Full-time"
  | "Self-Employed"
  | "Contract";

export interface Position {
  role: string;
  type: PositionType;
  startDate: Date;
  endDate: Date | "present";
  location: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  location: string;
  skills: Skill[];
  logo?: string;
  currentPosition: Position;
  promotions?: Position[];
  category: "work" | "education";
  note?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Dfold",
    companyUrl: "",
    location: "Lagos, NG",
    currentPosition: {
      role: "PHP Developer",
      type: "Contract",
      startDate: new Date("2025-11-03"),
      endDate: "present",
      location: "Remote, NG",
    },
    skills: [
      { name: "PHP" },
      { name: "Wordpress" },
      { name: "SEO" },
      { name: "Elementor" },
    ],
    logo: "",
    category: "work",
  },
  {
    company: "03Developers",
    companyUrl: "",
    location: "Lagos, NG",
    currentPosition: {
      role: "Frontend Developer",
      type: "Full-time",
      startDate: new Date("2024-09-17"),
      endDate: new Date("2025-09-17"),
      location: "Remote, NG",
    },
    skills: [
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "Typescript" },
      { name: "Git" },
    ],
    logo: "",
    category: "work",
  },

  {
    company: "HNG",
    companyUrl: "hng.com.ng",
    location: "Lagos, NG",
    currentPosition: {
      role: "Frontend Developer",
      type: "Full-time",
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-08-01"),
      location: "Remote, NG",
    },
    skills: [
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "Typescript" },
      { name: "Git" },
    ],
    logo: "",
    category: "work",
  },
 
];
