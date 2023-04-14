import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/book/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
