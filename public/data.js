export const about = {
  name: { first: 'Allan', last: 'Lalangan' },
  alias: 'Allan LaDev',
  title: 'Front End Developer',
  greeting: 'Hello World. I am',
  brief:
    'I build responsive, and beautifully designed websites that are easy to use.',
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
import projectMe from '../assets/project-me.png';
import mma from '../assets/mma.png';

export const projects = [
  {
    title: 'Nomad Travel',
    description:
      'Locate and filter popular restaurants, hotels, and attractions anywhere in the world.',
    tech: ['react', 'material ui', 'google apis', 'rest api'],
    image: { src: nomad, alt: '' },
    repo: 'https://github.com/allanlalangan/nomad-travel',
    url: 'https://nononomad.netlify.app/',
    complete: false,
  },
  {
    title: 'Martial Arts Academy',
    description:
      'A responsive landing page design for a high level martial arts gym.',
    tech: ['next', 'tailwind css'],
    image: { src: mma, alt: '' },
    repo: 'https://github.com/allanlalangan/martial-masters-academy',
    url: 'https://mm-acdmy.netlify.app/',
    complete: true,
  },
  {
    title: 'project.Me',
    description: 'A fullstack to-do list app. Registered users can save goals.',
    tech: [
      'express',
      'mongodb',
      'react',
      'react router',
      'sass',
      'redux',
      'web tokens',
      'rest api',
    ],
    image: { src: projectMe, alt: '' },
    repo: 'https://github.com/allanlalangan/dashboard',
    url: 'https://ladev-projectme.netlify.app',
    complete: false,
  },
];

export const otherProjects = [
  {
    title: 'Personal Portfolio',
    description: 'This static portfolio site is built with Next.js.',
    tech: ['next', 'sass'],
    repo: 'https://github.com/allanlalangan/portfolio',
    url: '/',
    complete: false,
  },
];
