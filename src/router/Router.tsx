import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/teste";
import LayoutDefault from "../layouts/LayoutDefault";
import Books from "../pages/Books/Books";
import Authors from "../pages/Authors/Authors";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<h1>Book</h1>} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<h1>Author</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
