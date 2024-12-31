import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


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
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';



@NgModule({
  declarations: [
    IndexComponent,
    BloglistComponent,
    BlogdetailsComponent,
    GaleryComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
})
export class PagesModule { }
