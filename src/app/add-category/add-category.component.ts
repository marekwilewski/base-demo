import { Component, OnInit } from '@angular/core';
import { Category } from '../book';
import { CategoryService } from '../category-service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

add() {

}

}
