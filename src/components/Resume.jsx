import React from 'react';

const Resume = () => {
  const proficiencies = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', '...'];

  return (
    <div>
      <h2>Resume</h2>
      <div>
        <a href="path_to_resume.pdf" download>
          Download Resume
        </a>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
