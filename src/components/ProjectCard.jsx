import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3 className="project-title">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
