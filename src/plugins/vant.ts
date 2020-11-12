import { App as VM } from 'vue';

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

import { Image as VanImage } from 'vant';

const components = [
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
  VanImage,
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
];

export const vantComponents = {
  install: function (vm: VM) {
    components.forEach((item) => {
      vm.component(item.name, item);
    });
  },
};
