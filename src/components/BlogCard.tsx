import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
      >
        Read More <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

export default BlogCard;