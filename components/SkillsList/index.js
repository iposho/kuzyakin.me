import { v4 as uuid } from 'uuid';

import styles from './SkillsList.module.scss';

export default function SkillsList({ skills }) {
  return (
    <ul className={styles.skills}>
      {
        skills.map((i) => (
          <li key={uuid()}>
            {i.name}
          </li>
        ))
      }
    </ul>
  );
}
