import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { IDataAPI } from '../interfaces';
import Body from '../components/Body';

const api = axios.create({ baseURL: 'https://wine-back-test.herokuapp.com' });

export async function getServerSideProps() {
  const result = await api.get('/products?page=1&limit=10');

  return { props: result.data };
}

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Wine-Desktop</title>
        <meta name='description' content='Desafio tecnico Wine' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='http://fonts.cdnfonts.com/css/neo-sans-std-tr?styles=27758'
          rel='stylesheet'
        />
        <link
          href='http://fonts.cdnfonts.com/css/lato?styles=17388,17381'
          rel='stylesheet'
        />
      </Head>
      <Body
        page={0}
        totalPages={0}
        itemsPerPage={0}
        totalItems={0}
        items={[]}
        {...props}
      />
    </>
  );
};

export default Home;
