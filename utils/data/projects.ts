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
  /** When set, the project links to a case-study page at /projects/[slug]. */
  slug?: string;
  description: string;
  /** Longer case-study copy, one paragraph per array entry. */
  longDescription?: string[];
  highlights?: string[];
  /** Paths under /public, e.g. "/images/salesjinja/dashboard.png". */
  screenshots?: string[];
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
    name: "SalesJinja",
    slug: "salesjinja",
    description:
      "A multi-tenant CRM/ERP platform for direct-sales businesses — order management, inventory and waybill tracking, staff commissions, and WooCommerce/Elementor integrations. Built and shipped for a paying client.",
    longDescription: [
      "SalesJinja is a CRM/ERP built for businesses that sell through a network of agents rather than a single storefront — think distributors and direct-sales teams who need to track stock, orders, and commissions across many people at once.",
      "It covers the full order lifecycle: leads come in through WooCommerce and Elementor webhooks, get turned into orders, and are tracked through delivery — with stale orders automatically escalated to a follow-up agent so nothing sits untouched. Inventory is tracked per agent, including stock handed out, sold, returned, and faulty units, with waybills generated for each shipment.",
      "Staff access is role-based (owner, staff, follow-up agent), and each role sees a different slice of the same data — including a commissions view for sales staff.",
    ],
    highlights: [
      "Order management with automatic stale-order escalation to a follow-up agent",
      "Per-agent inventory tracking — stock allocation, faulty returns, waybill generation",
      "Role-based access control with a dedicated commissions view for sales staff",
      "WooCommerce and Elementor webhook integrations for lead capture",
    ],
    screenshots: [
      "https://res.cloudinary.com/dogfl61yd/image/upload/v1783474288/1_rgos3f.png",
      "https://res.cloudinary.com/dogfl61yd/image/upload/v1783474287/2_bgz2jp.png",
      "https://res.cloudinary.com/dogfl61yd/image/upload/v1783474287/2-sub_rieozq.png",
      "https://res.cloudinary.com/dogfl61yd/image/upload/v1783474287/3_kgn4pq.png",
      "https://res.cloudinary.com/dogfl61yd/image/upload/v1783474288/3-sub_cvoafg.png",
    ],
    technologies: [
      { name: "FastAPI" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Docker" },
    ],
    liveUrl: "https://app.salesjinja.com",
    image:"https://salesjinja.com/logo.png",
    status: {
      type: "active",
    },
    category: "saas",
  },
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
