
import busness   from "../../assets/imgs/busness.jpg";
import comp   from "../../assets/imgs/comp.png";
import fin from "../../assets/imgs/finance.jpg";
import eco from "../../assets/imgs/eco.jpg";
import Ui from "../../assets/imgs/UIUx.jpg";
import digm from "../../assets/imgs/Digm.jpg";
import cyber from "../../assets/imgs/cyber.jpg";
import fin2 from "../../assets/imgs/fin2.jpg";
import eco2 from "../../assets/imgs/eco2.jpg";

const DataOfCourse = [
  {
    image: `${busness}`,
    title: "Entrepreneurship Masterclass",
    content:
      "Learn business planning, fundraising, marketing, and scaling strategies.",
    rating: 4.8,
    reviewCount: 145,
    buttonText: "Know More",
    tags: ["Business", "Startup", "Management"],
    onButtonClick: () =>
      console.log("Entrepreneurship Masterclass - Button clicked!"),
    onCardClick: () =>
      console.log("Entrepreneurship Masterclass - Card clicked!"),
  },
  {
    image: `${comp}`,
    title: "Full Stack Web Development",
    content:
      "Master HTML, CSS, JavaScript, React, Node.js, and databases with projects.",
    rating: 4.9,
    reviewCount: 212,
    buttonText: "Know More",
    tags: ["IT", "Web Development", "Programming"],
    onButtonClick: () =>
      console.log("Full Stack Web Development - Button clicked!"),
    onCardClick: () =>
      console.log("Full Stack Web Development - Card clicked!"),
  },
  {
    image: `${fin}`,
    title: "Personal Finance & Investment",
    content:
      "Learn budgeting, saving, investing, and wealth-building strategies.",
    rating: 4.7,
    reviewCount: 88,
    buttonText: "Know More",
    tags: ["Finance", "Investment", "Wealth"],
    onButtonClick: () =>
      console.log("Personal Finance & Investment - Button clicked!"),
    onCardClick: () =>
      console.log("Personal Finance & Investment - Card clicked!"),
  },
  {
    image: `${eco}`,
    title: "Macroeconomics Explained",
    content:
      "Learn GDP, inflation, unemployment, and fiscal & monetary policy.",
    rating: 4.6,
    reviewCount: 67,
    buttonText: "Know More",
    tags: ["Economics", "Business", "Finance"],
    onButtonClick: () =>
      console.log("Macroeconomics Explained - Button clicked!"),
    onCardClick: () => console.log("Macroeconomics Explained - Card clicked!"),
  },
  {
    image: `${Ui}`,
    title: "UI/UX Design for Beginners",
    content:
      "Learn wireframing, prototyping, usability testing, and Figma skills.",
    rating: 4.8,
    reviewCount: 94,
    buttonText: "Know More",
    tags: ["UI/UX", "Design", "Figma"],
    onButtonClick: () =>
      console.log("UI/UX Design for Beginners - Button clicked!"),
    onCardClick: () =>
      console.log("UI/UX Design for Beginners - Card clicked!"),
  },
  {
    image: `${digm}`,
    title: "Digital Marketing & SEO",
    content: "Learn SEO, Google Ads, social media marketing, and analytics.",
    rating: 4.7,
    reviewCount: 123,
    buttonText: "Know More",
    tags: ["Marketing", "SEO", "Social Media"],
    onButtonClick: () =>
      console.log("Digital Marketing & SEO - Button clicked!"),
    onCardClick: () => console.log("Digital Marketing & SEO - Card clicked!"),
  },
  {
    image: `${cyber}`,
    title: "Cybersecurity Fundamentals",
    content:
      "Understand ethical hacking, vulnerabilities, and network security.",
    rating: 4.8,
    reviewCount: 101,
    price: "₹209",
    buttonText: "Enroll Now",
    tags: ["IT", "Security", "Networking"],
    onButtonClick: () =>
      console.log("Cybersecurity Fundamentals - Button clicked!"),
    onCardClick: () =>
      console.log("Cybersecurity Fundamentals - Card clicked!"),
  },
  {
    image: `${fin2}`,
    title: "Stock Market Trading",
    content:
      "Learn technical analysis, risk management, and market psychology.",
    rating: 4.7,
    reviewCount: 76,
    price: "₹249",
    buttonText: "Enroll Now",
    tags: ["Finance", "Stock Market", "Trading"],
    onButtonClick: () => console.log("Stock Market Trading - Button clicked!"),
    onCardClick: () => console.log("Stock Market Trading - Card clicked!"),
  },
  {
    image: `${eco2}`,
    title: "Global Economic Trends",
    content:
      "Understand trade, globalisation, economic indicators, and policies.",
    rating: 4.6,
    reviewCount: 59,
    price: "₹199",
    buttonText: "Enroll Now",
    tags: ["Economics", "Finance", "Business"],
    onButtonClick: () =>
      console.log("Global Economic Trends - Button clicked!"),
    onCardClick: () => console.log("Global Economic Trends - Card clicked!"),
  },
];

export default DataOfCourse;
