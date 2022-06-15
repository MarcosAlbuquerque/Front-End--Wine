import { IDataAPI, IDataAPIItems } from '../interfaces';
import BodyPaginationCard from './BodyPaginationCard';
import { Article, P, Div } from '../styles/body/pagination';

export default function BodyPagination(props: JSX.IntrinsicAttributes & IDataAPI) {
  return (
    <Article>
      <P>
        <strong>{props.totalItems}</strong> produtos encontrados
      </P>
      <Div>
        {props.items.map((item) => (
          <BodyPaginationCard {...item} key={item.id} />
        ))}
      </Div>
    </Article>
  );
}
