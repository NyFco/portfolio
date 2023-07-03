import { AboutPage, MainPage } from '../pages';

export interface Path {
  path: string;
  page: JSX.Element;
}

const paths: Path[] = [
  {
    path: '/',
    page: <MainPage />,
  },
  {
    path: '/about',
    page: <AboutPage />,
  },
  {
    path: '/projects',
    page: <MainPage />,
  },
  {
    path: '/contact',
    page: <MainPage />,
  },
];

export default paths;
