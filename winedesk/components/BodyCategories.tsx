import { Aside, Div, Label } from '../styles/body/categories';

export default function BodyCategories() {
  return (
    <Aside>
      <Div>
        <p>Refine sua busca</p>
        <Label>
          <input type={'radio'} /> Até R$40
        </Label>
        <Label>
          <input type={'radio'} /> R$40 A R$60
        </Label>
        <Label>
          <input type={'radio'} /> R$100 A R$200
        </Label>
        <Label>
          <input type={'radio'} /> R$200 A R$500
        </Label>
        <Label>
          <input type={'radio'} /> Acima de R$500
        </Label>
      </Div>
    </Aside>
  );
}
