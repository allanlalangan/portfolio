export const about = {
  name: 'Allan Lalangan',
  alias: 'Allan LaDev',
  title: 'Front End Developer',
  greeting: 'Hello, World! I am',
  brief: 'Responsive, beautiful, intuitive and fun user experiences',
  brief_2: 'I build things!',
  actionCall: 'View my work',
  actionCall_2: "Let's build something together! ",
  actionCall_3: 'I can show you better than I can tell you...',
  cv: '/',
};

export const contact = {
  me: { email: 'allanlalangan@gmail.com', phone: '666-420-1312' },
  socialMedia: [
    { name: 'linkedin', icon: '', url: '/' },
    { name: 'instagram', icon: '', url: '/' },
    { name: 'github', icon: '', url: 'https://github.com/allanlalangan' },
  ],
};

export const skills = [
  {
    name: 'html',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'css',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'javascript',
    icon: '',
    category: 'language',
    caption: 'base',
    favorite: false,
  },
  {
    name: 'node.js',
    icon: '',
    category: 'language',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'express',
    icon: '',
    category: 'framework',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'node.js',
    icon: '',
    category: 'language',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'mongoDb',
    icon: '',
    category: 'database',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'mongoose',
    icon: '',
    category: 'framework',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'react',
    icon: '',
    category: 'framework',
    caption: '',
    favorite: true,
  },
  { name: 'redux', icon: '', category: 'tool', caption: '', favorite: false },
  {
    name: 'next.js',
    icon: '',
    category: 'framework',
    caption: '',
    favorite: true,
  },
  {
    name: 'materialui',
    icon: '',
    category: 'library',
    caption: '',
    favorite: false,
  },
  {
    name: 'framer motion',
    icon: '',
    category: 'library',
    caption: 'animation',
    favorite: false,
  },
  {
    name: 'github',
    icon: '',
    category: 'version control',
    caption: '',
    favorite: false,
  },
  {
    name: 'git',
    icon: '',
    category: 'version control',
    caption: '',
    favorite: false,
  },
  {
    name: 'npm',
    icon: '',
    category: 'package manager',
    caption: '',
    favorite: false,
  },
  {
    name: 'axios',
    icon: '',
    category: 'tool',
    caption: 'http requests',
    favorite: false,
  },
  { name: 'rest', icon: '', category: 'tool', caption: '', favorite: false },
  {
    name: 'firebase',
    icon: '',
    category: 'service',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'stripe',
    icon: '',
    category: 'payments',
    caption: 'beginner',
    favorite: false,
  },
  {
    name: 'json web tokens',
    icon: '',
    category: 'authentication',
    caption: 'beginner',
    favorite: false,
  },
];

export const projects = [
  {
    title: 'Nomad Travel',
    description:
      'SPA created with GoogleMaps and Travel APIs. Fetches popular restaurants, hotels, and attractions within map window boundaries. Autocomplete search allows users to quickly search and navigate anywhere on the map. Places marked on the map can be filtered by rating, price and other categories.',
    tech: ['reactjs', 'css', 'materialui', 'api', 'google maps'],
  },
  {
    title: 'project.Me',
    description:
      'A fullstack to-do list app allows registered users to save tasks, goals, and other activities. Users progress through goals as tasks are completed. Basic backend stores and protects unique user data in a database.',
    tech: ['express', 'mongoDb', 'reactjs', 'css', 'redux', 'api', 'jwt'],
  },
  {
    title: 'La Bodega',
    description:
      'E-commerce app for pop up shop. Users can add items to their cart, and rate and review products. Client admins can post future events, manage users, and manage products with Shopify and headless CMS',
    tech: ['nextjs', 'scss', 'stripe'],
  },
  {
    title: 'Martial Masters Academy',
    description:
      'A responsive landing page I made for my dear friends, who happen to run the best martial arts gym in all of Portland.',
    tech: ['next.js', 'react', 'css', 'api', 'stripe'],
  },
  {
    title: 'Portfolio',
    description:
      'This website was built with NextJS. Styled and designed by me with CSS3. An ongoing labor of love.',
    tech: ['nextjs', 'css', 'framer motion'],
  },
];
