import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  coverImage?: string; // Optional because sometimes it can be missing
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, link, coverImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {coverImage ? (
        <div className="w-full h-60 overflow-hidden rounded-t-lg bg-gray-100">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-contain mx-auto"
          />
        </div>
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          No Image Available
        </div>
      )}

      <div className="p-6">
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
    </div>
  );
};

export default BlogCard;
