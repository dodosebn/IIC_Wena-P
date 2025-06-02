// pages/index.tsx
import MetricsGrid from "./metri3rd";

const metric = [
  {
    title: "Population",
    value: "1.4B",
    change: "+2.5%",
     trend: "up" as const,
    description: "Total continental population",
    icon: "👥",
  },
  {
    title: "GDP Growth",
    value: "3.8%",
    change: "+0.4%",
     trend: "up" as const,
    description: "Annual economic expansion",
    icon: "📈",
  },
  {
    title: "Urbanization",
    value: "43%",
    change: "+1.2%",
     trend: "up" as const,
    description: "Living in cities",
    icon: "🏙️",
  },
  {
    title: "Mobile Users",
    value: "84%",
    change: "+6%",
     trend: "up" as const,
    description: "Mobile penetration rate",
    icon: "📱",
  },
  {
    title: "Youth Unemploy.",
    value: "12.8%",
    change: "-0.7%",
    trend: "down" as const,
    description: "Ages 15-24 ffhjfhfhjfjh fjhfhjfhjf fhfhfjff ffhfhf ffkff fhfffk fhfhkfkf f jkfff fkjk",
    icon: "🧑‍🎓",
  },
  {
    title: "Renewables",
    value: "22%",
    change: "+3.1%",
     trend: "up" as const,
    description: "Energy production",
    icon: "☀️",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Key Metrics Dashboard
      </h1>
      <MetricsGrid metrics={metric} />
    </div>
  );
}