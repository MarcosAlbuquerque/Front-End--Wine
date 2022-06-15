import Global from "./global";
import Section from './body'
import { Aside, Label, Div  } from './body/categories'
import { Header, A, Div as HeaderDiv } from './header'
import { Nav } from './header/nav'

const Style = {
  Global,
  Header: {
    Header,
    HeaderDiv,
    Nav,
    A,
  },
  Body: {
    Section,
    Categories: {
      Aside,
      Label,
      Div
    },
    Pagination: {}
  }
}


export default Style