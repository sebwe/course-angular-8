import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Book} from '../books';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {
  form: FormGroup;
  @Input()
  book: Book;

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.builder.group({
      name: '',
      author: '',
      published: '',
      available: false,
      coverUrl: '',
    });

    this.form.patchValue(this.book);
  }
}
