import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { FileText, Download, Image, Film, Search } from 'lucide-react';

const resources = [
  { id: 1, title: 'Q4 2025 Product Roadmap', type: 'PDF', size: '2.4 MB', category: 'Product Info', icon: FileText },
  { id: 2, title: 'Retail Industry Trends Report', type: 'PDF', size: '15 MB', category: 'Marketing', icon: FileText },
  { id: 3, title: 'Logo Asset Pack', type: 'ZIP', size: '45 MB', category: 'Brand Assets', icon: Image },
  { id: 4, title: 'Sales Demo Script', type: 'DOCX', size: '500 KB', category: 'Sales Enablement', icon: FileText },
  { id: 5, title: 'Customer Success Story: FashionHub', type: 'MP4', size: '120 MB', category: 'Case Studies', icon: Film },
  { id: 6, title: 'Implementation Guide v3.0', type: 'PDF', size: '8.2 MB', category: 'Technical', icon: FileText },
];

export const Resources: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Resource Center" 
        description="Access marketing materials, technical documentation, and sales assets."
      >
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="rounded-md border-0 py-2 pl-9 pr-3 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600"
          />
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.id} className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                  <resource.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{resource.category} • {resource.type}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-500">{resource.size}</span>
              <button className="flex items-center text-xs font-medium text-primary-600 hover:text-primary-700">
                <Download className="mr-1 h-3 w-3" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

