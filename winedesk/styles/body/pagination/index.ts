import styled from "styled-components";

export const Article = styled.article`
width: 60%;
`

export const P = styled.p`
font-family: Lato;
`

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4%;

  & > div {
    margin-bottom: 30px;
  }
`