import { AuthorProvider } from "./context/AuthorContext/AuthorContext";
import { BookProvider } from "./context/BookContext/BookContext";
import Router from "./router/Router";

function App() {
  return (
    <AuthorProvider>
      <BookProvider>
        <Router />
      </BookProvider>
    </AuthorProvider>
  );
}

export default App;
