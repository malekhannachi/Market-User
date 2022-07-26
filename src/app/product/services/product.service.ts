import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.baseUrl;
  getAllProducts() {
    return this.http.get<any>(this.apiUrl + 'products');
  }
  getAllCategories() {
    return this.http.get<any>(this.apiUrl + 'products/categories');
  }
}
