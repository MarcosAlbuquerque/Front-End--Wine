import Image from 'next/image'
import styled from 'styled-components'
import ButtonCart from './HeaderButtonCart'
import ButtonFind from './HeaderButtonFind'
import ButtonProfile from './HeaderButtonProfile'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StyledNav = styled.nav`
  padding-right: 30px;
  display: flex;
  gap: 7%;
  width: 70%;
`

const StyledA = styled.a`
  font-family: 'Neo Sans Std TR', sans-serif;
  font-size: 18px;
  gap: 24px;
  color: #555555;
  padding: 30px 0;
  border-bottom: 3px solid #fff;
  text-decoration: none;


  &:hover {
      color: #D14B8F;
      border-bottom: 3px solid #D14B8F;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap 10px;
`


export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Image alt="Logo principal" src="/logo.svg" width={100} height={26.75} />
        <StyledA as="a" href="/clube">Clube</StyledA>
        <StyledA style={{ color: '#D14B8F', borderBottom: '3px solid #D14B8F' }} as="a" href="/loja">Loja</StyledA>
        <StyledA as="a" href="/produtores">Produtores</StyledA>
        <StyledA as="a" href="/ofertas">Ofertas</StyledA>
        <StyledA as="a" href="/eventos">Eventos</StyledA>
      </StyledNav>
      <StyledDiv>
        <ButtonFind />
        <ButtonProfile />
        <ButtonCart />
      </StyledDiv>
    </StyledHeader>
  )
} 
