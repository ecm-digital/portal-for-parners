import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { 
  DollarSign, 
  Users, 
  Briefcase, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const stats = [
  { 
    name: 'Total Revenue', 
    value: '$45,231.89', 
    change: '+20.1%', 
    trend: 'up',
    icon: DollarSign 
  },
  { 
    name: 'Active Deals', 
    value: '12', 
    change: '+4', 
    trend: 'up',
    icon: Briefcase 
  },
  { 
    name: 'Active Licenses', 
    value: '2,300', 
    change: '-2%', 
    trend: 'down',
    icon: Users 
  },
  { 
    name: 'Win Rate', 
    value: '34%', 
    change: '+1.2%', 
    trend: 'up',
    icon: TrendingUp 
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Overview of your partnership performance and activities."
      >
        <button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Download Report
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
          Register Deal
        </button>
      </PageHeader>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-primary-50 p-3">
                <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                  <dd>
                    <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="mr-1.5 h-4 w-4 flex-shrink-0" />
                ) : (
                  <ArrowDownRight className="mr-1.5 h-4 w-4 flex-shrink-0" />
                )}
                <span className="font-medium">{stat.change}</span>
                <span className="ml-2 text-gray-500">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="rounded-lg bg-white shadow lg:col-span-2">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Revenue Overview</h3>
            <div className="mt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0ea5e9" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity / Next Steps */}
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Recommended Actions</h3>
            <ul className="mt-6 space-y-4">
              {[
                { title: 'Complete Q4 Certification', type: 'training', priority: 'high' },
                { title: 'Update Opportunity: Acme Corp', type: 'sales', priority: 'medium' },
                { title: 'Review New Product Roadmap', type: 'info', priority: 'low' },
              ].map((action, idx) => (
                <li key={idx} className="flex gap-4 rounded-md border border-gray-100 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className={`h-2 w-2 mt-2 rounded-full flex-shrink-0 ${
                    action.priority === 'high' ? 'bg-red-500' : 
                    action.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{action.title}</p>
                    <p className="text-xs text-gray-500 mt-1 capitalize">{action.type} • {action.priority} Priority</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Partner Tier Status</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Gold Partner</span>
                <span className="text-sm font-medium text-primary-600">850/1000 pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-primary-500" style={{ width: '85%' }} />
              </div>
              <p className="mt-2 text-xs text-gray-500">150 points to Platinum status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

