import Head from 'next/head';
import styles from './index.module.scss';
import { projects, otherProjects } from '../public/data';

// components
import { Hero, SkillsBanner, ProjectCard, About, Contact } from '../components';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../store/ThemeContextProvider';
import Skills from '../components/Skills/Skills';
import OtherProject from '../components/OtherProject/OtherProject';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

const Home = () => {
	const { theme } = useContext(ThemeContext);

	const projectsRef = useRef();
	const skillsRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	// useEffect(() => {
	//   console.log(projectsRef.current);
	// });
	return (
		<>
			<Head>
				<title>Allan Lalangan | Front-end Engineer</title>
				<link
					rel='icon'
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👹</text></svg>"
				/>
				<meta
					name='description'
					content='Allan Lalangan Software Engineer Portfolio'
				/>
			</Head>
			<>
				<Header
					projectsRef={projectsRef}
					skillsRef={skillsRef}
					aboutRef={aboutRef}
					contactRef={contactRef}
				/>

				<Hero projectsRef={projectsRef} />

				<h1
					ref={projectsRef}
					className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']} ${styles['projects-heading']}`}
				>
					Recent Projects
				</h1>
				<section className={styles.projects}>
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
					{/* {otherProjects.map((project) => (
            <OtherProject key={project.title} project={project} />
          ))} */}
				</section>
				<SkillsBanner />

				<h1 ref={skillsRef} className={`${styles[theme]} ${styles.heading}`}>
					Skills
				</h1>
				<Skills />

				<h1 ref={aboutRef} className={`${styles[theme]} ${styles.heading}`}>
					More About Me
				</h1>
				<section className={styles.about}>
					<About />
				</section>

				<h1
					className={`${styles[theme]} ${styles.heading} ${styles['contrast-heading']}`}
				>
					Contact
				</h1>
				<section ref={contactRef} className={styles.contact}>
					<Contact />
				</section>
				<Footer />
			</>
		</>
	);
};

export default Home;
