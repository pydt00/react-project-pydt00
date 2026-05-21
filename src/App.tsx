import FilmList from "./components/FilmList";
import { ThemeButton, ThemeProvider } from "./components/Random";

export default function App() {
  return (
    <>
      {/* <h1>Film Watchlist</h1>
      <FilmList/> */}
      <ThemeProvider children={
        <FilmList/>
      }/>
    </>
  );
}
