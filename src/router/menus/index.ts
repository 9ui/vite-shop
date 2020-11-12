import modules from 'globby!/@/router/menus/modules/**/*.@(ts)';

import type { MenuModule } from '/@/router/types';

const menuModules: MenuModule[] = [];

Object.keys(modules).forEach((key) => {
  menuModules.push(modules[key]);
});
