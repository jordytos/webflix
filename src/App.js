import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Header />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
