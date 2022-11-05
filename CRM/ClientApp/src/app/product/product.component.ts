import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  CurrentbaseUrl = 'https://localhost:7298/api/Products';
  Products: any;
  constructor(private http: HttpClient) {
    this.GetProducts();
  }

  ngOnInit(): void {}
  GetProducts() {
    this.http.get(this.CurrentbaseUrl).subscribe((res) => {
      this.Products = res;
    });
  }
}
