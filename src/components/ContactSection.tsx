import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Section from './Section';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get in Touch" className="bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col space-y-4">
          <a 
            href="mailto:your.email@example.com"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Mail className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-gray-800">your.email@example.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/jasai-hansda-a5bbb3189/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Linkedin className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-gray-800">LinkedIn Profile</span>
          </a>
          <a 
            href="https://github.com/Jasai007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Github className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-gray-800">GitHub Profile</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
