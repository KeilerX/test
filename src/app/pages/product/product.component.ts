import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { map } from "rxjs/operators";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  product;
  mainImg: string;
  faMinus = faMinus;
  faPlus = faPlus;
  quantity = 1;

  constructor(private productService: CategoryService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getProductById(this.id).subscribe(prod => {
        this.product = prod;
        this.mainImg = prod.img1;
      })
    });
  }

  selectImage(img: string) {
    this.mainImg = img;
  }

  Increase() {
    this.quantity++;

  }

  Decrease() {
    this.quantity--;
  }

  AddToCart(id: number) {
    console.log(this.quantity);
    if (this.quantity > 1) {
      this.cartService.AddProductToCart(id, this.quantity);
    } else {
      this.cartService.AddProductToCart(id);
    }
  }
}
