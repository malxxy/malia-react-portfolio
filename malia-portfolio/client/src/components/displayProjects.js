import React from 'react';
import Projects from './Projects';

const projectInfo = {
  title: 'Blog for Content Creator',
  description: 'Fulllstack blog application built with React, MongoDb, GraphQL, Node and Express. Admin can log in to edit and publish blog posts.',
};

export default function DisplayProjects() {
  return (
    <div>
        <Projects title={projectInfo.title} description={projectInfo.description}/>
    </div>
  );
}