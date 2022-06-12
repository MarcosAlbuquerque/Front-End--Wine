/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import Link from 'next/link'

const StyledDiv = styled.div`
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Lato;
    padding: 0 15px;
    box-sizing: border-box;

    & > h1 {
      margin-bottom: 10px;
      font-size: 16px;
    }

    & > img {
      width: 30px;
      float:right;
      position: relative;
      top: -41px;
      margin-bottom: -30px;
      left: 90px;
    }
`

const StyledSpan = styled.span`
  display:flex;
  justify-content: center;
  width: 198px;
  height: 178px;
  margin: 5px 0;

  & > img {
    height: inherit;
  }
`

const StyledP = styled.p`
  margin: 0;
  font-weight: bold;
  color: #888888;
  font-size: 11px;
  text-transform: uppercase;

  & > em {
    background-color: #F79552;
    padding: 2px 5px;
    border-radius: 5px;
    color: white;
    margin-left: 5px;
    font-style: normal;
  }

  & + &:nth-child(even) {
    color: black;
    text-transform: uppercase;
    padding: 10px 0;
  }

  & > strong {
    color: #B6116E;
    font-size: 15px;
    font-weight: 700;
    
  }  

  &:last-child {
    font-size: 12px;
    padding-bottom: 21px;
    text-transform: uppercase;
  }
  
`

const StyledSpanMoney = styled.span`
  font-size: 20px;
`

const StyledButton = styled.button`
  width: 256px;
  margin-top: 16px;
  height: 39px;
  border: none;
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  color: white;
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 700;
`

export default function BodyPaginationCard() {
  return (
    <div>
      <StyledDiv>
        <StyledSpan>
          <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" alt="vinho" />
        </StyledSpan>
        <img src="https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg" alt="flag" />
        <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>
        <StyledP>R$ 37,40<em>60% OFF</em></StyledP>
        <StyledP>Sócio wine <strong>R$ <StyledSpanMoney>30</StyledSpanMoney>,00</strong></StyledP>
        <StyledP>Não sócio R$ 37,40</StyledP>
      </StyledDiv>
      <Link href="/vinhos/1">
        <StyledButton>Adicionar</StyledButton>
      </Link>
    </div>
  )
}