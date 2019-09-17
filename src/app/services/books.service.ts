import { Injectable } from '@angular/core';
import {Book, BOOKS} from '../books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }
}
