import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header';
import { Home } from './home';
import { Cart } from './cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
