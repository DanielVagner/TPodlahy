import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


// Component
import { IndexComponent } from './index/index.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { GaleryComponent } from '../pages/galery/galery.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    IndexComponent,
    BloglistComponent,
    BlogdetailsComponent,
    GaleryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    SlickCarouselModule,
    HttpClientModule
  ],
})
export class PagesModule { }
