import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PersonCard } from '../components/person-card';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.css';
import { randomShuffle } from '../utils/randomShuffle';

interface IHomeProps {
  people: IPerson[];
}

export default function Home({ people }: IHomeProps) {
  const router = useRouter();
  const filter = new Set((router.query.f as string)?.split(','));

  const fitleredPeople =
    filter.size > 0 ? people.filter((person) => filter.has(person.github)) : people;

  return (
    <div className={styles.container}>
      <Head>
        <title>קהילת Pull Request</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <h1 className={styles.title}>
            קהילת <a href="http://facebook.com/groups/pullrequest">Pull Request</a>
          </h1>

          <a
            href="https://github.com/urish/pull-request-community#adding-your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <Icon path={mdiGithub} size={1} /> הוסיפו את עצמכם
          </a>
        </nav>
        <div className={styles.membersWarper}>
          <ul className={styles.membersContainer}>
            {fitleredPeople.map((person) => (
              <PersonCard key={person.github} person={person} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: randomShuffle(getPeople()),
    },
  };
};
