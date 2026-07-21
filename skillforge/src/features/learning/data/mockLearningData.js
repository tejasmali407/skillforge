export const learningPathData = {
  id: "frontend-developer",
  title: "Frontend Developer Path",
  description: "Master the building blocks of the web and learn to create stunning, interactive user interfaces.",
  totalXp: 12500,
  currentLevel: 5,
  completedLessons: 12,
  totalLessons: 45,
  streak: 7,
  modules: [
    {
      id: "html-basics",
      title: "HTML",
      description: "Learn the foundation of web pages with Semantic HTML.",
      iconName: "Code",
      difficulty: "Beginner",
      estimatedTime: "2 Hours",
      xpReward: 500,
      status: "completed", // completed, current, locked
      lessons: [
        { id: "html-1", title: "Introduction to HTML", completed: true },
        { id: "html-2", title: "Elements & Tags", completed: true },
        { id: "html-3", title: "Lists", completed: true },
        { id: "html-4", title: "Tables", completed: true },
        { id: "html-5", title: "Forms", completed: true },
        { id: "html-6", title: "Semantic HTML", completed: true },
        { id: "html-7", title: "Accessibility", completed: true },
        { id: "html-project", title: "Mini Project: Registration Form", completed: true, isProject: true },
      ]
    },
    {
      id: "css-basics",
      title: "CSS",
      description: "Style your websites with modern CSS techniques.",
      iconName: "Palette",
      difficulty: "Beginner",
      estimatedTime: "4 Hours",
      xpReward: 800,
      status: "current",
      lessons: [
        { id: "css-1", title: "Introduction to CSS", completed: true },
        { id: "css-2", title: "Selectors & Specificity", completed: true },
        { id: "css-3", title: "Box Model", completed: true },
        { id: "css-4", title: "Flexbox", completed: true },
        { id: "css-5", title: "Grid", completed: false },
        { id: "css-6", title: "Responsive Design", completed: false },
        { id: "css-project", title: "Mini Project: Landing Page", completed: false, isProject: true },
      ]
    },
    {
      id: "js-basics",
      title: "JavaScript",
      description: "Add logic and interactivity to your websites.",
      iconName: "Terminal",
      difficulty: "Intermediate",
      estimatedTime: "10 Hours",
      xpReward: 1500,
      status: "locked",
      lessons: [
        { id: "js-1", title: "Variables & Data Types", completed: false },
        { id: "js-2", title: "Functions", completed: false },
        { id: "js-3", title: "Arrays & Objects", completed: false },
        { id: "js-4", title: "DOM Manipulation", completed: false },
        { id: "js-5", title: "Async / Await", completed: false },
        { id: "js-project", title: "Mini Project: Todo App", completed: false, isProject: true },
      ]
    },
    {
      id: "react-basics",
      title: "React (Coming Soon)",
      description: "Build robust single-page applications.",
      iconName: "Atom",
      difficulty: "Advanced",
      estimatedTime: "15 Hours",
      xpReward: 2500,
      status: "locked",
      lessons: [
        { id: "react-1", title: "Components", completed: false },
        { id: "react-2", title: "State & Props", completed: false },
        { id: "react-3", title: "Hooks", completed: false },
      ]
    }
  ]
};

export const comingSoonPaths = [
  { id: "backend", title: "Backend Developer", iconName: "Server", description: "Node.js, Express, and Databases." },
  { id: "python", title: "Python Data Science", iconName: "ChartBar", description: "Pandas, NumPy, and Data Viz." },
  { id: "java", title: "Java Masterclass", iconName: "Coffee", description: "Object-oriented programming." },
  { id: "ai", title: "AI & Machine Learning", iconName: "Brain", description: "Build intelligent systems." },
];
