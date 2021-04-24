import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { SearchComponent } from './search/search.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    PopularComponent,
    HomeComponent,
    MovieDetailComponent,
    PageNavigationComponent,
    SearchComponent,
    PeopleDetailComponent,
    TvDetailComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
 FormsModule,

    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
