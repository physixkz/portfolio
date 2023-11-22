import React from 'react';

const ProjectDisplay = ({ match }) => {
  const projectId = match.params.id; // Extracting project ID from URL
  // Fetch project details using projectId, or use static data

  return (
    <div>
      <h2>Project Details</h2>
      <p>Display project details based on ID: {projectId}</p>
      {/* Add project details here */}
    </div>
  );
};

export default ProjectDisplay;
