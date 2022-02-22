import { BrowserRouter,Link, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>
      <main>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <About />
        </Route>
      </main>
    </BrowserRouter> 
  )
}

export default App;
