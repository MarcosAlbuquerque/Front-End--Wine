import { Button, Img } from '../styles/header/nav/buttons/profile';

export default function ButtonProfile() {
  return (
    <Button onClick={(e) => console.log(e)}>
      <Img src='/Vector.svg' alt='botao pesquisar' />
    </Button>
  );
}
