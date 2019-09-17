import { Injectable } from '@angular/core';
import {Book, BOOKS} from '../books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books = BOOKS;

  constructor() {
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  storeBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index >= 0) {
      this.books[index] = updatedBook;
    }
  }
}
