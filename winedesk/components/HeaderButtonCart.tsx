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
  height: 51px;
  border: none;
`


export default function ButtonCart() {
  return (
    <StyledButton onClick={(e) => console.log(e)}>
      <StyledA src='/Bitmap.svg' alt="botao pesquisar" />
    </StyledButton>
  )
}