import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pics = ['/assets/image/bg-images/home-4/slider-1.jpg', '/assets/image/bg-images/home-4/slider-2.jpg', '/assets/image/bg-images/home-4/slider-3.jpg'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.pics);
  }

}
