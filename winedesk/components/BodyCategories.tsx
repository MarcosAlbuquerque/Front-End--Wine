import styled from 'styled-components'


export const StyledAside = styled.aside`
  
  font-family: 'Neo Sans Std TR', sans-serif;
  font-weight: bold;
  width: 20%;
  
  & > div {
    display: flex;
    flex-direction: column;
  }
`

const StyledLabel = styled.label`
  font-family: Lato, sans-serif;
  font-weight: 400;
  padding: 10px;
`


export default function BodyCategories() {
    return (
        <StyledAside>
            <div>
                <p>Refine sua busca</p>
                {/* corrigir o label */}
                <StyledLabel><input type={'radio'} /> Até R$40</StyledLabel>
                <StyledLabel><input type={'radio'} /> R$40 A R$60</StyledLabel>
                <StyledLabel><input type={'radio'} /> R$100 A R$200</StyledLabel>
                <StyledLabel><input type={'radio'} /> R$200 A R$500</StyledLabel>
                <StyledLabel><input type={'radio'} /> Acima de R$500</StyledLabel>
            </div>
        </StyledAside>
    )
}