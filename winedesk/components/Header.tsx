import Image from 'next/image';
import ButtonCart from './HeaderButtonCart';
import ButtonFind from './HeaderButtonFind';
import ButtonProfile from './HeaderButtonProfile';
import Style from '../styles';
import { A, Div } from '../styles/header';

export default function Header() {
  return (
    <Style.Header.Header>
      <Style.Header.Nav>
        <Image alt='Logo principal' src='/logo.svg' width={100} height={26.75} />
        <A as='a' href='/clube'>
          Clube
        </A>
        <A
          style={{ color: '#D14B8F', borderBottom: '3px solid #D14B8F' }}
          as='a'
          href='/loja'
        >
          Loja
        </A>
        <A as='a' href='/produtores'>
          Produtores
        </A>
        <A as='a' href='/ofertas'>
          Ofertas
        </A>
        <A as='a' href='/eventos'>
          Eventos
        </A>
      </Style.Header.Nav>
      <Div>
        <ButtonFind />
        <ButtonProfile />
        <ButtonCart />
      </Div>
    </Style.Header.Header>
  );
}
