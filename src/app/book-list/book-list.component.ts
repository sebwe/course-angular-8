import { Component, OnInit } from '@angular/core';
import {Book, BOOKS} from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = BOOKS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book) {
    console.log('selected', book);
  }
}
