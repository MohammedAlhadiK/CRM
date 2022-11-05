import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orderDetails } from '../models/orderdetailsVM';

@Component({
  selector: 'app-sales-order-details',
  templateUrl: './sales-order-details.component.html',
  styleUrls: ['./sales-order-details.component.css'],
})
export class SalesOrderDetailsComponent implements OnInit {
  CurrentbaseUrl = 'https://localhost:7298/api/Products';
  id: any;
  Products: any;
  orderDetails: orderDetails = new orderDetails();
  constructor(
    private activerout: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    activerout.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.GetProducts();
  }
  GetProducts() {
    this.http.get(this.CurrentbaseUrl).subscribe((res: any) => {
      this.Products = res;
    });
  }
  addSalesOrderDetails() {
    this.orderDetails.orderID = this.id;
    this.http
      .post('https://localhost:7298/api/SalesOrderDetails/', this.orderDetails)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigateByUrl('');
      });
  }
  addProduct() {}
}
