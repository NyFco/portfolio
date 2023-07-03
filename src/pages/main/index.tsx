import { FC } from 'react';

import { MainLayout, RGBLayout } from '../../layouts';

const Content: FC = () => {
  return (
    <RGBLayout>
      <h1 style={{ marginBottom: '30px' }}>About this site</h1>
      <p style={{ marginLeft: '15px' }}>
        A RESPONSIVE REACT APPLICATION TO REPRESENT MY FRONT-END SKILLS. Welcome
        to my website.
        <br />
        <br /> Please feel free to read more about me, or you can check out my
        resume, projects, view site statistics, or contact me.
      </p>
    </RGBLayout>
  );
};

const MainPage: FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  );
};

export default MainPage;
