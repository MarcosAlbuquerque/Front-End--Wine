import { IDataAPI } from '../interfaces';
import BodyCategories from './BodyCategories';
import BodyPagination from './BodyPagination';
import Header from './Header';
import Style from '../styles';
import { Section } from '../styles/body';

export default function Body(props) {
  return (
    <>
      <Style.Global />
      <Header />
      <Section>
        <BodyCategories />
        <BodyPagination {...props} />
      </Section>
    </>
  );
}
