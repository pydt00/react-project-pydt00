import { Routes, Route, Link, NavLink } from 'react-router-dom';
import FilmsPage from "./pages/FilmsPage";
import AddFilmPage from "./pages/AddFilmPage";
import styles from './Navbar.module.css';
import ErrorPage from './pages/ErrorPage';

/* Stylingová metoda: CSS Modules */

export default function App() {

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
      return `${styles.link} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" end className={getLinkClass}>
          Můj Watchlist
        </NavLink>
        <NavLink to="/form" className={getLinkClass}>
          Přidat film
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
