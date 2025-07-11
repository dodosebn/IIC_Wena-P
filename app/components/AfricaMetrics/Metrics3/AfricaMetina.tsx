import React from 'react';
import { 
  FaUsers, 
  FaChartLine, 
  FaCity, 
  FaMobileAlt, 
  FaUserGraduate, 
  FaLeaf,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

type MetricCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: 'up' | 'down';
  trendValue: number;
  trendMessage: string;
  color: string;
};

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendValue, 
  trendMessage,
  color 
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color}`}></div>
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="mt-2 flex items-end">
            <span className="text-3xl font-bold text-gray-800">{value}</span>
            {title === 'GDP Growth' || title === 'Youth Unemploy.' || title === 'Urbanization' ? (
              <span className="ml-1 text-lg text-gray-500">%</span>
            ) : title === 'Population' ? (
              <span className="ml-1 text-lg text-gray-500">M</span>
            ) : null}
          </div>
        </div>
        
        <div className={`rounded-lg p-3 ${color.replace('gradient-to-r', 'bg-gradient-to-br')} text-white`}>
          {icon}
        </div>
      </div>
      
      <div className={`mt-4 flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {trend === 'up' ? (
          <FaArrowUp className="mr-1" />
        ) : (
          <FaArrowDown className="mr-1" />
        )}
        <span className="font-medium">{trendValue}%</span>
        <span className="ml-2 text-gray-500">{trendMessage}</span>
      </div>
    </div>
  );
};

const AfricaMetricsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Africa Development Metrics</h1>
          <p className="mt-3 text-xl text-gray-500">Key indicators showing progress across the continent</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Population"
            value={1200}
            icon={<FaUsers className="h-5 w-5" />}
            trend="up"
            trendValue={2.4}
            trendMessage="Steady growth"
            color="from-blue-500 to-blue-600"
          />
          
          <MetricCard
            title="GDP Growth"
            value={3.2}
            icon={<FaChartLine className="h-5 w-5" />}
            trend="up"
            trendValue={0.3}
            trendMessage="Positive trend"
            color="from-emerald-500 to-emerald-600"
          />
          
          <MetricCard
            title="Urbanization"
            value={38}
            icon={<FaCity className="h-5 w-5" />}
            trend="up"
            trendValue={1.8}
            trendMessage="Rapid urbanization"
            color="from-purple-500 to-purple-600"
          />
          
          <MetricCard
            title="Mobile Users"
            value={72}
            icon={<FaMobileAlt className="h-5 w-5" />}
            trend="up"
            trendValue={5.2}
            trendMessage="Fast adoption"
            color="from-amber-500 to-amber-600"
          />
          
          <MetricCard
            title="Youth Unemploy."
            value={14.5}
            icon={<FaUserGraduate className="h-5 w-5" />}
            trend="down"
            trendValue={1.2}
            trendMessage="Improving slowly"
            color="from-red-500 to-red-600"
          />
          
          <MetricCard
            title="Renewables"
            value={22}
            icon={<FaLeaf className="h-5 w-5" />}
            trend="up"
            trendValue={3.7}
            trendMessage="Growing investment"
            color="from-green-500 to-green-600"
          />
        </div>
        
        <div className="mt-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white shadow-lg">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Africa Rising</h2>
            <p className="mt-2 opacity-90">
              These metrics demonstrate the continent's dynamic groth across key sector, 
              with particularly strong performance in mobile adoption and urbanization trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfricaMetricsDashboard;