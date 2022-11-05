import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  id: any;
  customer: any;
  CurrentbaseUrl = 'https://localhost:7298/api/Customers/GetCustomer/';

  constructor(private activerout: ActivatedRoute, private http: HttpClient) {
    activerout.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.http.get(this.CurrentbaseUrl + this.id).subscribe((res) => {
      this.customer = res;
    });
  }
}
