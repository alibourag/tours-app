import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    ToursListComponent,
    LandingPageComponent,
    SingleTourComponent,
    SliderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
