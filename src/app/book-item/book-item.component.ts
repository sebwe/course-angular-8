import {Component, Input, OnInit} from '@angular/core';
import {Book, BOOKS} from '../books';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  book = BOOKS[0];

  constructor() { }

  ngOnInit() {
  }
}
