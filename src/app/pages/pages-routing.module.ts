import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { IndexComponent } from './index/index.component';
import { GaleryComponent } from './galery/galery.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'index1',
    component:IndexComponent
  },
  {
    path:'galery',
    component:GaleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
