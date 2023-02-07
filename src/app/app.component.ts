import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <!-- <app-form></app-form> -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Interview-a02';
}
