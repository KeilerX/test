import { Component, OnInit } from '@angular/core';
import { faFacebook, faGooglePlus, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCheckCircle, faClock, faGlobeAmericas, faHeadset, faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGooglePlus;
  faRss = faRss;
  faPinterest = faPinterest;
  faYoutube = faYoutube;
  faHeadSet = faHeadset;
  faGlobeAmericas = faGlobeAmericas;
  faCheckCircle = faCheckCircle;
  faBell = faBell;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
