import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './programs/customers-list/customers-list.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { CustomerFormComponent } from './programs/customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
