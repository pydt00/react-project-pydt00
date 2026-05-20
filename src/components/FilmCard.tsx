import { useState } from 'react';
import type { Film } from '../types/Film.tsx';

type Props = {
    film: Film;
}

export default function FilmCard({ film } : Props) {
    const [watched, setWatched] = useState(film.watched);

    return (
        <div>
            <h2>{film.title}</h2>
            <p><b>Rok:</b> {film.year}</p>
            <p><b>Žánr:</b> {film.genre}</p>
            <p><span>⭐</span> {film.rating}</p>
            {watched ?
                <p><span>✅</span> Zhlénuto</p>
            :
                <button onClick={() => {setWatched(true); console.log('Set film to watched!')}}>
                    Označit jako zhlédnuto
                </button>
            }
        </div>
    )
}