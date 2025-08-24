import {
  CodeXml,
  Globe,
  Database,
  Columns,
  Coins,
  Building2,
  Paintbrush,
  Package2,
  LockIcon,
} from "lucide-react";
const courses = [
  {
    id: 1,
    title: "Web Development",
    icon: <CodeXml className="w-4 h-4" />,
    iconColor: "gray",
    badge: "Hot",
    badges: [
      { text: "React", variant: "popular" },
      { text: "JavaScript", variant: "new" },
      { text: "Node", variant: "bestseller" },
    ],
    rating: "4.8",
    category: "Frontend Development",
    level: "Intermediate",
    description:
      "Master React hooks, state management, and component lifecycle. Build modern, scalable web applications with the most popular JavaScript library.",
    link: "",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    icon: <Globe className="w-4 h-4" />,
    iconColor: "purple",
    badge: "Trending",
    badges: [{ text: "Python", variant: "popular" }],
    rating: "4.9",
    category: "Data & AI",
    level: "Advanced",
    description:
      "Learn data analysis, visualization, and machine learning techniques to solve real-world problems using AI-driven solutions.",
    link: "",
  },
  {
    id: 3,
    title: "Business Management Essentials",
    icon: <Database className="w-4 h-4" />,
    iconColor: "green",
    badge: "New",
    badges: [
      { text: "Leadership", variant: "featured" },
      { text: "Premium", variant: "premium" },
    ],
    rating: "4.7",
    category: "Business",
    level: "Beginner",
    description:
      "Understand core management, leadership, and organizational strategies to lead teams and achieve business goals.",
    link: "",
  },
  {
    id: 4,
    title: "Digital Marketing & SEO Mastery",
    icon: <Columns className="w-4 h-4" />,
    iconColor: "orange",
    badge: "Popular",
    badges: [{ text: "Sells", variant: "new" }],
    rating: "4.6",
    category: "Marketing",
    level: "Intermediate",
    description:
      "Boost your brand presence through SEO, social media marketing, and targeted content creation strategies.",
    link: "",
  },
  {
    id: 5,
    title: "Economics for Decision-Making",
    icon: <Building2 className="w-4 h-4" />,
    iconColor: "blue",
    badges: [
      { text: "Leadership", variant: "bestseller" },
      { text: "Self Development", variant: "premium" },
    ],
    rating: "4.5",
    category: "Economics",
    level: "Beginner",
    description:
      "Grasp economic concepts, market forces, and policy effects to make better financial and business decisions.",
    link: "",
  },
  {
    id: 6,
    title: "Financial Analysis & Investment Strategies",
    icon: <Coins className="w-4 h-4" />,
    iconColor: "yellow",
    badge: "Top Rated",
    badges: [
      { text: "Investment", variant: "new" },
      { text: "Stock Market", variant: "featured" },
    ],

    rating: "4.9",
    category: "Finance",
    level: "Advanced",
    description:
      "Learn how to evaluate investments, analyze company performance, and create strategies for long-term wealth.",
    link: "",
  },
  {
    id: 7,
    title: "UI/UX Design Fundamentals",
    icon: <Paintbrush className="w-4 h-4" />,
    iconColor: "pink",
    badge: "Hot",
    badges: [
      { text: "UI Design", variant: "featured" },
      { text: "UX Research", variant: "premium" },
    ],
    rating: "4.8",
    category: "Design",
    level: "Beginner",
    description:
      "Create intuitive and visually appealing designs by mastering the principles of user interface and experience.",
    link: "",
  },
  {
    id: 8,
    title: "Production & Startup Growth",
    icon: <Package2 className="w-4 h-4" />,
    iconColor: "red",
    badge: "In Demand",
    badges: [
      { text: "Manufacturing", variant: "popular" },
      { text: "Startup", variant: "new" },
    ],
    rating: "4.7",
    category: "Business",
    level: "Intermediate",
    description:
      "Learn how to validate ideas, build products, attract customers, and scale a successful startup.",
    link: "",
  },
  {
    id: 9,
    title: "Cybersecurity Fundamentals",
    icon: <LockIcon className="w-4 h-4" />,
    iconColor: "teal",
    badge: "Essential",
    badges: [
      { text: "security", variant: "new" },
      { text: "cybersecurity", variant: "featured" },
    ],

    rating: "4.8",
    category: "Security",
    level: "Beginner",
    description:
      "Understand the basics of online security, threat prevention, and protecting systems from cyber attacks.",
    link: "",
  },
];

export default courses;
