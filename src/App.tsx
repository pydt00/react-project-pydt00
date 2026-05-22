import { Routes, Route, Link, NavLink } from 'react-router-dom';
import FilmsPage from "./pages/FilmsPage";
import AddFilmPage from "./pages/AddFilmPage";

/* Stylingová metoda: CSS Modules */

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Můj Watchlist
        </NavLink>
        <NavLink to="/form">Přidat film</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/form" element={<AddFilmPage />} />
      </Routes>
    </>
  );
}
