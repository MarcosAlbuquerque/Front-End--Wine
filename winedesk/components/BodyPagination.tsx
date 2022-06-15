import { IDataAPI, IDataAPIItems } from '../interfaces';
import BodyPaginationCard from './BodyPaginationCard';
import { Article, P } from '../styles/body/pagination';

export default function BodyPagination(props: JSX.IntrinsicAttributes & IDataAPI) {
  return (
    <Article>
      <P>
        <strong>49</strong> produtos encontrados
      </P>
      {props.items.map((item) => (
        <BodyPaginationCard {...item} key={item.id} />
      ))}
    </Article>
  );
}
