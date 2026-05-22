import FilmCard from '@/components/FilmCard.tsx';
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import { useContext } from 'react';
import { useState } from 'react';

export default function FilmList() {
    const { films, addFilm, toggleWatched, setAllAsWatched } = useContext(WatchlistContext);

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleAdd = () => {    
        if (!title || !year || !genre || !rating) return;
        addFilm(title, Number(year), genre, Number(rating));
        setTitle('');
        setYear('');
        setGenre('');
        setRating('');
    };

    return (
        <div>
            <button onClick={setAllAsWatched}>Označit vše jako shlédnuto</button>
            {films.map(film => (
                <FilmCard key={film.title} film={film} onToggle={toggleWatched}/>
            ))}
            <div>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" type="number" />
                <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" />
                <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" type="number" />
                <button onClick={handleAdd}>Add Film</button>
            </div>
        </div>
    )
}