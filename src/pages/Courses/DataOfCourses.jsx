import busness from "../../assets/imgs/busness.jpg";
import comp from "../../assets/imgs/comp.png";
import fin from "../../assets/imgs/finance.jpg";
import eco from "../../assets/imgs/eco.jpg";
import Ui from "../../assets/imgs/UIUx.jpg";
import digm from "../../assets/imgs/Digm.jpg";
import cyber from "../../assets/imgs/cyber.jpg";
import fin2 from "../../assets/imgs/fin2.jpg";
import eco2 from "../../assets/imgs/eco2.jpg";

const DataOfCourse = [
  {
    id: 1,
    image: `${busness}`,
    category: "Bussness",
    title: "Entrepreneurship Masterclass",
    content:
      "Learn business planning, fundraising, marketing, and scaling strategies.",
    rating: 4.8,
    reviewCount: 145,
    buttonText: "Watch Video",
    tags: ["Business", "Startup", "Management"],
    videoUrl:
      "https://drive.google.com/file/d/1yU31vnohzVSZXr97Mkbjex2ITl5v8xRx/view?usp=drivesdk",
    onCardClick: () =>
      console.log("Entrepreneurship Masterclass - Card clicked!"),
  },
  {
    id: 2,
    image: `${comp}`,
    category: "Programing",
    title: "Full Stack Web Development",
    content:
      "Master HTML, CSS, JavaScript, React, Node.js, and databases with projects.",
    rating: 4.9,
    reviewCount: 212,
    buttonText: "Watch Video",
    tags: ["IT", "Web Development", "Programming"],
    videoUrl: "https://www.youtube.com/embed/VfGW0Qiy2I0",
    onCardClick: () =>
      console.log("Full Stack Web Development - Card clicked!"),
  },
  {
    id: 3,
    image: `${fin}`,
    category: "Finance",
    title: "Personal Finance & Investment",
    content:
      "Learn budgeting, saving, investing, and wealth-building strategies.",
    rating: 4.7,
    reviewCount: 88,
    buttonText: "Watch Video",
    tags: ["Finance", "Investment", "Wealth"],
    videoUrl: "https://www.youtube.com/embed/HQzoZfc3GwQ",
    onCardClick: () =>
      console.log("Personal Finance & Investment - Card clicked!"),
  },
  {
    id: 4,
    image: `${eco}`,
    category: "Economics",
    title: "Macroeconomics Explained",
    content:
      "Learn GDP, inflation, unemployment, and fiscal & monetary policy.",
    rating: 4.6,
    reviewCount: 67,
    buttonText: "Watch Video",
    tags: ["Economics", "Business", "Finance"],
    videoUrl: "https://www.youtube.com/embed/d8uTB5XorBw",
    onCardClick: () => console.log("Macroeconomics Explained - Card clicked!"),
  },
  {
    id: 5,
    image: `${Ui}`,
    category: "Designing",
    title: "UI/UX Design for Beginners",
    content:
      "Learn wireframing, prototyping, usability testing, and Figma skills.",
    rating: 4.8,
    reviewCount: 94,
    buttonText: "Watch Video",
    tags: ["UI/UX", "Design", "Figma"],
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    onCardClick: () =>
      console.log("UI/UX Design for Beginners - Card clicked!"),
  },
  {
    id: 6,
    image: `${digm}`,
    category: "Bussness",
    title: "Digital Marketing & SEO",
    content: "Learn SEO, Google Ads, social media marketing, and analytics.",
    rating: 4.7,
    reviewCount: 123,
    buttonText: "Watch Video",
    tags: ["Marketing", "SEO", "Social Media"],
    videoUrl: "https://www.youtube.com/embed/bixR-KIJKYM",
    onCardClick: () => console.log("Digital Marketing & SEO - Card clicked!"),
  },
  {
    id: 7,
    image: `${cyber}`,
    category: "Programing",
    title: "Cybersecurity Fundamentals",
    content:
      "Understand ethical hacking, vulnerabilities, and network security.",
    rating: 4.8,
    reviewCount: 101,
    price: "₹209",
    buttonText: "Watch Video",
    tags: ["IT", "Security", "Networking"],
    videoUrl: "https://www.youtube.com/embed/U_P23SqJaDc",
    onCardClick: () =>
      console.log("Cybersecurity Fundamentals - Card clicked!"),
  },
  {
    id: 8,
    image: `${fin2}`,
    category: "Finance",
    title: "Stock Market Trading",
    content:
      "Learn technical analysis, risk management, and market psychology.",
    rating: 4.7,
    reviewCount: 76,
    price: "₹249",
    buttonText: "Watch Video",
    tags: ["Finance", "Stock Market", "Trading"],
    videoUrl: "https://www.youtube.com/embed/p7HKvqRI_Bo",
    onCardClick: () => console.log("Stock Market Trading - Card clicked!"),
  },
  {
    id: 9,
    image: `${eco2}`,
    category: "Economics",
    title: "Global Economic Trends",
    content:
      "Understand trade, globalisation, economic indicators, and policies.",
    rating: 4.6,
    reviewCount: 59,
    price: "₹199",
    buttonText: "Watch Video",
    tags: ["Economics", "Finance", "Business"],
    videoUrl: "https://www.youtube.com/embed/jILgxeNBK_8",
    onCardClick: () => console.log("Global Economic Trends - Card clicked!"),
  },
];

export default DataOfCourse;
