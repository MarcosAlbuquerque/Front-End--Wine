import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Style from '../../styles';
import {
  ArticleExtend,
  ButtonAdd,
  ButtonAddDescrease,
  ButtonAddIncrease,
  Div,
  LinkBack,
  P,
  Ul,
} from '../../styles/body/Product';

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
      <Style.Global />
      <Header />
      <Style.Body.Section>
        <Style.Body.Categories.Aside style={{ width: '10%' }}>
          <Link href='/'>
            <LinkBack>
              <img src='/backArrow.svg' alt='voltar para página anterior' />
              Voltar
            </LinkBack>
          </Link>
        </Style.Body.Categories.Aside>
        <ArticleExtend>
          <div>
            <div>
              <img
                src='https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png'
                alt='teste'
              />
            </div>
            <Div>
              <P>
                <em>Vinhos</em> &gt; <em>Estados Unidos</em> &gt; <em>Califórnia</em>
              </P>
              <h1>Apothic Red 2019</h1>
              <Ul>
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
              </Ul>
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
              <ButtonAdd>
                <span>
                  <ButtonAddDescrease>-</ButtonAddDescrease>
                  <em>1</em>
                  <ButtonAddIncrease>+</ButtonAddIncrease>
                </span>
                <hr />
                <button>Adicionar</button>
              </ButtonAdd>
            </Div>
          </div>
        </ArticleExtend>
      </Style.Body.Section>
    </>
  );
}
