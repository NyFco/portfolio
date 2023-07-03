import { FC, ReactNode } from 'react';
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

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Description />
      <div style={{ flex: 3 }}>{children}</div>
    </Layout>
  );
};

export default MainLayout;
