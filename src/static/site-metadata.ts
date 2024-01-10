interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "强锅 的 Running Page",
  siteUrl: 'https://adongtt.github.io/ckc/',
  logo: 'https://www.custombaseballgloves.com/static/images/ckc.jpg',
  description: 'Personal site and blog',
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
