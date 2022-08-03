export const about = {
  name: { first: 'Allan', last: 'Lalangan' },
  alias: 'Allan LaDev',
  title: 'Front End Developer',
  greeting: 'Hello, World! I am',
  brief:
    'I build responsive and beautifully designed websites that are easy to use.',
  brief_2: 'I build things!',
  actionCall: 'View my work',
  actionCall_2: 'Get in touch',
  actionCall_3: 'I can show you better than I can tell you...',
  cv: '/',
};

export const contact = {
  me: { email: 'allanlalangan@gmail.com', phone: '666-420-1312' },
  socialMedia: [
    { name: 'linkedin', icon: '', url: '/' },
    { name: 'twitter', icon: '', url: '/' },
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

import nomad from '../assets/nomad-travel.png';
import dashboard from '../assets/dashboard.png';
import mma from '../assets/mma.png';

export const projects = [
  {
    title: 'Nomad Travel',
    description:
      'Locate and filter popular restaurants, hotels, and attractions anywhere in the world.',
    tech: ['react', 'css', 'material ui', 'google platform', 'rest api'],
    image: { src: nomad, alt: '' },
  },
  {
    title: 'project.Me',
    description:
      'A fullstack to-do list app. Registered users can save goals..and view the weather.',
    tech: [
      'express',
      'mongodb',
      'react',
      'react router',
      'sass',
      'redux',
      'web tokens',
    ],
    image: { src: dashboard, alt: '' },
  },
  {
    title: 'Martial Masters Academy',
    description:
      'A responsive landing page for the best martial arts gym in all of Portland',
    tech: ['next', 'tailwind css', 'google platform', 'headless cms', 'seo'],
    image: { src: mma, alt: '' },
  },
  // {
  //   title: 'La Bodega',
  //   description: 'E-commerce app for pop up shop.',
  //   tech: ['next', 'sass', 'stripe'],
  //   image: { src: nomad, alt: '' },
  // },
  // {
  //   title: 'Portfolio',
  //   description: '',
  //   tech: ['next', 'sass'],
  //   image: { src: nomad, alt: '' },
  // },
];
