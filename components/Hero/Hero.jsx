import { useContext } from "react";
import { about } from "../../public/data";
import { ThemeContext } from "../../store/ThemeContextProvider";
import styles from "./Hero.module.scss";

const Hero = ({ projectsRef }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<div className={`${styles.pattern} ${styles[theme]}`}></div>
			<section className={styles["hero"]}>
				<article className={styles["hero-text"]}>
					<p className={styles.greeting}>{about.greeting}</p>
					<h1 className={`${styles[theme]} ${styles.name}`}>
						<span className={styles.first}>{about.name.first}</span>
						<span className={styles.last}> {about.name.last}</span>
					</h1>
					<span className={`${styles[theme]} ${styles.title}`}>
						{about.title}
					</span>
					<p className={styles.brief}>{about.brief}</p>
				</article>
				<button
					onClick={() => {
						projectsRef.current.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					}}
					className={`${styles["action-button"]} ${styles[theme]}`}
				>
					{about.actionCall}
				</button>
			</section>
		</>
	);
};
export default Hero;
