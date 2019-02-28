export class Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category?: Category;
}

export class Category {
  id: number;
  title: string;
}
