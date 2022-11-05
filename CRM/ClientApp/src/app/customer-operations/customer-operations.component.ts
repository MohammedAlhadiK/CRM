import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-operations',
  templateUrl: './customer-operations.component.html',
  styleUrls: ['./customer-operations.component.css'],
})
export class CustomerOperationsComponent implements OnInit {
  CurrentbaseUrl: any;
  customers: any;
  constructor(private http: HttpClient) {
    this.CurrentbaseUrl = 'https://localhost:7298/api/customers/';
    this.getCustomer();
  }

  ngOnInit(): void {}

  getCustomer() {
    this.http.get(this.CurrentbaseUrl).subscribe((res) => {
      this.customers = res;
    });
  }
  editCustomer(customer: any, active: boolean) {
    customer.isActive = active;
    this.http
      .put(this.CurrentbaseUrl + customer.id, customer)
      .subscribe((result) => {
        console.log(result);
        this.getCustomer();
      });
  }
}
