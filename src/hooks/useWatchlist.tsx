import type { Film } from "@/types/Film";
import { useEffect, useState } from "react";

export function useWatchlist(initialFilms : Film[]) {
    const [films, setFilms] = useState(initialFilms);

    function toggleWatched (title: string) {
        setFilms(films.map((film) => film.title === title ? { ...film, watched: !film.watched} : film));
    }

    function setAllAsWatched () {
        setFilms((prev) => prev.map(film => ({...film, watched: true})));        
    }

    useEffect(() => {
        const watchedCount = films.filter(f => f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`
    })

    return { films, toggleWatched, setAllAsWatched };
}