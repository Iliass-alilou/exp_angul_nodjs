import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import { FormComponent } from './componants/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { AffichageComponent } from './componants/affichage/affichage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AffichageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
