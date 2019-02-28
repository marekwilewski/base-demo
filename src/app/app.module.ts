import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BooksTableComponent } from './books-table/books-table.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './books-service';
import { MenuComponent } from './menu/menu.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category-service';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksTableComponent,
    MenuComponent,
    AddBookComponent,
    CategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [BookService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
