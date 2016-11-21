import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu';
import { BoardComponent } from './components/board';
import { RulesComponent } from './components/rules';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: MenuComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'board', component: BoardComponent },
  { path: 'rules', component: RulesComponent },
  { path: '**',    component: MenuComponent },
];
