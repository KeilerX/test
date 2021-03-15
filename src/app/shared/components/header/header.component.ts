import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  faTrash = faTrash;
  faShoppingCart = faShoppingCart;
  showCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
    });
    this.cartService.cartDataObs$.subscribe(data => {
      this.cartData = data;
    })
  }
}
