import { FC } from 'react';

import { MainLayout, RGBLayout } from '../../layouts';

const Content: FC = () => {
  return (
    <RGBLayout>
      <h1 style={{ marginBottom: '30px' }}>About Me</h1>
      <p style={{ marginLeft: '15px' }}>
        As a front-end developer proficient in ReactJS and ReactNative, I am
        constantly seeking to improve my skills by writing cleaner code and
        deepening my understanding of JavaScript and algorithms.
        <br />
        <br />I am also open to learning new technologies and staying up-to-date
        with industry trends.
      </p>
    </RGBLayout>
  );
};

const AboutPage: FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  );
};

export default AboutPage;
