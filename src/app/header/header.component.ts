import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  styleUrls: ['header.scss'],
  templateUrl: 'header.html',
})
export class HeaderComponent {


  constructor(private router: Router) {}
  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
