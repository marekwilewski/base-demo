import { Book, Category } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  category: Category;

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_ENDPOINT + '/categories');
  }

  postCategory(category: string): Observable<Category[]> {
    return this.http.post<Category[]>(API_ENDPOINT + '/categories', category);
  }

}
