import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './programs/customers-list/customers-list.component';
import { CustomerFormComponent } from './programs/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent,
    data: {
      serviceApi: '/api/esp/v1/customers',
      serviceMetadataApi: '/api/esp/v1/customers/metadata/list',
    }
  },
  {
    path: 'new',
    component: CustomerFormComponent,
    data: {
      serviceApi: '/api/esp/v1/customers',
      serviceMetadataApi: '/api/esp/v1/customers/metadata/form',
    }
  },
  {
    path: 'edit/:id',
    component: CustomerFormComponent,
    data: {
      serviceApi: '/api/esp/v1/customers',
      serviceMetadataApi: '/api/esp/v1/customers/metadata/form',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
