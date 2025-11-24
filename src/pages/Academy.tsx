import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { PlayCircle, Award, Clock } from 'lucide-react';

const courses = [
  { 
    id: 1, 
    title: 'Fundamentals of Retail Solutions', 
    description: 'Learn the basics of our retail ecosystem and value proposition.',
    progress: 100,
    duration: '2h 30m',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 2, 
    title: 'Advanced Inventory Management', 
    description: 'Deep dive into stock rotation, forecasting, and replenishment.',
    progress: 45,
    duration: '4h 15m',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 3, 
    title: 'Technical Implementation Certificate', 
    description: 'Prepare for the official implementation partner certification exam.',
    progress: 10,
    duration: '8h 00m',
    level: 'Expert',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 4, 
    title: 'Sales Mastery: Objection Handling', 
    description: 'Techniques for handling common prospect objections.',
    progress: 0,
    duration: '1h 45m',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

export const Academy: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Partner Academy" 
        description="Enhance your skills and earn certifications."
      >
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md border border-gray-200">
          <Award className="h-4 w-4 text-yellow-500" />
          <span>2 Certifications Earned</span>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
                <PlayCircle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-black bg-opacity-60 px-2 py-1 text-xs text-white">
                {course.level}
              </div>
            </div>
            
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-500">{course.description}</p>
              
              <div className="mt-4 flex items-center text-xs text-gray-500 mb-4">
                <Clock className="mr-1 h-3 w-3" />
                {course.duration}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className={course.progress === 100 ? 'text-green-600' : 'text-gray-600'}>
                    {course.progress === 100 ? 'Completed' : `${course.progress}% Complete`}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div 
                    className={`h-2 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`} 
                    style={{ width: `${course.progress}%` }} 
                  />
                </div>
                <button className={`mt-4 w-full rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  course.progress === 100 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}>
                  {course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

