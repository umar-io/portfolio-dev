export interface Technology {
  name: string;
}

export const statusConfig = {
  active: {
    label: "Active",
    className:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  archived: {
    label: "Archived",
    className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
  inactive: {
    label: "Inactive",
    className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  },

  in_progress: {
    label: "In Development",
    className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  },
} as const;

export type StatusType = keyof typeof statusConfig;

export interface ProjectStatus {
  type: StatusType;
  label?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: ProjectStatus;
  category: "web" | "mobile" | "api" | "tool" | "game" | "other" | "saas";
}

export const projects: ProjectItem[] = [
  /* 
 
  */
  {
    name: "Leezign",
    description:
      "A full-stack Next.js application designed to automate the generation and management of residential and commercial lease agreements.",
    technologies: [
      { name: "Next.js" },
      { name: "Postgres" },
      { name: "TypeScript" },
      { name: "Drizzle" },
      { name: "Groq AI" },
    ],
    liveUrl: "https://leezign.vercel.app/",
    image: "/images/leezign.png",
    status: {
      type: "in_progress",
      label: "Active Maintainer",
    },
    category: "saas",
  },
];
