interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '强锅的骑跑世界',
  siteUrl: 'https://adongtt.github.io/ckc/',
  logo: 'https://www.custombaseballgloves.com/static/images/ckc.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/ckc/',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/ckc/',
    },
  ],
};

export default data;
