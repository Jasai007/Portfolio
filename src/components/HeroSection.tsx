import React from 'react';
import { ChevronRight } from 'lucide-react';
import Section from './Section';

const HeroSection: React.FC = () => {
  return (
    <Section id="about" className="bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Jasai Hansda</span>
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          A Software Engineer turned DevOps explorer, diving deep into Cloud, Automation, and AI-powered workflows. With 2 years of building and deploying apps, I’m now leveling up in AWS, CI/CD, and infrastructure management—because why do things manually when you can automate them? 🚀 
        </p>
        <p className="text-xl text-gray-600 mb-4">
          I love tinkering with tech, streamlining workflows, and letting AI do the heavy lifting where it can. If it’s about efficiency, scalability, or just making life easier, I’m all in!
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Let’s connect and build something awesome! 🔧⚡
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#projects" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View Projects
          </a>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
