import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '../../components/Header';
import { StyledGlobal } from '../../pages/';
import { StyledMain } from '../../components/Body';
import { StyledAside } from '../../components/BodyCategories';
import { StyledArticle } from '../../components/BodyPagination';
import Head from 'next/head';

const StyledLinkBack = styled.a`
  text-decoration: none;
  color: #111111;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 400;
  & > img {
    margin-right: 15%;
  }
`;

const StyledP = styled.p`
  & > em {
    font-style: normal;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #c81a78;
  }
  & > em:nth-child(3) {
    color: #888888;
  }
`;

const StyleArticleExtend = styled(StyledArticle)`
  & {
    width: 80%;
  }

  & > div {
    padding: 2% 0;
  }

  & > div {
    display: flex;
    gap: 15%;
  }

  & h1 {
    font-family: Lato;
    font-weight: 700;
    font-size: 30px;
    color: #111111;
    margin: 0;
  }
`;

const StyledDiv = styled.div`
  & > div:nth-child(4) {
    font-family: 'Lato';
    font-size: 24px;

    & > h2 {
      color: #c81a78;
      margin-bottom: 0;

      & span {
        font-size: 46px;
      }
    }
    & > h3 {
      margin: 0;
      font-size: 16px;
      color: #888;
    }
  }

  & > div:nth-child(5) {
    font-family: 'Neo Sans Std Tr', sans-serif;

    & > p {
      font-family: 'Saira';
    }
  }
`;

const StyledUl = styled.ul`
  & {
    list-style-type: none;
    display: flex;
    padding: 0;
    align-items: center;
  }

  & li {
    margin-right: 10px;
    font-family: 'Lato';
    font-size: 15px;
    font-weight: 400;
    color: #555555;
    display: flex;
  }

  & li > img {
    width: 16px;
    height: 16px;
  }
`;

const StyledButtonAdd = styled.div`
  background: #7ebc43;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  width: 60%;
  align-items: center;
  height: 56px;

  & {
    display: flex;
    justify-content: space-evenly;

    & > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 30%;

      & > em {
        font-style: normal;
        font-weight: 400;
        font-family: 'Lato';

        color: white;
      }
    }

    & > hr {
      border: 1px solid white;
      height: 33px;
      opacity: 0.1;
      margin: 0;
    }

    & > button {
      border: none;
      font-family: 'Lato';
      font-weight: 700;
      font-size: 16px;
      color: white;
      background-color: transparent;
    }
  }
`;

const StyledButtonAddDescrease = styled.div`
  background-image: url('/Rectangle-desactive.svg');
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 4px 12px;
`;

const StyledButtonAddIncrease = styled.div`
  background-image: url('/Rectangle-active.svg');
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  padding: 4px 10px;
`;

export default function About() {
  const router = useRouter();

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
        <link href='http://fonts.cdnfonts.com/css/saira' rel='stylesheet' />
      </Head>
      <StyledGlobal />
      <Header />
      <StyledMain>
        <StyledAside style={{ width: '10%' }}>
          <Link href='/'>
            <StyledLinkBack>
              <img src='/backArrow.svg' alt='voltar para página anterior' />
              Voltar
            </StyledLinkBack>
          </Link>
        </StyledAside>
        <StyleArticleExtend>
          <div>
            <div>
              <img
                src='https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png'
                alt='teste'
              />
            </div>
            <StyledDiv>
              <StyledP>
                <em>Vinhos</em> &gt; <em>Estados Unidos</em> &gt; <em>Califórnia</em>
              </StyledP>
              <h1>Apothic Red 2019</h1>
              <StyledUl>
                <li>
                  <img
                    src='https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg'
                    alt='country'
                  />
                </li>
                <li>Estados Unidos</li>
                <li>Tinto</li>
                <li>Meio Seco/Demi-Sec</li>
                <li>750 ml</li>
                <li>
                  <img src='/star-solid-gray.svg' />
                  <img src='/star-solid-gray.svg' />
                  <img src='/star-solid-gray.svg' />
                </li>
                <span>(2)</span>
                <span></span>
              </StyledUl>
              <div>
                <h2>
                  R$<span>63</span>,67
                </h2>
                <h3>NÃO SÓCIO R$ 120,95/un.</h3>
              </div>
              <div>
                <h3>Comentário do Sommelier</h3>
                <p>
                  Produzido no terroir californiano, esse tinto mescla as variedades
                  Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
                  inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
                  misterioso onde há mais de 800 anos os viticultores misturavam e
                  armazenavam seus cobiçados vinhos.
                </p>
              </div>
              <StyledButtonAdd>
                <span>
                  <StyledButtonAddDescrease>-</StyledButtonAddDescrease>
                  <em>1</em>
                  <StyledButtonAddIncrease>+</StyledButtonAddIncrease>
                </span>
                <hr />
                <button>Adicionar</button>
              </StyledButtonAdd>
            </StyledDiv>
          </div>
        </StyleArticleExtend>
      </StyledMain>
    </>
  );
}
