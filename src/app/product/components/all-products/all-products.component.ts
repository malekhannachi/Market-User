import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getAllProducts().subscribe({
      next: (res: any) => {

     this.products=res
        
      },
      error: (err: any) => {
        console.log(err);
        
      },
    });
  }
}
