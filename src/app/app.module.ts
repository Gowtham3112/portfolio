import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './Module/home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from './shared/material/material-module';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgApexchartsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
