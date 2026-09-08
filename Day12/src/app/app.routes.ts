import { Routes } from '@angular/router';

import { Home } from './component/home/home';
import { Products } from './component/products/products';
import { About } from './component/about/about';


export const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: Home},
  {path: 'products',component: Products,
    loadChildren:()=>import('./component/products/products.routes').then(m=>m.productsRoutes)
  },
  {path: 'about',component: About}
];