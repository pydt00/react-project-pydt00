import type { Film } from '../types/Film.tsx';
import { useContext } from 'react';
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import styles from './FilmCard.module.css';

type Props = {
    key: string
    film: Film,
    onToggle: (id: string) => void;
}

export default function FilmCard(p : Props) {
    const { films, addFilm, removeFilm, toggleWatched, setAllAsWatched } = useContext(WatchlistContext);

// 2. Conditionally combine classes based on the watched state
    const cardClass = `${styles.card} ${p.film.watched ? styles.watchedCard : ''}`;

    return (
        <div className={cardClass}>
            <h2 className={styles.header}>
                {p.film.title} 
                <button className={styles.removeButton} onClick={() => removeFilm(p.film.id)}>
                    Odebrat
                </button>
            </h2>
            <p><b>Rok:</b> {p.film.year}</p>
            <p><b>Žánr:</b> {p.film.genre}</p>
            <p><span>⭐</span> {p.film.rating}</p>
            {p.film.watched ?
                <p className={styles.watchedBadge}><span>✅</span> Zhlédnuto</p>
            :
                <button className={styles.watchButton} onClick={() => {p.onToggle(p.film.id)}}>
                    Označit jako zhlédnuto
                </button>
            }
        </div>
    );
}