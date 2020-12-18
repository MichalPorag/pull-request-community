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
        <h1 className={styles.title}>
          קהילת <a href="http://facebook.com/groups/pullrequest">Pull Request</a>
        </h1>

        <section id="about">
          <h2>מי אנחנו?</h2>
          קהילה זו נועדה לקשר בין מפתחים שרוצים לתרום לקוד פתוח ופרויקטים שזקוקים לתרומה וחרטה על
          דגלה להנגיש את התרומה לקוד פתוח ולהפוך אותה לקלה ונעימה 😊
        </section>
        <section id="join">
          <h2>הצטרף/י אלינו!</h2>
          <p>
            ניתן להוסיף את עצמכם/ן לrepository שלנו בגיט&nbsp;
            {/* prettier-ignore */}
            <a
              href="https://github.com/urish/pull-request-community#adding-your-profile"
              target="_blank"
              rel="noopener noreferrer">
              <u>כאן</u>
            </a>
          </p>
        </section>
        <section id="people">
          {fitleredPeople.map((person) => (
            <PersonCard key={person.github} person={person} />
          ))}
        </section>
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
