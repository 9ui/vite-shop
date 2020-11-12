import type { App } from 'vue';

import {
  Button,
  DropdownMenu,
  DropdownItem,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Sticky,
  Search,
  Field,
  Col,
  Row,
  Icon,
  NavBar,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Card,
  Tag,
  Stepper,
  SubmitBar,
} from 'vant';

import 'vant/lib/index.css';

import { Image as VanImage } from 'vant';

export function setupVant(app: App<Element>) {
  app
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Swipe)
    .use(SwipeItem)
    .use(Sticky)
    .use(Search)
    .use(Field)
    .use(Col)
    .use(Row)
    .use(VanImage)
    .use(Icon)
    .use(NavBar)
    .use(Tab)
    .use(Tabs)
    .use(Cell)
    .use(CellGroup)
    .use(Grid)
    .use(GridItem)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Card)
    .use(Tag)
    .use(Stepper)
    .use(SubmitBar);
}
