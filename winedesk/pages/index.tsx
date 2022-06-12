import type { NextPage } from 'next';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Body from '../components/Body';
import Header from '../components/Header';

export const StyledGlobal = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F5F5F5;
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
        <link href="http://fonts.cdnfonts.com/css/lato?styles=17388,17381" rel="stylesheet" />
      </Head>
      <StyledGlobal />
      <Header />
      <Body />
    </>
  );
};

export default Home;
