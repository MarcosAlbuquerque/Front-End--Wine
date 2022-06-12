import styled from 'styled-components'
import BodyCategories from './BodyCategories'
import BodyPagination from './BodyPagination'


export const StyledMain = styled.section`
  padding: 100px 0;
  width: 90%;
  display: flex;
  justify-content: center;
`


export default function Body() {
  return (
    <StyledMain>
      <BodyCategories />
      <BodyPagination />
    </StyledMain>
  )
}