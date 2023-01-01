import portrait from "../assets/portrait.png";

export const socialURLs = {
	twitter: "https://twitter.com/allanla_dev",
	linkedin: "https://www.linkedin.com/in/allan-lalangan/",
	github: "https://github.com/allanlalangan",
};

export const about = {
	name: { first: "Allan", last: "Lalangan" },
	alias: "Allan LaDev",
	title: "Software Developer",
	greeting: "Hello World. I am",
	brief:
		"I build responsive and beautifully designed full-stack web applications.",
	actionCall: "View my work",
	cv: "/",
	portrait,
};

export const contact = {
	me: { email: "allanlalangan@gmail.com" },
	socialMedia: [
		{ name: "linkedin", icon: "", url: "/" },
		{ name: "twitter", icon: "", url: "/" },
		{ name: "github", icon: "", url: "https://github.com/allanlalangan" },
	],
};

import nomad from "../assets/nomad-travel.png";
import projectMe from "../assets/project-me.png";
import mma from "../assets/mma.png";
import stars from "../assets/stars.png";

export const projects = [
	{
		title: "Stars Astro",
		description:
			"A niche social platform. Generate and post astrology charts. Share cosmic wisdom and/or nonsense.",
		tech: [
			"express",
			"mongodb",
			"react",
			"react router",
			"tailwind css",
			"redux",
			"web tokens",
			"rest api",
		],
		image: { src: stars, alt: "Stars Astrology dashboard page" },
		repo: "https://github.com/allanlalangan/stars",
		url: "https://stars-astro.netlify.app/",
		complete: true,
		demo: { email: "demo@demo", password: "Demo1234!" },
	},
	{
		title: "Nomad Travel",
		description:
			"Locate and filter popular restaurants, hotels, and attractions anywhere in the world.",
		tech: ["react", "material ui", "google apis", "rest api"],
		image: { src: nomad, alt: "Nomad Travel map with marker" },
		repo: "https://github.com/allanlalangan/nomad-travel",
		url: "https://nononomad.netlify.app/",
		complete: true,
	},
	{
		title: "Martial Arts Academy",
		description:
			"A responsive landing page design for a local martial arts gym.",
		tech: ["next", "tailwind css"],
		image: { src: mma, alt: "Martial Arts gym landing page" },
		repo: "https://github.com/allanlalangan/martial-masters-academy",
		url: "https://mm-acdmy.netlify.app/",
		complete: true,
	},
	{
		title: "project.Me",
		description: "A fullstack to-do list app. Registered users can save goals.",
		tech: [
			"express",
			"mongodb",
			"react",
			"react router",
			"sass",
			"redux",
			"web tokens",
			"rest api",
		],
		image: { src: projectMe, alt: "Project.me user goals page" },
		repo: "https://github.com/allanlalangan/dashboard",
		url: "https://ladev-projectme.netlify.app",
		complete: true,
		demo: { email: "demo@demo", password: "demo" },
	},
];

export const otherProjects = [
	{
		title: "Personal Portfolio",
		description:
			"This static portfolio site is built with Next.js. UI designed by me.",
		tech: ["next", "sass"],
		repo: "https://github.com/allanlalangan/portfolio",
		url: "/",
		complete: true,
	},
];
