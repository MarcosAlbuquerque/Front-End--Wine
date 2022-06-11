import styled from 'styled-components'

const StyledButton = styled.button`
  background-image: url('/Ellipse.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 56px;
  height: 57px;
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: self-end;
  color: #555555;
  cursor: pointer;
`

const StyledA = styled.img`
  width: 42px;
  height: 48px;
  border: none;
  position: relative;
  bottom: -2px;
`


export default function ButtonProfile() {
  return (
    <StyledButton onClick={(e) => console.log(e)}>
      <StyledA src='/Vector.svg' alt="botao pesquisar" />
    </StyledButton>
  )
}