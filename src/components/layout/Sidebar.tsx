import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PieChart, 
  BookOpen, 
  GraduationCap, 
  LifeBuoy, 
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Sales Pipeline', href: '/sales', icon: PieChart },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Academy', href: '/academy', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: LifeBuoy },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white">
      <div className="flex flex-col">
        {/* Logo Area */}
        <div className="flex h-16 items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">PartnerPortal</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                clsx(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={clsx(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                  {isActive && (
                    <ChevronRight className="ml-auto h-4 w-4 text-primary-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-gray-200 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            clsx(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900',
              isActive && 'bg-gray-100'
            )
          }
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Settings
        </NavLink>
        <button className="mt-1 flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Logout
        </button>
      </div>
    </div>
  );
};

