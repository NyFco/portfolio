import { FC, useState } from 'react';
import styled from 'styled-components';

import { ProjectType } from '../../pages/projects/projects';

const Container = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    color: '#333',
    filter: 'grayscale(1)',
    transition: 'ease 0.3s all',
    cursor: 'pointer',
  },
  `
  &:hover {
    filter: grayscale(0);
  }
`
);

const Title = styled.h3(
  {
    textAlign: 'center',
    fontSize: '3vw',
    paddingBlock: 5,
  },
  ({ theme }) => `
  ${theme.breakpoints.xl} {
    font-size: 2vw;
    text-align: left;
    padding-block: 10px;
    padding-left: 20px;
  }
`
);

const Description = styled.p({
  textAlign: 'center',
  fontSize: '2vw',
  paddingBlock: 5,
});

const Project: FC<{ project: ProjectType }> = ({ project }) => {
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      onClick={() => {
        project.url && window.open(project.url);
      }}
      style={{
        backgroundColor: project.theme,
        boxShadow: hovering ? `${project.theme} 0 0 15px` : 'none',
        cursor: project.url ? 'pointer' : 'not-allowed',
      }}
    >
      <Title>{project.name}</Title>
      <img style={{ width: '100%' }} src={project.img} alt={project.name} />
      <Description>{project?.description}</Description>
    </Container>
  );
};

export default Project;
