import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Flask-DevOps-Toolkit",
      description: "A web application built with Flask that provides tools and features for automating DevOps practices, including CI/CD integration and AWS deployment management.",
      github: "https://github.com/Jasai007/Flask-DevOps-Toolkit.git",
      demo: "https://demo-ecommerce.com",
      tech: ["HTML", "Python", "Dockerfile", "CSS", "Flask", "AWS", "GitHub Actions", "Shell", "Terraform"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com",
      tech: ["React", "Firebase", "Tailwind CSS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <BlogsSection />
        <ContactSection />
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Jasai Hansda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
