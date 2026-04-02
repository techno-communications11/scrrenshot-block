export const yearBest = {
  year: "2025",
  title: "Year Wall of Fame",
  name: "Santiago Reeves",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  percent: 96,
  weightage: "95% weightage - Americas",
  market: "Global Strategy - New York HQ",
  tagline: "Visionary Leader - Record Breaker",
  highlights: [
    "Led three marquee launches",
    "Unlocked twelve emerging markets",
    "Champion of customer-first rituals",
  ],
};

const defaultMonths = (labels, people) =>
  labels.map((label, index) => ({
    monthLabel: label,
    best: {
      name: people[index].name,
      role: people[index].role,
      image: people[index].image,
      percent: people[index].percent,
    },
  }));

const q1People = [
  { name: "Amit Kumar", role: "Growth Lead", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80", percent: 94 },
  { name: "Priya Raj", role: "Experience Lead", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", percent: 91 },
  { name: "Noah Pillai", role: "Revenue Strategist", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", percent: 88 },
];

const q2People = [
  { name: "Laila Syed", role: "Insight Architect", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", percent: 92 },
  { name: "Kenji Takahashi", role: "Product Strategist", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80", percent: 90 },
  { name: "Zoe Martin", role: "Operations Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", percent: 87 },
];

const q3People = [
  { name: "Reyansh Kapoor", role: "Client Pulse", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", percent: 93 },
  { name: "Maya Rao", role: "Enablement Partner", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", percent: 89 },
  { name: "Ishaan Desai", role: "Strategic Ops", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", percent: 86 },
];

const q4People = [
  { name: "Karina Roy", role: "Design Lead", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80", percent: 91 },
  { name: "Leo Mehta", role: "Revenue Strategist", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80", percent: 88 },
  { name: "Ananya Bose", role: "Leadership Coach", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", percent: 85 },
];

export const quarters = [
  {
    quarter: "Q1",
    accent: "from-emerald-400 to-cyan-400",
    badgeColor: "bg-emerald-500 text-white",
    data: {
      name: "Ava Medina",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      market: "Chennai",
      percent: 92,
      weightage: "Focus Markets: Chennai, Singapore",
      badge: "Quarter Visionary",
    },
    months: defaultMonths(["January", "February", "March"], q1People),
  },
  {
    quarter: "Q2",
    accent: "from-sky-500 to-indigo-500",
    badgeColor: "bg-sky-500 text-white",
    data: {
      name: "Noah Patel",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
      market: "Dubai",
      percent: 90,
      weightage: "Focus Markets: Dubai, Riyadh",
      badge: "Momentum Driver",
    },
    months: defaultMonths(["April", "May", "June"], q2People),
  },
  {
    quarter: "Q3",
    accent: "from-fuchsia-500 to-purple-500",
    badgeColor: "bg-fuchsia-500 text-white",
    data: {
      name: "Sneha Reddy",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      market: "Bangalore",
      percent: 91,
      weightage: "Focus Markets: Bangalore, Chennai",
      badge: "Engagement Captain",
    },
    months: defaultMonths(["July", "August", "September"], q3People),
  },
  {
    quarter: "Q4",
    accent: "from-amber-500 to-red-500",
    badgeColor: "bg-amber-500 text-white",
    data: {
      name: "Arjun Kapoor",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80",
      market: "Hyderabad",
      percent: 89,
      weightage: "Focus Markets: Hyderabad, Mumbai",
      badge: "Execution Champ",
    },
    months: defaultMonths(["October", "November", "December"], q4People),
  },
];
