// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './Components/AnimeList.jsx';
import AnimeDetail from './Components/AnimeDetail.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Navbar/>
        <Routes>
          <Route path="/" element={<AnimeList/>} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
