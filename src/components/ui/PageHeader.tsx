import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-0 shrink-0">
        {children}
      </div>
    </div>
  );
};
