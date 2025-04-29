import React, { useEffect, useState } from 'react';
import Section from './Section';
import BlogCard from './BlogCard';
import BlogLogo from '../../assets/images/Blog_logo.png';

type Blog = {
  title: string;
  date: string;
  description: string;
  link: string;
  coverImage: string;
};

const BlogsSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        query {
          publication(host: "jasaiblogs.hashnode.dev") {
            posts(first: 4) {
              edges {
                node {
                  title
                  brief
                  slug
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `;
    
      try {
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });
    
        const result = await response.json();
        console.log('Hashnode API response:', result); // ← Log response
    
        const posts = result.data.publication.posts.edges.map((edge: any) => ({
          title: edge.node.title,
          description: edge.node.brief,
          date: new Date(edge.node.publishedAt).toLocaleDateString(),
          link: `https://jasaiblogs.hashnode.dev/${edge.node.slug}`,
          coverImage: edge.node.coverImage?.url ?? '', // fallback if null
        }));
    
        setBlogs(posts);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    

    fetchBlogs();
  }, []);

  return (
    <Section id="blogs" title="Latest Blog Posts">
      <div className="flex justify-center mb-8">
        <a href="https://jasaiblogs.hashnode.dev/" target="_blank" rel="noopener noreferrer">
          <img src={BlogLogo} alt="Blog Logo" className="h-20 w-auto" />
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.link} {...blog} />)
        ) : (
          <p className="text-center text-gray-600 col-span-2">Loading blog posts...</p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://jasaiblogs.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          Explore All Blogs
        </a>
      </div>
      <div className="flex justify-center space-x-6 mt-4 text-sm text-indigo-600">
        <a
          href="https://jasaiblogs.hashnode.dev/series/devops-series"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          DevOps - Planning to Production
        </a>
        <a
          href="https://jasaiblogs.hashnode.dev/series/networking-series"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          The Network Navigator
        </a>
        <a
          href="https://jasaiblogs.hashnode.dev/series/aws-cloud-series"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          AWS Cloud Practitioner Essentials
        </a>
      </div>
    </Section>
  );
};

export default BlogsSection;
