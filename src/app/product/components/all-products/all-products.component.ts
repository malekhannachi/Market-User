import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading:boolean=false
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getCategories() {
    this.service.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getProducts() {
    this.loading=true
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading=false
      },
      error: (err: any) => {
        console.log(err);
        this.loading=false
      },
    });
  }

  filterByCategory(event: any) {
    let name = event.target.value;
    console.log(name);
    // if (name == 'all') {
    //   this.getProducts();
    // } else {
    //   this.getProductsCategory(name);}

    // Short Condition
    name == 'all' ? this.getProducts() : this.getProductsCategory(name);
  }
  getProductsCategory(keyword: string) {
    this.service.getProductsByCategory(keyword).subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
