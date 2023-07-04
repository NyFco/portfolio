import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div({
  animation: 'rgbShadow 4s linear infinite',
  backdropFilter: 'blur(10px)',
  margin: '40px 20px',
  padding: '50px',
  borderRadius: '20px',
});

const RGBLayout = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return <Layout style={style}>{children}</Layout>;
};

export default RGBLayout;
