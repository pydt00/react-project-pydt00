import FilmCard from '@/components/FilmCard.tsx';
import type { Film } from '../types/Film.tsx';
import { useWatchlist } from '@/hooks/useWatchlist.tsx';
import { ThemeButton } from './Random.tsx';

const initialFilms: Film[] = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 4.6,
        watched: false,
    }, {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        genre: "Fantasy",
        rating: 4.8,
        watched: true,
    }, {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Drama",
        rating: 4.2,
        watched: false,
    }
];

export default function FilmList() {
    const {films, toggleWatched, setAllAsWatched} = useWatchlist(initialFilms);

    return (
        <div>
            <ThemeButton/>
            <button onClick={setAllAsWatched}>Označit vše jako shlédnuto</button>
            {films.map(film => (
                <FilmCard key={film.title} film={film} onToggle={toggleWatched}/>
            ))}
        </div>
    )
}