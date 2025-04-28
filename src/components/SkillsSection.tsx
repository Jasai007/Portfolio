import React from 'react';
import Section from './Section';

const SkillsSection: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'Java'];

  return (
    <Section id="skills" title="Skills & Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="text-center font-medium text-gray-800">{skill}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
