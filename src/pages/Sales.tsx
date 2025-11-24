import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { MoreHorizontal, Filter } from 'lucide-react';

const deals = [
  { id: 1, client: 'TechCorp Industries', value: '$120,000', stage: 'Negotiation', probability: '80%', owner: 'Sarah Wilson', lastUpdate: '2 hours ago' },
  { id: 2, client: 'Global Retail Solutions', value: '$85,000', stage: 'Proposal', probability: '45%', owner: 'Mike Brown', lastUpdate: '1 day ago' },
  { id: 3, client: 'City Grocers', value: '$45,000', stage: 'Discovery', probability: '20%', owner: 'Sarah Wilson', lastUpdate: '3 days ago' },
  { id: 4, client: 'Fashion Forward', value: '$210,000', stage: 'Closing', probability: '90%', owner: 'John Doe', lastUpdate: '5 hours ago' },
  { id: 5, client: 'Local Pharma Chain', value: '$32,000', stage: 'Lead', probability: '10%', owner: 'Mike Brown', lastUpdate: '1 week ago' },
];

export const Sales: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Sales Pipeline" 
        description="Manage your opportunities and register new deals."
      >
        <button className="glass-button inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-gray-700">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </button>
        <button className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/30 hover:bg-primary-500 hover:shadow-primary-500/50 transition-all">
          + New Opportunity
        </button>
      </PageHeader>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50/50 border-b border-gray-100/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Client / Opportunity
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Value
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Stage
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Probability
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Owner
                </th>
                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/50">
              {deals.map((deal) => (
                <tr key={deal.id} className="hover:bg-white/40 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">{deal.client}</span>
                      <span className="text-xs text-gray-500">Updated {deal.lastUpdate}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {deal.value}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold leading-5 ${
                      deal.stage === 'Closing' ? 'bg-green-100/80 text-green-800' :
                      deal.stage === 'Negotiation' ? 'bg-blue-100/80 text-blue-800' :
                      'bg-gray-100/80 text-gray-800'
                    } backdrop-blur-sm`}>
                      {deal.stage}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 rounded-full bg-gray-100 overflow-hidden">
                        <div 
                          className="h-full bg-primary-500 rounded-full" 
                          style={{ width: deal.probability }} 
                        />
                      </div>
                      <span className="font-medium">{deal.probability}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {deal.owner}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
