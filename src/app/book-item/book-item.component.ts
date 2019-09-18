import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book, BOOKS} from '../books';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input()
  book: Book;

  @Output()
  bookSelect = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.bookSelect.emit(this.book);
  }
}
