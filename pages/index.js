import classnames from 'classnames';
import SkillsList from 'components/SkillsList';
import SocialLink from 'components/SocialLink/index';
import appConfig from 'config/appConfig';
import skills from 'config/skills';
import socialLinks from 'config/socialLinks';
import { useState } from 'react';
import styles from 'styles/Home.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [count, setCount] = useState(0);

  const avatarStyles = classnames({
    [styles.avatar]: true,
    [styles.animateAvatar]: count >= 7,
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img
          src="/images/avatar.png"
          className={avatarStyles}
          alt="Logo"
          onClick={() => setCount(0)}
        />
        <h1 className={styles.title}>
          {appConfig.name}
        </h1>

        <p className={styles.description}>
          {appConfig.description}
        </p>

        <p className={styles.location}>
          {appConfig.location}
        </p>

        <SkillsList skills={skills} />

        <ul className={styles.links}>
          {
            socialLinks.map((i) => (
              <li key={uuidv4()}>
                <SocialLink type={i.type} link={i.link} />
              </li>
            ))
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerCol}>
          &copy;
          {' '}
          {appConfig.since}
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
        <div className={styles.footerCol} onClick={() => setCount(count + 1)}>
          v.
          {' '}
          {appConfig.version}
        </div>
      </footer>
    </div>
  );
}
