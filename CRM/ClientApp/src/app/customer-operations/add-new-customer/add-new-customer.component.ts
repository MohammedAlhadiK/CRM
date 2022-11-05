import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { address } from 'src/app/models/addressVM';
import { customer } from 'src/app/models/customerVM';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css'],
})
export class AddNewCustomerComponent implements OnInit {
  customer: customer = new customer();
  CurrentbaseUrl = 'https://localhost:7298/api/Customers/';
  id: any;
  constructor(
    private activerout: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    activerout.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (this.id) this.getCustomer();
  }

  ngOnInit(): void {}
  addnewcustomer() {
    this.http.post(this.CurrentbaseUrl, this.customer).subscribe((result) => {
      this.router.navigateByUrl('customer');
    });
  }
  getCustomer() {
    this.http
      .get(this.CurrentbaseUrl + 'GetCustomer/' + this.id)
      .subscribe((res: any) => {
        this.customer = res;
        console.log(res);
      });
  }
  editCustomer() {
    this.http
      .put(this.CurrentbaseUrl + this.id, this.customer)
      .subscribe((result) => {
        this.router.navigateByUrl('customer');
      });
  }
  addnewAddress() {
    this.customer.addresses.push(new address());
  }
}
