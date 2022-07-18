import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { Displayform1Component } from './displayform1/displayform1.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayformComponent,
    Displayform1Component,
    DisplayComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
