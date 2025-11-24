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
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/40 shadow-sm">
          <Award className="h-5 w-5 text-yellow-500" />
          <span>2 Certifications Earned</span>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="glass-card flex flex-col overflow-hidden group hover:-translate-y-2">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
                {course.level}
              </div>
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">{course.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-2">{course.description}</p>
              
              <div className="mt-4 flex items-center text-xs font-medium text-gray-500 mb-5">
                <Clock className="mr-1.5 h-3.5 w-3.5" />
                {course.duration}
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className={course.progress === 100 ? 'text-green-600' : 'text-gray-600'}>
                    {course.progress === 100 ? 'Completed' : `${course.progress}% Complete`}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100/80 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${course.progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`} 
                    style={{ width: `${course.progress}%` }} 
                  />
                </div>
                <button className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all shadow-sm ${
                  course.progress === 100 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-500/30'
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
