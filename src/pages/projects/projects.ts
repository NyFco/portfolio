import deenee from '../../assets/projects/deenee.png';
import deeneePanel from '../../assets/projects/deeneePanel.png';
import electrosheriff from '../../assets/projects/electrosheriff.png';
import estimator from '../../assets/projects/estimator.png';
import gm from '../../assets/projects/gm.png';
import gmPanel from '../../assets/projects/gmPanel.png';
import officePanel from '../../assets/projects/officePanel.png';
import weblast from '../../assets/projects/weblast.png';

export type ProjectType = {
  id: number;
  name: string;
  theme: string;
  img: string;
  description?: string;
  url?: string;
};

const projects: ProjectType[] = [
  {
    id: 0,
    name: 'Deenee (Mobile App)',
    description: 'Online e-learning platform for new-schoolers',
    theme: '#DBC3FD',
    img: deenee,
    url: 'https://deeneeapp.com/',
  },
  {
    id: 1,
    name: 'Deenee (Admin Panel)',
    theme: '#DBC3FD',
    img: deeneePanel,
  },
  {
    id: 2,
    name: 'G&M Direct Hire (Mobile App)',
    description: 'London based PCO car rental application',
    theme: '#C8E3FE',
    img: gm,
    url: 'https://gmdirecthire.co.uk/',
  },
  {
    id: 3,
    name: 'G&M Direct Hire (Admin Panel)',
    theme: '#C8E3FE',
    img: gmPanel,
  },
  {
    id: 4,
    name: 'WeBlast',
    description: 'Official Website of WeBlast Ltd.',
    theme: '#5460C8',
    img: weblast,
    url: 'https://weblast.eu/',
  },
  {
    id: 5,
    name: 'WeBlast Estimator',
    description: "An online estimator for the projects' costs",
    theme: '#5460C8',
    img: estimator,
    url: 'https://quote.weblast.eu/',
  },
  {
    id: 6,
    name: 'Electrosheriff blog',
    description: 'Blog of electrosheriff.com',
    theme: '#FBB911',
    img: electrosheriff,
  },
  {
    id: 7,
    name: 'Office Panel',
    theme: '#ED3D34',
    img: officePanel,
  },
];

export default projects;
