import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Link = styled.h3({
  fontWeight: 100,
  color: '#ccc',
});

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        padding: '20px 15px',
        boxShadow: '0 0 32px 0 #aaa',
      }}
    >
      <h2>
        <FormattedMessage id="name.fullname" />
      </h2>
      <Link style={{ fontWeight: 100 }}>
        <FormattedMessage id="about" />
      </Link>
      <Link>
        <FormattedMessage id="projects" />
      </Link>
      <Link>
        <FormattedMessage id="contact" />
      </Link>
    </header>
  );
};

export default Header;
