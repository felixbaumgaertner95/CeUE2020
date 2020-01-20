import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './Komponenten/customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./Service/customer.service";
import { HandleListComponent } from './Komponenten/handle-list/handle-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { OrderOverviewComponent } from './Komponenten/order-overview/order-overview.component';
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    HandleListComponent,
    OrderOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [OrderOverviewComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
