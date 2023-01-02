import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContextProvider";
import styles from "./Footer.module.scss";

const Footer = () => {
	const { theme } = useContext(ThemeContext);
	const copyDate = new Date();
	return (
		<footer className={`${styles.container} ${styles[theme]}`}>
			<h2 className={styles.heading}>
				Designed and built by Allan Lalangan © {copyDate.getFullYear()}
			</h2>
		</footer>
	);
};
export default Footer;
