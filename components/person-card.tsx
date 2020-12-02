import { mdiFacebook, mdiGithub, mdiLinkedin, mdiStackOverflow, mdiTwitter, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { IPerson } from '../services/people';
import styles from './person-card.module.css';

interface IPersonProps {
  person: IPerson;
}

export function PersonCard({ person }: IPersonProps) {
  return (
    <article id={`profile-${person.github}`}>
      <h2>{person.name}</h2>
      <img src={`https://github.com/${person.github}.png?size=200`} className={styles.avatar} />
      <p>{person.description}</p>
      <a href={`https://github.com/${person.github}`} target="_blank" rel="noopener noreferrer">
        <Icon path={mdiGithub} size={1.5} />
      </a>
      {person.twitter && (
        <a href={person.twitter} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiTwitter} size={1.5} />
        </a>
      )}
      {person.linkedin && (
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiLinkedin} size={1.5} />
        </a>
      )}
      {person.website && (
        <a href={person.website} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiWeb} size={1.5} />
        </a>
      )}
      {person.facebook && (
        <a href={person.facebook} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiFacebook} size={1.5} />
        </a>
      )}
      {person.stackoverflow && (
        <a href={person.stackoverflow} target="_blank" rel="noopener noreferrer">
          <Icon path={mdiStackOverflow} size={1.5} />
        </a>
      )}
    </article>
  );
}
