import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayformComponent } from './displayform/displayform.component';
import { Displayform1Component } from './displayform1/displayform1.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'display1', component:DisplayComponent},
  {path:'displayform', component:DisplayformComponent},  
  {path:'displayform1', component:Displayform1Component},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
