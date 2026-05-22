import { useState } from "react";
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import { useContext } from "react";

export default function AddFilmForm() {
    const { films, addFilm, removeFilm, toggleWatched, setAllAsWatched } = useContext(WatchlistContext);

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
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" type="number" />
        <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" />
        <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" type="number" />
        <button onClick={handleAdd}>Add Film</button>
        </div>
    )
}