import React from 'react';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-10 flex h-20 flex-shrink-0 items-center justify-between px-4 md:px-8 transition-all duration-300">
      {/* Glass Panel Background */}
      <div className="absolute inset-x-4 top-2 bottom-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-sm -z-10" />

      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-500 hover:bg-white/50 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search */}
        <div className="flex flex-1 items-center md:pl-4">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-xl border-0 bg-white/50 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-200/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500/50 focus:bg-white/80 transition-all sm:text-sm sm:leading-6"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 md:gap-4 pr-2 md:pr-4">
        <button className="rounded-full p-2 text-gray-500 hover:bg-white/50 hover:text-gray-700 transition-all hidden sm:block">
          <span className="sr-only">Help</span>
          <HelpCircle className="h-6 w-6" />
        </button>
        
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-white/50 hover:text-gray-700 transition-all">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Profile Dropdown Trigger */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200/50 ml-2">
          <div className="flex flex-col items-end hidden md:flex">
            <span className="text-sm font-semibold text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Acme Retail Solutions</span>
          </div>
          <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/50 shadow-sm">
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
