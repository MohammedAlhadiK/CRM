import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { address } from '../models/addressVM';
import { order } from '../models/orderVM';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css'],
})
export class SalesOrderComponent implements OnInit {
  order: order = new order();
  CurrentbaseUrl = 'https://localhost:7298/api/orders/';
  id: any;
  Products: any;

  constructor(
    private activerout: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addneworder() {
    this.http.post(this.CurrentbaseUrl, this.order).subscribe((result: any) => {
      this.router.navigateByUrl('order-details/' + result.id);
    });
  }
  getorder() {
    this.http
      .get(this.CurrentbaseUrl + 'Getorder/' + this.id)
      .subscribe((res: any) => {
        this.order = res;
        console.log(res);
      });
  }
  editorder() {
    this.http
      .put(this.CurrentbaseUrl + this.id, this.order)
      .subscribe((result) => {
        this.router.navigateByUrl('order');
      });
  }

  addnewAddress() {
    this.order.addresses.push(new address());
  }
}
