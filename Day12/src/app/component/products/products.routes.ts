import { Routes } from '@angular/router';

import { Details } from './details/details';
import { Reviews } from './reviews/reviews';
import { Related } from './related/related';

export const productsRoutes: Routes = [
 
      {path:'details',component:Details},
      {path:'reviews',component:Reviews},
      {path:'related',component:Related},
      {path:'offers',loadComponent:()=>import('./offers/offers').then(m=>m.Offers)}

 
];