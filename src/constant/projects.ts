
type Project = {
  githubLink?: string;
  liveLink?: string;
  appleStoreLink?: string;
  playStoreLink?: string;
  image: string;
  name: string;
  id: string;
};

type ProjectsCategory = {
  title: string;
  projects: Project[];
};

export const projectsData: ProjectsCategory[] = [
  {
    title: 'Personal Projects',
    projects: [
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
        id: 'greenearth2',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth',
        liveLink: 'https://greenearth1.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 1.0',
        id: 'greenearth1',
      },
      {
        appleStoreLink: '',
        playStoreLink: '',
        liveLink: 'https://codebox-editor.vercel.app/',
        githubLink: 'https://github.com/ravi-gangwar/code-editor-backend.git',
        image: 'https://i.pinimg.com/736x/09/9c/92/099c92bf55b68a6a6b1e1f79aeaf1377.jpg',
        name: 'Code Editor',
        id: 'codeeditor',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/guideX.git',
        liveLink: '',
        image: 'https://i.pinimg.com/736x/a8/96/e7/a896e73429c7028d4dd5d0a5c53782ee.jpg',
        name: 'guideX',
        id: 'guidex',
      },
    ],
  },
  {
    title: 'Internship Projects',
    projects: [
      {
        liveLink: 'https://app.wyvate.com/',
        image: '/wyvate.png',
        name: 'Wyvte Customer Web',
        id: 'wyvate-customer-web',
      },
      {
        appleStoreLink: 'https://apps.apple.com/in/app/wyvate/id6740251470',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.wyvate_native&pcampaignid=web_share',
        image: '/wyvate.png',
        name: 'Wyvate Customer App (Android & iOS)',
        id: 'wyvate-customer-app',
      },
    ],
  },
];
