
export const mockStats = {
  todayXp: 450,
  currentLevel: 12,
  lessonsCompleted: 48,
  projectsCompleted: 12,
  quizScore: 92,
  achievements: 8,
};

export const mockRecentActivity = [
  {
    id: 1,
    type: "lesson",
    title: "Completed HTML Forms",
    time: "2 min ago",
    xp: "+50 XP",
  },
  {
    id: 2,
    type: "quiz",
    title: "Earned 50 XP in CSS Grid",
    time: "10 min ago",
    xp: "+50 XP",
  },
  {
    id: 3,
    type: "achievement",
    title: "Unlocked 'Fast Learner' Badge",
    time: "Yesterday",
    xp: "+200 XP",
  },
];

export const mockLearningPaths = [
  {
    id: "frontend",
    title: "Frontend Developer",
    progress: 45,
    active: true,
    courses: 12,
    difficulty: "Intermediate",
    duration: "6 Months",
    xpReward: "12,000 XP"
  },
  {
    id: "backend",
    title: "Backend Developer",
    progress: 0,
    active: false,
    courses: 10,
    difficulty: "Advanced",
    duration: "8 Months",
    xpReward: "15,000 XP"
  },
  {
    id: "java",
    title: "Java Masterclass",
    progress: 0,
    active: false,
    courses: 8,
    difficulty: "Beginner",
    duration: "4 Months",
    xpReward: "8,000 XP"
  },
  {
    id: "python",
    title: "Python Data Science",
    progress: 0,
    active: false,
    courses: 15,
    difficulty: "Intermediate",
    duration: "7 Months",
    xpReward: "14,000 XP"
  },
  {
    id: "reactnative",
    title: "React Native Mobile",
    progress: 0,
    active: false,
    courses: 9,
    difficulty: "Advanced",
    duration: "5 Months",
    xpReward: "10,000 XP"
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    progress: 0,
    active: false,
    courses: 20,
    difficulty: "Advanced",
    duration: "10 Months",
    xpReward: "20,000 XP"
  },
];

export const mockCurrentLearning = {
  path: "Frontend Developer",
  module: "React Fundamentals",
  lesson: "Understanding Hooks",
  progress: 68,
  timeRemaining: "15 mins"
};

export const mockRightPanel = {
  dailyChallenge: {
    title: "Complete 3 Lessons",
    progress: 2,
    total: 3,
    reward: "100 XP"
  },
  quote: {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  leaderboardPreview: [
    { id: 1, name: "Sarah J.", xp: 5240, isCurrentUser: false },
    { id: 2, name: "Alex (You)", xp: 4250, isCurrentUser: true },
    { id: 3, name: "Mike T.", xp: 3900, isCurrentUser: false }
  ],
  upcomingUnlock: {
    title: "TypeScript Basics",
    requiredLevel: 15,
    currentLevel: 12
  }
};
