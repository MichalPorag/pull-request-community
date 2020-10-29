import { mdiFacebook, mdiGithub, mdiLinkedin, mdiTwitter, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { IPerson } from '../services/people';
import styles from './person-card.module.css';

interface IPersonProps {
  person: IPerson;
}

export function PersonCard({ person }: IPersonProps) {
  const personColor = `rgba(${person.colors[0]}, ${person.colors[1]}, ${person.colors[2]}, 0.4)`;
  return (
    <article id={`profile-${person.github}`} style={{ ['--backgroundColor' as any]: personColor }}>
      <section>
        <img src={`https://github.com/${person.github}.png?size=200`} className={styles.avatar} />
        <h2>{person.name}</h2>
        <ul className={styles.socialNetworkList}>
          {}
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
        </ul>
      </section>
      <p>{person.description}</p>
    </article>
  );
}
