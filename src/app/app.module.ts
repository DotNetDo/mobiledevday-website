import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollSpyModule } from 'ngx-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
