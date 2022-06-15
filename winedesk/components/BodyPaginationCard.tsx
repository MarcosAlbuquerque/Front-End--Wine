/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import Link from 'next/link';
import { IDataAPIItems } from '../interfaces';
import { Div, Span, SpanMoney, P, Button } from '../styles/body/pagination/card';

export default function BodyPaginationCard({
  discount,
  flag,
  image,
  name,
  price,
  priceMember,
  priceNonMember,
}: IDataAPIItems) {
  return (
    <div>
      <Div>
        <Span>
          <img src={image} alt={name} />
        </Span>
        <img src={flag} alt='flag' />
        <h1>{name}</h1>
        <P>
          R$ {price}
          <em>{discount}% OFF</em>
        </P>
        <P>
          Sócio wine{' '}
          <strong>
            R$ <SpanMoney>{priceMember}</SpanMoney>,00
          </strong>
        </P>
        <P>Não sócio R$ {priceNonMember}</P>
      </Div>
      <Link href='/vinhos/1'>
        <Button>Adicionar</Button>
      </Link>
    </div>
  );
}
