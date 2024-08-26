import { createContext, useState } from "react";
import { Book } from "../../types/Book/Book";

export const BookContext = createContext<{
  book: Book;
  books: Book[];
  postBook: (book: Book) => void;
  getBooks: () => void;
  getBook: (id: string) => void;
  deleteBook: (id: string) => void;
  getAllBooksByAuthor: (author_id: string) => Book[];
}>({
  book: {} as Book,
  books: [],
  postBook: () => {},
  getBooks: () => {},
  getBook: () => {},
  deleteBook: () => {},
  getAllBooksByAuthor: () => [],
});

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [book, setBook] = useState<Book>({} as Book);
  const [books, setBooks] = useState<Book[]>([]);

  const postBook = (book: Book) => {
    localStorage.setItem("books", JSON.stringify([...books, book]));
    setBooks([...books, book]);
  };

  const getBooks = () => {
    const books = localStorage.getItem("books");
    if (books) {
      setBooks(JSON.parse(books));
    }
  };

  const getBook = (id: string) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      setBook(book);
    }
  };

  const deleteBook = (id: string) => {
    const bookFiltered = books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(bookFiltered));
    setBooks(bookFiltered);
  };

  const getAllBooksByAuthor = (author_id: string) => {
    const booksByAuthor = books.filter((book) => book.author_id === author_id);
    return booksByAuthor;
  };

  return (
    <BookContext.Provider
      value={{
        book,
        books,
        postBook,
        getBooks,
        getBook,
        deleteBook,
        getAllBooksByAuthor,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
