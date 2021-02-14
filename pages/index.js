import SocialLink from '../components/SocialLink/index';
import { APP_DATE_START, APP_DESCRIPTION, APP_NAME } from '../config/constants';
import socialLinks from '../config/socialLinks';
import { version } from '../package.json';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img
          src="/images/avatar.png"
          className={styles.avatar}
          alt="Logo"
        />
        <h1 className={styles.title}>
          {APP_NAME}
        </h1>

        <p className={styles.description}>
          {APP_DESCRIPTION}
        </p>

        <ul className={styles.links}>
          {
            socialLinks.map((i) => <li key={Math.random()}><SocialLink type={i.type} link={i.link} /></li>)
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerCol}>
          &copy;
          {' '}
          {APP_DATE_START}
          &mdash;
          {new Date().getFullYear()}
        </div>
        <div className={styles.footerCol}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            {' '}
            <img src="/icons/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.footerCol}>
          v.
          {' '}
          {version}
        </div>
      </footer>
    </div>
  );
}
