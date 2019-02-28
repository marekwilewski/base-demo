import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksTableComponent } from './books-table/books-table.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  { path: 'table', component: BooksTableComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]})

export class AppRoutingModule { }
