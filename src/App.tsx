import { ToastContainer } from "react-toastify";
import { AuthorProvider } from "./context/AuthorContext/AuthorContext";
import { BookProvider } from "./context/BookContext/BookContext";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthorProvider>
      <BookProvider>
        <Router />
        <ToastContainer />
      </BookProvider>
    </AuthorProvider>
  );
}

export default App;
