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
  ChevronRight,
  X
} from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Sales Pipeline', href: '/sales', icon: PieChart },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Academy', href: '/academy', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: LifeBuoy },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-50 flex w-72 flex-col justify-between border-r border-white/20 bg-white/80 backdrop-blur-2xl transition-transform duration-300 md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col">
          {/* Logo Area */}
          <div className="flex h-20 items-center justify-between px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">PartnerPortal</span>
            </div>
            <button 
              onClick={onClose}
              className="rounded-lg p-1 text-gray-500 hover:bg-white/50 md:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => onClose()} // Close on navigation (mobile)
                className={({ isActive }) =>
                  clsx(
                    'group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out',
                    isActive
                      ? 'bg-white/80 text-primary-600 shadow-md shadow-gray-100 ring-1 ring-black/5'
                      : 'text-gray-600 hover:bg-white/40 hover:text-gray-900'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={clsx(
                        'mr-3 h-5 w-5 flex-shrink-0 transition-colors',
                        isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'
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
        <div className="p-4 mx-4 mb-4 rounded-2xl bg-white/30 border border-white/40 shadow-sm backdrop-blur-md">
          <NavLink
            to="/settings"
            onClick={() => onClose()}
            className={({ isActive }) =>
              clsx(
                'group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white/50 transition-colors',
                isActive && 'bg-white/60'
              )
            }
          >
            <Settings className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-700" />
            Settings
          </NavLink>
          <button className="mt-1 flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50/50 transition-colors">
            <LogOut className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
