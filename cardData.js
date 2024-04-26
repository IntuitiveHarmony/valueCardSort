const cards = [
  { id: 1, value: "Acceptance", description: "to be accepted as I am" },
  {
    id: 2,
    value: "Accuracy",
    description: "to be accurate in my opinions and beliefs",
  },
  {
    id: 3,
    value: "Achievement",
    description: "to have important accomplishments",
  },
  {
    id: 4,
    value: "Adventure",
    description: "to have new and exciting experiences",
  },
  {
    id: 5,
    value: "Attractiveness",
    description: "to be physically attractive",
  },
  {
    id: 6,
    value: "Authority",
    description: "to be in charge of and responsible for others",
  },
  {
    id: 7,
    value: "Autonomy",
    description: "to be self-determined and independent",
  },
  {
    id: 8,
    value: "Beauty",
    description: "to appreciate beauty around me",
  },
  { id: 9, value: "Caring", description: "to take care of others" },
  {
    id: 10,
    value: "Challenge",
    description: "to take on difficult tasks and problems",
  },
  {
    id: 11,
    value: "Change",
    description: "to have a life full of change and variety",
  },
  {
    id: 12,
    value: "Comfort",
    description: "to have a pleasant and comfortable life",
  },
  {
    id: 13,
    value: "Commitment",
    description: "to make enduring, meaningful commitments",
  },
  {
    id: 14,
    value: "Compassion",
    description: "to feel and act on concern for others",
  },
  {
    id: 15,
    value: "Contribution",
    description: "to make a lasting contribution in the world",
  },
  {
    id: 16,
    value: "Cooperation",
    description: "to work collaboratively with others",
  },
  {
    id: 17,
    value: "Courtesy",
    description: "to be considerate and polite toward others",
  },
  {
    id: 18,
    value: "Creativity",
    description: "to have new and original ideas",
  },
  {
    id: 19,
    value: "Dependability",
    description: "to be reliable and trustworthy",
  },
  {
    id: 20,
    value: "Duty",
    description: "to carry out my duties and obligations",
  },
  {
    id: 21,
    value: "Ecology",
    description: "to live in harmony with the environment",
  },
  {
    id: 22,
    value: "Excitement",
    description: "to have a life full of thrills and stimulation",
  },
  {
    id: 23,
    value: "Faithfulness",
    description: "to be loyal and true in relationships",
  },
  { id: 24, value: "Fame", description: "to be known and recognized" },
  {
    id: 25,
    value: "Family",
    description: "to have a happy, loving family",
  },
  {
    id: 26,
    value: "Fitness",
    description: "to be physically fit and strong",
  },
  {
    id: 27,
    value: "Flexibility",
    description: "to adjust to new circumstances easily",
  },
  {
    id: 28,
    value: "Forgiveness",
    description: "to be forgiving of others",
  },
  {
    id: 29,
    value: "Friendship",
    description: "to have close, supportive friends",
  },
  { id: 30, value: "Fun", description: "to play and have fun" },
  {
    id: 31,
    value: "Generosity",
    description: "to give what I have to others",
  },
  {
    id: 32,
    value: "Genuineness",
    description: "to act in a manner that is true to who I am",
  },
  {
    id: 33,
    value: "God's Will",
    description: "to seek and obey the will of God",
  },
  {
    id: 34,
    value: "Growth",
    description: "to keep changing and growing",
  },
  {
    id: 35,
    value: "Health",
    description: "to be physically well and healthy",
  },
  {
    id: 36,
    value: "Helpfulness",
    description: "to be helpful to others",
  },
  {
    id: 37,
    value: "Honesty",
    description: "to be honest and truthful",
  },
  {
    id: 38,
    value: "Hope",
    description: "to maintain a positive and optimistic outlook",
  },
  {
    id: 39,
    value: "Humility",
    description: "to be modest and unassuming",
  },
  {
    id: 40,
    value: "Humor",
    description: "to see the humorous side of myself and the world",
  },
  {
    id: 41,
    value: "Independence",
    description: "to be free from dependence on others",
  },
  {
    id: 42,
    value: "Industry",
    description: "to work hard and well at my life tasks",
  },
  {
    id: 43,
    value: "Inner Peace",
    description: "to experience personal peace",
  },
  {
    id: 44,
    value: "Intimacy",
    description: "to share my innermost experiences with others",
  },
  {
    id: 45,
    value: "Justice",
    description: "to promote fair and equal treatment for all",
  },
  {
    id: 46,
    value: "Knowledge",
    description: "to learn and contribute valuable knowledge",
  },
  {
    id: 47,
    value: "Leisure",
    description: "to take time to relax and enjoy",
  },
  {
    id: 48,
    value: "Loved",
    description: "to be loved by those close to me",
  },
  { id: 49, value: "Loving", description: "to give love to others" },
  {
    id: 50,
    value: "Mastery",
    description: "to be competent in my everyday activities",
  },
  {
    id: 51,
    value: "Mindfulness",
    description: "to live conscious and mindful of the present moment",
  },
  {
    id: 52,
    value: "Moderation",
    description: "to avoid excesses and find a middle ground",
  },
  {
    id: 53,
    value: "Monogamy",
    description: "to have one close, loving relationship",
  },
  {
    id: 54,
    value: "Non-Conformity",
    description: "to question and challenge authority and norms",
  },
  {
    id: 55,
    value: "Nurturance",
    description: "to take care of and nurture others",
  },
  {
    id: 56,
    value: "Openness",
    description: "to be open to new experiences, ideas, and options",
  },
  {
    id: 57,
    value: "Order",
    description: "to have a life that is well-ordered and organized",
  },
  {
    id: 58,
    value: "Passion",
    description: "to have deep feelings about ideas, activities, or people",
  },
  { id: 59, value: "Pleasure", description: "to feel good" },
  {
    id: 60,
    value: "Popularity",
    description: "to be well-liked by many people",
  },
  {
    id: 61,
    value: "Power",
    description: "to have control over others",
  },
  {
    id: 62,
    value: "Purpose",
    description: "to have meaning and direction in my life",
  },
  {
    id: 63,
    value: "Rationality",
    description: "to be guided by reason and logic",
  },
  {
    id: 64,
    value: "Realism",
    description: "to see and act realistically and practically",
  },
  {
    id: 65,
    value: "Responsibility",
    description: "to make and carry out responsible decisions",
  },
  { id: 66, value: "Risk", description: "to take risks and chances" },
  {
    id: 67,
    value: "Romance",
    description: "to have intense, exciting love in my life",
  },
  { id: 68, value: "Safety", description: "to be safe and secure" },
  {
    id: 69,
    value: "Self-Acceptance",
    description: "to accept myself as I am",
  },
  {
    id: 70,
    value: "Self-Control",
    description: "to be disciplined in my own actions",
  },
  {
    id: 71,
    value: "Self-Esteem",
    description: "to feel good about myself",
  },
  {
    id: 72,
    value: "Self-Knowledge",
    description: "to have a deep and honest understanding of myself",
  },
  {
    id: 73,
    value: "Service",
    description: "to be of service to others",
  },
  {
    id: 74,
    value: "Sexuality",
    description: "to have an active and satisfying sex life",
  },
  {
    id: 75,
    value: "Simplicity",
    description: "to live life simply, with minimal needs",
  },
  {
    id: 76,
    value: "Solitude",
    description: "to have time and space where I can be apart from others",
  },
  {
    id: 77,
    value: "Spirituality",
    description: "to grow and mature spiritually",
  },
  {
    id: 78,
    value: "Stability",
    description: "to have a life that stays fairly consistent",
  },
  {
    id: 79,
    value: "Tolerance",
    description: "to accept and respect those who differ from me",
  },
  {
    id: 80,
    value: "Tradition",
    description: "to follow respected patterns of the past",
  },
  {
    id: 81,
    value: "Virtue",
    description: "to live a morally pure and excellent life",
  },
  { id: 82, value: "Wealth", description: "to have plenty of money" },
  {
    id: 83,
    value: "World Peace",
    description: "to work to promote peace in the world",
  },
];

export { cards };
