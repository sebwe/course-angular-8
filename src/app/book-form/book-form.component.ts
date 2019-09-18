import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Book} from '../books';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {
  form: FormGroup;
  @Input()
  book: Book;
  @Output()
  bookUpdate = new EventEmitter<Book>();

  constructor(
    private builder: FormBuilder,
    private booksService: BooksService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.builder.group({
      id: '',
      name: '',
      author: '',
      published: '',
      available: false,
      coverUrl: '',
    });

    this.form.patchValue(this.book);
  }

  onSubmit() {
    const book = this.form.value as Book;
    this.booksService.storeBook(book);
    this.bookUpdate.emit(book);
  }
}
