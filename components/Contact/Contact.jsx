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
      <p className={styles.text}>
        You can also send me a message on{' '}
        <a
          href='https://twitter.com/allanladev'
          target='_blank'
          rel='noreferrer noopener'
        >
          <span className={styles.email}>
            <strong>Twitter</strong>
          </span>
        </a>
        !
      </p>
    </article>
  );
};
export default Contact;
