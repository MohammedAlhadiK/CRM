import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';
import { ProductComponent } from './product/product.component';
import { EditCustomerComponent } from './customer-operations/edit-customer/edit-customer.component';
import { AddNewCustomerComponent } from './customer-operations/add-new-customer/add-new-customer.component';
import { ProductformComponent } from './product/productform/productform.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesOrderDetailsComponent } from './sales-order-details/sales-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CustomerOperationsComponent,
    ProductComponent,
    EditCustomerComponent,
    AddNewCustomerComponent,
    ProductformComponent,
    SalesOrderComponent,
    SalesOrderDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'customer', component: CustomerOperationsComponent },
      { path: 'edit-customer/:id', component: AddNewCustomerComponent },
      { path: 'add-new-customer', component: AddNewCustomerComponent },
      { path: 'products', component: ProductComponent },
      { path: 'product/:id', component: ProductformComponent },
      { path: 'product', component: ProductformComponent },
      { path: 'order', component: SalesOrderComponent },
      { path: 'order/:id', component: SalesOrderComponent },
      { path: 'order-details/:id', component: SalesOrderDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
