import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { MessageSquare, Plus } from 'lucide-react';

const tickets = [
  { id: 'TKT-1024', subject: 'Integration issue with Payment Gateway X', status: 'Open', priority: 'High', lastUpdate: '2 hours ago' },
  { id: 'TKT-1023', subject: 'Question about API Rate Limits', status: 'Resolved', priority: 'Low', lastUpdate: '1 day ago' },
  { id: 'TKT-1022', subject: 'License Key Activation Failure', status: 'In Progress', priority: 'Critical', lastUpdate: '3 hours ago' },
  { id: 'TKT-1021', subject: 'Dashboard displaying incorrect currency', status: 'Open', priority: 'Medium', lastUpdate: '2 days ago' },
];

export const Support: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Support Center" 
        description="Get help with technical issues and inquiries."
      >
        <button className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-500">
          <Plus className="mr-2 h-4 w-4" />
          Create Ticket
        </button>
      </PageHeader>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Tickets</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    ticket.status === 'Resolved' ? 'bg-green-100 text-green-600' : 
                    ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-900">{ticket.subject}</span>
                      <span className="text-xs text-gray-500">{ticket.id}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                      <span>Updated {ticket.lastUpdate}</span>
                      <span>•</span>
                      <span className={`font-medium ${
                        ticket.priority === 'Critical' ? 'text-red-600' :
                        ticket.priority === 'High' ? 'text-orange-600' :
                        'text-gray-600'
                      }`}>{ticket.priority} Priority</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    ticket.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {ticket.status}
                  </span>
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                    View
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 px-6 py-3">
          <button className="text-sm font-medium text-gray-900 hover:text-primary-600">
            View all tickets &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

