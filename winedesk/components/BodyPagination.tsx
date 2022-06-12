import styled from 'styled-components'
import BodyPaginationCard from './BodyPaginationCard'

export const StyledArticle = styled.article`
  width: 60%;
`

const StyledP = styled.p`
 font-family: Lato;
`

export default function BodyPagination() {
  return (
    <StyledArticle>
      {/* inplementar logica de contagem de produtos */}
      <StyledP><strong>49</strong> produtos encontrados</StyledP>
      <BodyPaginationCard />
    </StyledArticle>
  )
}