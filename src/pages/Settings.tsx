import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { User, Bell, Shield, Key } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Settings" 
        description="Manage your account preferences and company profile."
      />

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            Profile Information
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
              <div className="mt-1">
                <input type="text" name="first-name" id="first-name" defaultValue="John" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
              <div className="mt-1">
                <input type="text" name="last-name" id="last-name" defaultValue="Doe" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input type="email" name="email" id="email" defaultValue="john.doe@acmeretail.com" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-400" />
            Notifications
          </h3>
          <fieldset className="mt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="comments" name="comments" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">New Leads</label>
                  <p className="text-gray-500">Get notified when a new lead is assigned to you.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="candidates" className="font-medium text-gray-700">System Updates</label>
                  <p className="text-gray-500">Receive weekly summaries of system changes.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="p-6 flex justify-end gap-3 bg-gray-50 rounded-b-lg">
           <button className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Cancel</button>
           <button className="rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

