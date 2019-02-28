import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
import { Category } from '../book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;
  displayedColumns: string[] = ['id', 'title', 'star'];
  dataSource;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.dataSource = new MatTableDataSource<Category>(categories);
    });
  }

  delete(event) {
    console.log(event);
  }

}
