import FilmCard from '@/components/FilmCard.tsx';
import type { Film } from '../types/Film.tsx';

const mockFilms: Film[] = [
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
    return (
        <div>
            {mockFilms.map(film => (
                <FilmCard film={film} />
            ))}
        </div>
    )
}