import styled from 'styled-components'
import { Article } from '../pagination';

export const LinkBack = styled.a`
text-decoration: none;
color: #111111;
cursor: pointer;
display: flex;
align-items: center;
font-weight: 400;
& > img {
  margin-right: 15%;
}
`

export const P = styled.p`
& > em {
  font-style: normal;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #c81a78;
}
& > em:nth-child(3) {
  color: #888888;
}
`

export const ArticleExtend = styled(Article)`
& {
  width: 80%;
}

& > div {
  padding: 2% 0;
}

& > div {
  display: flex;
  gap: 15%;
}

& h1 {
  font-family: Lato;
  font-weight: 700;
  font-size: 30px;
  color: #111111;
  margin: 0;
}
`;

export const Div = styled.div`
& > div:nth-child(4) {
  font-family: 'Lato';
  font-size: 24px;

  & > h2 {
    color: #c81a78;
    margin-bottom: 0;

    & span {
      font-size: 46px;
    }
  }
  & > h3 {
    margin: 0;
    font-size: 16px;
    color: #888;
  }
}

& > div:nth-child(5) {
  font-family: 'Neo Sans Std Tr', sans-serif;

  & > p {
    font-family: 'Saira';
  }
}
`;

export const Ul = styled.ul`
& {
  list-style-type: none;
  display: flex;
  padding: 0;
  align-items: center;
}

& li {
  margin-right: 10px;
  font-family: 'Lato';
  font-size: 15px;
  font-weight: 400;
  color: #555555;
  display: flex;
}

& li > img {
  width: 16px;
  height: 16px;
}
`;

export const ButtonAdd = styled.div`
background: #7ebc43;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
border-radius: 4px;
width: 60%;
align-items: center;
height: 56px;

& {
  display: flex;
  justify-content: space-evenly;

  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;

    & > em {
      font-style: normal;
      font-weight: 400;
      font-family: 'Lato';

      color: white;
    }
  }

  & > hr {
    border: 1px solid white;
    height: 33px;
    opacity: 0.1;
    margin: 0;
  }

  & > button {
    border: none;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 16px;
    color: white;
    background-color: transparent;
  }
}
`;

export const ButtonAddDescrease = styled.div`
background-image: url('/Rectangle-desactive.svg');
background-size: cover;
background-repeat: no-repeat;
color: white;
cursor: pointer;
font-size: 20px;
font-weight: 600;
padding: 4px 12px;
`;

export const ButtonAddIncrease = styled.div`
background-image: url('/Rectangle-active.svg');
background-size: cover;
background-repeat: no-repeat;
color: white;
cursor: pointer;
font-weight: 600;
font-size: 20px;
padding: 4px 10px;
`;