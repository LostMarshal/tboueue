import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  marketItems = [
    {
      name: 'Product 1',
      description: 'This is a short description for product 1.',
      image: 'https://via.placeholder.com/150',
      price: '100$'
    },
    {
      name: 'Product 2',
      description: 'This is a short description for product 2.',
      image: 'https://via.placeholder.com/150',
      price: '200$'
    },
    {
      name : 'Product 3',
      description: 'This is a short description for product 3.',
      image: 'https://via.placeholder.com/150',
      price: '300$'
    },
    {
      name: 'Product 4',
      description: 'This is a short description for product 4.',
      image: 'https://via.placeholder.com/150',
      price: '400$'
    }
    // Add more products here...
 ];

 marketItem = {
    name: '',
    description: '',
    image: '',
    price: ''
  };
  
    addItem() {
      this.marketItems.push(this.marketItem);
      this.marketItem = {
        name: '',
        description: '',
        image: '',
        price: ''
      };
    }
  
    deleteItem(name: string) {
      const index = this.marketItems.findIndex(item => item.name === name);
      if (index !== -1) {
          this.marketItems.splice(index, 1);
      }
  }
  
    editProduct(index: number) {
      this.marketItem = this.marketItems[index];
      this.deleteItem(this.marketItem.name);
    }
  
    loginPage(){
      this.router.navigate(['/login']);
    }

}
