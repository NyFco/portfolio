import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled.h3(
  {
    fontWeight: 100,
    color: '#ccc',
    cursor: 'pointer',
  },
  () => `
&:hover {
  color: #fff;
  transition: ease 0.3s all
}
`
);

const Name = styled.h2(
  { display: 'flex', gap: 5, cursor: 'pointer' },
  () => `
  &:hover {
    color: #ccc;
    transition: ease 0.3s all
  }
`
);

const LastName = styled.span(
  ({ theme }) => `
  display: none;
  ${theme.breakpoints.sm} {
    display: block;
  }
`
);

const Header: React.FC = () => {
  const navigate = useNavigate();
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
      <Name
        onClick={() => {
          navigate('/');
        }}
      >
        <FormattedMessage id="name.firstname" />
        <LastName>
          <FormattedMessage id="name.lastname" />
        </LastName>
      </Name>
      <Link
        onClick={() => {
          navigate('/about');
        }}
        style={{ fontWeight: 100 }}
      >
        <FormattedMessage id="about" />
      </Link>
      <Link
        onClick={() => {
          navigate('/projects');
        }}
      >
        <FormattedMessage id="projects" />
      </Link>
      <Link
        onClick={() => {
          navigate('/contact');
        }}
      >
        <FormattedMessage id="contact" />
      </Link>
    </header>
  );
};

export default Header;
