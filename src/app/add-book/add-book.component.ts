import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../books-service';
import { Category } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  booksForm: FormGroup;

  constructor(private builder: FormBuilder, private bookService: BookService) {
    this.booksForm = this.builder.group({
      title: '',
      author: '',
      isbn: '',
      category: Category
    });
  }

  ngOnInit() {
  }

}
