import { MainPage } from '../pages';

export interface Path {
  path: string;
  page: JSX.Element;
}

const paths: Path[] = [
  {
    path: '/',
    page: <MainPage />,
  },
];

export default paths;
