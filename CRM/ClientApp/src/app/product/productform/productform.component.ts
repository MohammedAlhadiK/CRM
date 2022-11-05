import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/productVM';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css'],
})
export class ProductformComponent implements OnInit {
  product: product = new product();
  CurrentbaseUrl = 'https://localhost:7298/api/products/';
  id: any;
  constructor(
    private activerout: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    activerout.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (this.id) this.getproduct();
  }

  ngOnInit(): void {}
  addnewproduct() {
    this.http.post(this.CurrentbaseUrl, this.product).subscribe((result) => {
      this.router.navigateByUrl('products');
    });
  }
  getproduct() {
    this.http.get(this.CurrentbaseUrl + this.id).subscribe((res: any) => {
      this.product = res;
      console.log(res);
    });
  }
  editproduct() {
    this.http
      .put(this.CurrentbaseUrl + this.id, this.product)
      .subscribe((result) => {
        this.router.navigateByUrl('products');
      });
  }
}
