import { GetStaticProps } from 'next';
import { getMentors } from '../services/mentors';
import Layout from '../components/layout/layout';

export default function Mentors() {
  return (
    <Layout>
      <h1>מנטורים</h1>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      mentors: getMentors(),
    },
  };
};
