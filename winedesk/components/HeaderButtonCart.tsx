import { Button, Img } from '../styles/header/nav/buttons/cart';

export default function ButtonCart() {
  return (
    <Button onClick={(e) => console.log(e)}>
      <Img src='/Bitmap.svg' alt='botao pesquisar' />
    </Button>
  );
}
