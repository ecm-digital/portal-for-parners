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
        <button className="glass-button inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-gray-700">
          Download Report
        </button>
        <button className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/30 hover:bg-primary-500 hover:shadow-primary-500/50 transition-all">
          Register Deal
        </button>
      </PageHeader>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="glass-card px-4 py-5 sm:p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
               <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                 {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
               </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-3 shadow-inner">
                <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
            </div>
            
            <dl>
              <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
              <dd className="mt-1">
                <div className="text-3xl font-bold text-gray-900 tracking-tight">
                  {stat.value}
                </div>
              </dd>
            </dl>
            
            <div className="mt-2 text-sm">
              <span className={`font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
              <span className="ml-2 text-gray-500">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="glass-card lg:col-span-2">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">Revenue Overview</h3>
            <div className="mt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
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
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      backdropFilter: 'blur(8px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.5)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity / Next Steps */}
        <div className="glass-card">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">Recommended Actions</h3>
            <ul className="mt-6 space-y-4">
              {[
                { title: 'Complete Q4 Certification', type: 'training', priority: 'high' },
                { title: 'Update Opportunity: Acme Corp', type: 'sales', priority: 'medium' },
                { title: 'Review New Product Roadmap', type: 'info', priority: 'low' },
              ].map((action, idx) => (
                <li key={idx} className="group flex gap-4 rounded-xl border border-transparent bg-white/40 p-4 hover:bg-white/60 hover:border-white/50 hover:shadow-sm transition-all cursor-pointer">
                  <div className={`h-2.5 w-2.5 mt-2 rounded-full flex-shrink-0 shadow-sm ${
                    action.priority === 'high' ? 'bg-red-500 shadow-red-500/30' : 
                    action.priority === 'medium' ? 'bg-amber-500 shadow-amber-500/30' : 'bg-blue-500 shadow-blue-500/30'
                  }`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{action.title}</p>
                    <p className="text-xs text-gray-500 mt-1 capitalize">{action.type} • {action.priority} Priority</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gray-100/50 pt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Partner Tier Status</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Gold Partner</span>
                <span className="text-sm font-bold text-primary-600">850/1000 pts</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-100/50 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 shadow-[0_0_10px_rgba(14,165,233,0.3)]" style={{ width: '85%' }} />
              </div>
              <p className="mt-2 text-xs text-gray-500">150 points to Platinum status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
