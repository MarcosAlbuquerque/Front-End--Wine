
import styled from "styled-components"

export const Div = styled.div`
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

export const Span = styled.span`
display:flex;
justify-content: center;
width: 198px;
height: 178px;
margin: 5px 0;

& > img {
height: inherit;
}
`

export const SpanMoney = styled.span`
font-size: 20px;
`

export const P = styled.p`
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

export const Button = styled.button`
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