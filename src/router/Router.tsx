import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<h1>Books</h1>} />
        <Route path="/books/:id" element={<h1>Book</h1>} />
        <Route path="/authors" element={<h1>Authors</h1>} />
        <Route path="/authors/:id" element={<h1>Author</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
