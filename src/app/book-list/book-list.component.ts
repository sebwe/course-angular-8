import { Component, OnInit } from '@angular/core';
import {Book} from '../books';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  onSelect(book: Book) {
    this.selectedBook = book;
  }
}
