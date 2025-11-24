import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Search */}
      <div className="flex flex-1 items-center">
        <div className="relative w-full max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Search resources, deals, or partners..."
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button className="rounded-full p-1 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Help</span>
          <HelpCircle className="h-6 w-6" />
        </button>
        
        <button className="relative rounded-full p-1 text-gray-400 hover:text-gray-500">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile Dropdown Trigger */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Acme Retail Solutions</span>
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-100 ring-2 ring-white">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

