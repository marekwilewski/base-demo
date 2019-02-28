import { Component, OnInit } from '@angular/core';
import { BookService } from '../books-service';
import { Book } from '../book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  book: Book;

  displayedColumns: string[] = ['id', 'title', 'author', 'isbn'];
  dataSource;

  constructor(private bookService: BookService) {
   }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.dataSource = new MatTableDataSource<Book>(books);
    },
    errors => console.log('TEN', errors));
  }

}
