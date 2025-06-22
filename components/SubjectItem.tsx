import React from 'react';
import { RipassoTopic } from '../types';
import BookOpenIcon from './icons/BookOpenIcon'; // Using for resource link indication

interface SubjectItemProps {
  subjectName: string;
  topics: RipassoTopic[];
}

const SubjectItem: React.FC<SubjectItemProps> = ({ subjectName, topics }) => {
  return (
    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400 my-3 shadow-sm">
      <h5 className="text-md font-semibold text-amber-700 mb-2">{subjectName}</h5>
      <ul className="list-none pl-0 space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm text-slate-700">
            <div className="flex items-start">
              <span className="text-amber-600 mr-2 font-semibold">•</span>
              <span>{topic.name}</span>
            </div>
            {topic.resources && topic.resources.length > 0 && (
              <ul className="list-none pl-5 mt-1 space-y-1">
                {topic.resources.map((resource, resIndex) => (
                  <li key={resIndex} className="flex items-center text-xs text-slate-600">
                    <BookOpenIcon className="w-3.5 h-3.5 mr-1.5 text-emerald-600 flex-shrink-0" />
                    {resource.url ? (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-emerald-700 hover:underline"
                        aria-label={`Risorsa esterna: ${resource.text}`}
                      >
                        {resource.text}
                      </a>
                    ) : (
                      <span>{resource.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectItem;