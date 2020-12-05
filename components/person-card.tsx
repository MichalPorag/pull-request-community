import { mdiFacebook, mdiGithub, mdiLinkedin, mdiStackOverflow, mdiTwitter, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { IPerson } from '../services/people';
import styles from './person-card.module.css';
import { IconLinked, IIconLinked } from './icon-linked';

interface IPersonProps {
  person: IPerson;
}
export function PersonCard({ person }: IPersonProps) {
  const style = {
    flex: '1 0 21%',
    margin: 5,
  };
  const icons: Record<string, IIconLinked> = {
    [person.twitter]: {
      color: '#55ACEE',
      href: person.twitter,
      icon: mdiTwitter,
    },
    [person.linkedin]: {
      color: '#006192',
      href: person.linkedin,
      icon: mdiLinkedin,
    },
    [person.website]: {
      href: person.website,
      icon: mdiWeb,
    },
    [person.facebook]: {
      color: '#1778F2',
      href: person.facebook,
      icon: mdiFacebook,
    },
    [person.stackoverflow]: {
      color: '#FF9C11',
      href: person.stackoverflow,
      icon: mdiStackOverflow,
    },
  };
  return (
    <article id={`profile-${person.github}`} style={style}>
      <h2>{person.name}</h2>
      <img src={`https://github.com/${person.github}.png?size=200`} className={styles.avatar} />
      <p>{person.description}</p>
      <a href={`https://github.com/${person.github}`} target="_blank" rel="noopener noreferrer">
        <Icon path={mdiGithub} size={1.5} color="#211F1F" />
      </a>
      {Object.entries(icons)
        .filter(([key]) => key !== 'undefined')
        .map(([key, value]) => (
          <IconLinked color={value?.color} href={value.href} icon={value.icon} key={key} />
        ))}
    </article>
  );
}
