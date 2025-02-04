
type Project = {
  githubLink?: string;
  liveLink?: string;
  appleStoreLink?: string;
  playStoreLink?: string;
  image: string;
  name: string;
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
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth',
        liveLink: 'https://greenearth1.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 1.0',
      },
      {
        appleStoreLink: 'xyz',
        playStoreLink: 'xyz',
        githubLink: 'xyz',
        image: 'https://i.pinimg.com/736x/4c/1b/f6/4c1bf632587c440059b3717567e6798b.jpg',
        name: 'Whatsapp clone',
      },
      {
        githubLink: '',
        liveLink: '',
        image: 'https://i.pinimg.com/736x/4c/1b/f6/4c1bf632587c440059b3717567e6798b.jpg',
        name: 'Draaw.xyz',
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
      },
      {
        appleStoreLink: 'https://apps.apple.com/in/app/wyvate/id6740251470',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.wyvate_native&pcampaignid=web_share',
        image: '/wyvate.png',
        name: 'Wyvate Customer App (Android & iOS)',
      },
    ],
  },
];
