import FilmCard from '@/components/FilmCard.tsx';
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import { useContext } from 'react';
import AddFilmForm from './AddFilmForm';

export default function FilmList() {
    const { films, addFilm, removeFilm, toggleWatched, setAllAsWatched } = useContext(WatchlistContext);

    return (
        <div>
            <button onClick={setAllAsWatched}>Označit vše jako shlédnuto</button>
            {films.map(film => (
                <FilmCard key={film.title} film={film} onToggle={toggleWatched}/>
            ))}
            <AddFilmForm/>
        </div>
    )
}