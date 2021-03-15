import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, ProductServerResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(private productService: CategoryService, private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: ProductModelServer[]) => {
      this.products = data;
    });
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }

}
