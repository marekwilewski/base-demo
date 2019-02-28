import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  book: Book;

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_ENDPOINT + '/books');
  }

}
