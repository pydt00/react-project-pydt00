import { useState } from "react";
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import { useContext } from "react";
import styles from "./AddFilmForm.module.css";

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
        <div className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Název filmu</label>
                <input 
                    className={styles.input}
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Např. Inception" 
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Rok vydání</label>
                <input 
                    className={styles.input}
                    value={year} 
                    onChange={e => setYear(e.target.value)} 
                    placeholder="Např. 2010" 
                    type="number" 
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Žánr</label>
                <input 
                    className={styles.input}
                    value={genre} 
                    onChange={e => setGenre(e.target.value)} 
                    placeholder="Např. Sci-Fi / Thriller" 
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Hodnocení (1-5)</label>
                <input 
                    className={styles.input}
                    value={rating} 
                    onChange={e => setRating(e.target.value)} 
                    placeholder="Např. 4.2" 
                    type="number" 
                    min="1"
                    max="5"
                />
            </div>

            <button className={styles.submitButton} onClick={handleAdd}>
                Přidat film
            </button>
        </div>
    );
}