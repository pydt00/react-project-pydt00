import type { Film } from '../types/Film.tsx';

type Props = {
    key: string
    film: Film,
    onToggle: (id: number) => void;
}

export default function FilmCard(p : Props) {
    return (
        <div>
            <h2>{p.film.title}</h2>
            <p><b>Rok:</b> {p.film.year}</p>
            <p><b>Žánr:</b> {p.film.genre}</p>
            <p><span>⭐</span> {p.film.rating}</p>
            {p.film.watched ?
                <p><span>✅</span> Zhlénuto</p>
            :
                <button onClick={() => {p.onToggle(p.film.id)}}>
                    Označit jako zhlédnuto
                </button>
            }
        </div>
    )
}