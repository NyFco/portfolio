import { AboutPage, ContactPage, MainPage } from '../pages';

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
    page: <ContactPage />,
  },
];

export default paths;
