import React from 'react';
import Section from './Section';
import BlogCard from './BlogCard';
import BlogLogo from '../../assets/images/Blog_logo.png';

const BlogsSection: React.FC<{ blogs: Array<{ title: string; date: string; description: string; link: string }> }> = ({ blogs }) => {
  return (
    <Section id="blogs" title="Latest Blog Posts">
      <div className="flex justify-center mb-8">
        <img src={BlogLogo} alt="Blog Logo" className="h-20 w-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </Section>
  );
};

export default BlogsSection;
