import React from 'react';
import Section from './Section';

const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', logo: 'https://github.com/devicons/devicon/tree/v2.16.0/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Skills & Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map(({ name, logo }) => (
          <div key={name} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2">
            <img src={logo} alt={`${name} logo`} className="w-6 h-6" />
            <p className="font-medium text-gray-800">{name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
