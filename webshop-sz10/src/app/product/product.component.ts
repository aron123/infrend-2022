import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductForm(id: number) {
    this.router.navigate([ 'product-form', id ]);
  }
}
