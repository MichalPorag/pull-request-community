import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/layout/layout';
import { PersonCard } from '../components/person-card/person-card';
import { getPeople, IPerson } from '../services/people';
import styles from '../styles/Home.module.scss';
import { randomShuffle } from '../utils/randomShuffle';

interface IHomeProps {
  people: IPerson[];
}

export default function Home({ people }: IHomeProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards__wrapper}>
          {people.map((person, i) => (
            <PersonCard key={person.name + i} person={person} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: randomShuffle(getPeople()),
    },
  };
};
