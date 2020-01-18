import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerFormComponent} from "./Komponenten/customer-form/customer-form.component";
import {HandleListComponent} from "./Komponenten/handle-list/handle-list.component";


const routes: Routes = [
  { path: 'addcustomer', component: CustomerFormComponent },
  { path: 'handlelist', component: HandleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

