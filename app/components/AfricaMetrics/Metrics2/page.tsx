import { MetricCard } from "./africaMetric2";

export default function Dashboard() {
  const metrics = [
    {
      title: "Population",
      value: "1,200",
      iconName: "Users",
      description: "Total population in thousands",
    },
    {
      title: "GDP Growth",
      value: "3.2%",
      iconName: "TrendingUp",
      description: "Annual GDP growth rate in percentage",
    },
    {
      title: "Urbanization",
      value: "38%",
      iconName: "Building2",
      description: "Percentage of population living in urban areas",
    },
    {
      title: "Mobile Users",
      value: "72%",
      iconName: "Smartphone",
      description: "Percentage of people using mobile phones",
    },
    {
      title: "Youth Unemploy.",
      value: "14.5%",
      iconName: "BadgeAlert",
      description: "Unemployment rate among youth",
    },
    {
      title: "Renewables",
      value: "18%",
      iconName: "Leaf",
      description: "Renewable energy usage as a percent of total",
    },
  ];

  return (
    <main className="min-h-screen  bg-gray-50 dark:bg-gray-950 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </main>
  );
}
