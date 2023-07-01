import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Divider } from '../../components';

const Layout = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingInline: '5%',
    marginTop: 100,
    gap: 60,
  },
  ({ theme }) => `
    ${theme.breakpoints.md} {
      flex-direction: row;
      padding-inline: 10%;
      gap: 30px;
    }
`
);

const DescriptionContainer = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});

const NameContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const FirstName = styled.h1(
  ({ theme }) => `
  transition: all ease 0.5s;
  font-size: ${theme.fontSizes.xLarge};
  ${theme.breakpoints.md} {
    font-size: ${theme.fontSizes.xxLarge};
  }
`
);

const LastName = styled.h2(
  ({ theme }) => `
  transition: all ease 0.5s;
  font-size: ${theme.fontSizes.large};
  ${theme.breakpoints.md} {
    font-size: ${theme.fontSizes.xLarge};
  }
`
);

const Role = styled.h2(
  ({ theme }) => `
  transition: all ease 0.5s;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.textSecondary};
  ${theme.breakpoints.md} {
    font-size: ${theme.fontSizes.large};
  }
`
);

const Container = styled.div({
  animation: 'rgbShadow 4s linear infinite',
  backdropFilter: 'blur(10px)',
  margin: '0 20px',
  padding: '50px',
  borderRadius: '20px',
});

const Description: FC = () => {
  return (
    <DescriptionContainer>
      <NameContainer>
        <FirstName>
          <FormattedMessage id="name.firstname" />
        </FirstName>
        <LastName>
          <FormattedMessage id="name.lastname" />
        </LastName>
        <Role>
          <FormattedMessage id="frontendev" />
        </Role>
      </NameContainer>
      <div style={{ width: '100%' }}>
        <Divider direction="horizontal" size={30} color="#aaaaaa" />
      </div>
      <p
        style={{
          width: '80%',
          textAlign: 'justify',
          textAlignLast: 'center',
          lineHeight: '1.5em',
        }}
      >
        <FormattedMessage id="mainPage.bio" />
      </p>
      <div style={{ width: '100%' }}>
        <Divider direction="horizontal" size={30} color="#aaaaaa" />
      </div>
    </DescriptionContainer>
  );
};

const Content: FC = () => {
  return (
    <div
      style={{
        flex: 3,
      }}
    >
      <Container>
        <h1 style={{ marginBottom: '30px' }}>About this site</h1>
        <p style={{ marginLeft: '15px' }}>
          A RESPONSIVE REACT APPLICATION TO REPRESENT MY FRONT-END SKILLS.
          Welcome to my website.
          <br />
          <br /> Please feel free to read more about me, or you can check out my
          resume, projects, view site statistics, or contact me.
        </p>
      </Container>
    </div>
  );
};

const MainPage: FC = () => {
  return (
    <Layout>
      <Description />
      <Content />
    </Layout>
  );
};

export default MainPage;
