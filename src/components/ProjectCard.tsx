import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  demo: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, demo, tech }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span 
            key={item}
            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <Github className="h-5 w-5 mr-1" />
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ExternalLink className="h-5 w-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;