export interface Book {
  name: string;
  author: string;
  published?: number;
  available?: boolean;
  coverUrl?: string;
}

export const BOOKS: Book[] = [
  { name: 'Alice in Wonderland', author: 'Lewis Carroll', published: 2009, coverUrl: 'https://covers.openlibrary.org/b/id/8596432-L.jpg' },
  { name: 'Steve Jobs', author: 'Walter Isaacson', coverUrl: 'https://covers.openlibrary.org/w/id/6901315-M.jpg', available: true },
  { name: 'Dune', author: 'Frank Herbert', coverUrl: 'https://covers.openlibrary.org/w/id/258358-M.jpg' },
  { name: 'Newton', author: 'Kate Gordon', coverUrl: 'https://covers.openlibrary.org/w/id/1405776-M.jpg' },
  { name: 'Abraham Lincoln', author: 'Carl Sandburg', coverUrl: 'https://covers.openlibrary.org/w/id/2560507-M.jpg' },
  { name: 'Frankenstein', author: 'Mary Shelley', coverUrl: 'https://covers.openlibrary.org/w/id/4636490-M.jpg' },
  { name: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://covers.openlibrary.org/w/id/8406761-M.jpg' },
  { name: 'Harry Potter and the Philosopher\'s Stone', author: 'J. K. Rowling', coverUrl: 'https://covers.openlibrary.org/w/id/8267078-M.jpg' },
];
