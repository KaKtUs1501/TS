import { expect } from 'chai';
import { Library } from '../library'; // Імпортуйте свій шлях до класу Library
import { IBook } from '../models'; // Імпортуйте моделі

describe('Library Class', () => {
  let library: Library<IBook>;

  beforeEach(() => {
    // Створюємо новий екземпляр бібліотеки перед кожним тестом
    library = new Library<IBook>('testBooks') as Library<IBook>;
    localStorage.clear(); // Очистити локальне сховище перед тестом
  });

  it('should add a book and return its id', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    } as IBook;
    const id = library.add(book);
    const addedBook = library.findById(id);
    expect(addedBook).to.not.be.undefined;
    expect(addedBook?.title).to.equal('Test Book');
  });

  it('should remove a book by id', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    } as IBook;
    const id = library.add(book);
    library.remove(id);
    const removedBook = library.findById(id);
    expect(removedBook).to.be.undefined;
  });

  it('should update a book', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    } as IBook;
    const id = library.add(book);
    const updatedBook = { ...book, title: 'Updated Book', id };
    library.update(updatedBook as IBook);
    const foundBook = library.findById(id);
    expect(foundBook?.title).to.equal('Updated Book');
  });

  it('should return all books', () => {
    const book1 = {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      year: 2021,
      isBorrowed: false,
    } as IBook;
    const book2 = {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      year: 2022,
      isBorrowed: false,
    } as IBook;
    library.add(book1);
    library.add(book2);
    const allBooks = library.getAll();
    expect(allBooks.length).to.equal(2);
  });
});
