import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Divider } from '../../components';

const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const NameContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const MainPage: FC = () => {
  return (
    <Layout>
      <NameContainer>
        <h1>
          <FormattedMessage id="name.firstname" />
        </h1>
        <h2>
          <FormattedMessage id="name.lastname" />
        </h2>
        <h2>
          <FormattedMessage id="frontendev" />
        </h2>
        <Divider direction="horizontal" />
      </NameContainer>
    </Layout>
  );
};

export default MainPage;
