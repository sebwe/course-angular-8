import {TestBed} from '@angular/core/testing';
import {Book} from '../books';
import {BooksService} from './books.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });

  it('should get books', () => {
    const service: BooksService = TestBed.get(BooksService);
    const books = service.getBooks();
    expect(books).toBeTruthy();
    expect(books.length).toBe(8);
    expect(books[0].name).toBe('Alice in Wonderland');
  });

  it('should store book', () => {
    const service: BooksService = TestBed.get(BooksService);
    let books = service.getBooks();
    let book = books[5];
    book.name = 'aaa';
    book.author = 'bbb';
    service.storeBook(book);
    books = service.getBooks();
    book = books[5];
    expect(book.name).toBe('aaa');
    expect(book.author).toBe('bbb');
  });

  it('should leave books intact', () => {
    const service: BooksService = TestBed.get(BooksService);
    const books = service.getBooks();
    const book = {id: 100, name: 'gfgs', author: 'fdfds'} as Book;
    service.storeBook(book);
    const books2 = service.getBooks();
    expect(books2).toEqual(books);
  });
});
