import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModelServer, ProductServerResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + "/products");
  }

  getProductById(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + '/products/' + id);
  }

  getProductByCategory(category: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + '/products/category/' + category);
  }
}
