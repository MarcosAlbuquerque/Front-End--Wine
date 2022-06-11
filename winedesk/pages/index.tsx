import type { NextPage } from 'next';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

const StyledGlobal = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine-Desktop</title>
        <meta name='description' content='Desafio tecnico Wine' />
        <link rel='icon' href='/favicon.ico' />
        <link href="http://fonts.cdnfonts.com/css/neo-sans-std-tr?styles=27758" rel="stylesheet" />
      </Head>
      <StyledGlobal />
      <Header />
    </>
  );
};

export default Home;
