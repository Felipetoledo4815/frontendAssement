import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { GnomesComponent } from './gnomes/gnomes.component';
import { GnomeProfileComponent } from './gnomes/gnome-profile/gnome-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NamePipe } from './gnomes/pipes/name.pipe';
import { ProfessionPipe } from './gnomes/pipes/profession.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    GnomesComponent,
    GnomeProfileComponent,
    NamePipe,
    ProfessionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
