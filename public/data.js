export const about = {
  name: { first: 'Allan', last: 'Lalangan' },
  alias: 'Allan LaDev',
  title: 'Front End Developer',
  greeting: 'Hello World. I am',
  brief:
    'I build responsive and beautifully designed websites that are easy to use.',
  actionCall: 'View my work',
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

import nomad from '../assets/nomad-travel.png';
import dashboard from '../assets/dashboard.png';
import mma from '../assets/mma.png';

export const projects = [
  {
    title: 'Martial Masters Academy',
    description:
      'A responsive landing page design for the best martial arts gym in all of Portland.',
    tech: ['next', 'tailwind css'],
    image: { src: mma, alt: '' },
    repo: 'https://github.com/allanlalangan/martial-masters-academy',
    url: 'https://mma-acdmy.netlify.app/',
    complete: true,
  },
  {
    title: 'Nomad Travel',
    description:
      'Locate and filter popular restaurants, hotels, and attractions anywhere in the world. Implements multiple REST APIs.',
    tech: ['react', 'css', 'material ui', 'google platform', 'rest api'],
    image: { src: nomad, alt: '' },
    repo: 'https://github.com/allanlalangan/nomad-travel',
    url: 'https://nononomad.netlify.app/',
    complete: false,
  },
  {
    title: 'project.Me',
    description:
      'A fullstack to-do list app. Registered users can save goals. Currently building backend.',
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
    repo: 'https://github.com/allanlalangan/dashboard',
    url: null,
    complete: false,
  },
];

export const otherProjects = [
  {
    title: 'Personal Portfolio',
    description:
      'This static portfolio site is created with Next.js and styled with SASS.',
    tech: ['next', 'sass'],
    repo: 'https://github.com/allanlalangan/portfolio',
    url: '/',
    complete: false,
  },
];
