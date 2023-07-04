import { FC } from 'react';
import styled from 'styled-components';

import { Project } from '../../components';
import { RGBLayout } from '../../layouts';

import projects from './projects';

const Title = styled.h1(
  ({ theme }) => `
  text-align: center;
  margin-bottom: 30px;
  ${theme.breakpoints.xl} {
    text-align: left;
  }
`
);

const ProjectsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

const ProjectsPage: FC = () => {
  return (
    <section
      style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
    >
      <RGBLayout style={{ width: '50%' }}>
        <Title>Projects</Title>
        <ProjectsContainer>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ProjectsContainer>
      </RGBLayout>
    </section>
  );
};

export default ProjectsPage;
