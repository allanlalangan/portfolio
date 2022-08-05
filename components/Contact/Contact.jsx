import Link from 'next/link';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <article className={styles.container}>
      <p className={styles.text}>
        <strong>
          I am currently available for employment and freelance work.{' '}
        </strong>
        If we seem like a good fit, please get in touch! Contact me at{' '}
        <Link href='mailto:allanlalangan@gmail.com'>
          <span className={styles.email}>
            <strong>allanlalangan@gmail.com</strong>
          </span>
        </Link>
        , tell me about your project!
      </p>
    </article>
  );
};
export default Contact;
