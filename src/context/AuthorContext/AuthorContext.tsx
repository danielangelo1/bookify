import { createContext, useState } from "react";
import { Author } from "../../types/Author/Author";

export const AuthorContext = createContext<{
  author: Author;
  authors: Author[];
  postAuthor: (author: Author) => void;
  getAuthors: () => void;
  getAuthor: (id: string) => void;
  deleteAuthor: (id: string) => void;
}>({
  author: {} as Author,
  authors: [],
  postAuthor: () => {},
  getAuthors: () => {},
  getAuthor: () => {},
  deleteAuthor: () => {},
});

export const AuthorProvider = ({ children }: { children: React.ReactNode }) => {
  const [author, setAuthor] = useState<Author>({} as Author);
  const [authors, setAuthors] = useState<Author[]>([]);

  const postAuthor = (author: Author) => {
    localStorage.setItem("authors", JSON.stringify([...authors, author]));
    setAuthors([...authors, author]);
  };

  const getAuthors = () => {
    const authors = localStorage.getItem("authors");
    if (authors) {
      setAuthors(JSON.parse(authors));
    }
  };

  const getAuthor = (id: string) => {
    const author = authors.find((author) => author.id === id);
    if (author) {
      setAuthor(author);
    }
  };

  const deleteAuthor = (id: string) => {
    const authorFiltered = authors.filter((author) => author.id !== id);
    localStorage.setItem("authors", JSON.stringify(authorFiltered));
    setAuthors(authorFiltered);
  };

  return (
    <AuthorContext.Provider
      value={{
        author,
        authors,
        postAuthor,
        getAuthors,
        getAuthor,
        deleteAuthor,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};
