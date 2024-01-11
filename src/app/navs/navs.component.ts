import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.scss'
})
export class NavsComponent {

  constructor(private router: Router) {}

  loginPage(){
    this.router.navigate(['/login']);
  }
}
