import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './core/banner/banner.component';
import { HeaderComponent } from './core/header/header.component';

import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { NgFor } from '@angular/common';
import { DescriptionPipe } from './shared/pipes/description.pipe';
import { ImagePipe } from './shared/pipes/image.pipe';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    LoginComponent,
    BrowseComponent,
    MovieCarouselComponent,
    DescriptionPipe,
    ImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgFor, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
