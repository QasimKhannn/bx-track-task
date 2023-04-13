import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
