import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { CardAuthorComponent } from './card-author/card-author.component';
import { RecentTopicsComponent } from './recent-topics/recent-topics.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    CardComponent,
    CardAuthorComponent,
    RecentTopicsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
