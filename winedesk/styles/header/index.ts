import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;
`

export const A = styled.a`
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

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap 10px;
`
