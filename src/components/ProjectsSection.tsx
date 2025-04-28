import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC<{ projects: Array<{ title: string; description: string; github: string; demo: string; tech: string[] }> }> = ({ projects }) => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
