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
  align-items:center;
  cursor: pointer;
`

const StyledA = styled.img`
  width: 30px;
  height: 31px;
  border: none;
`


export default function ButtonFind() {
  return (
    <StyledButton>
      <StyledA src='/Vector (Stroke).svg' alt="botao pesquisar" />
    </StyledButton>
  )
}