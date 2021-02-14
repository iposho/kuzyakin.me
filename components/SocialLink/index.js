import classnames from 'classnames';

import styles from './SocialLink.module.scss';

export default function SocialLink({ link, type }) {
  const imgClassName = classnames({
    [styles.socialIcon]: true,
    [styles[type]]: true,
  });

  return (
    <a href={link}>
      <img
        src={`/icons/${type}.svg`}
        className={imgClassName}
        alt={`${type} icon`}
      />
    </a>
  );
}
