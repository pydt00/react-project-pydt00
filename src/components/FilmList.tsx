import FilmCard from '@/components/FilmCard.tsx';
import { WatchlistContext } from '@/context/WatchlistProvider.tsx';
import { useContext } from 'react';
import styles from "./FilmList.module.css";

export default function FilmList() {
    const { films, addFilm, removeFilm, toggleWatched, setAllAsWatched } = useContext(WatchlistContext);

    return (
        <div className={styles.container}>
            <button className={styles.topButton} onClick={setAllAsWatched}>
                Označit vše jako shlédnuto
            </button>
            
            {/* 2. Obalíme mapování filmů do grid containeru */}
            <div className={styles.gridContainer}>
                {films.map(film => (
                    <FilmCard key={film.id} film={film} onToggle={toggleWatched}/>
                ))}
            </div>
        </div>
    );
}