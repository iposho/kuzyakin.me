import { v4 as uuidv4 } from 'uuid';

import styles from './SkillsList.module.scss';

export default function SkillsList({ skills }) {
  return (
    <ul className={styles.skills}>
      {
        skills.map((i) => (
          <li key={uuidv4()}>
            {i.name}
          </li>
        ))
      }
    </ul>
  );
}
