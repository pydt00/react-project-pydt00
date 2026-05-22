import type { Film } from "@/types/Film"
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { useEffect } from "react";

const mockFilms: Film[] = [
    {
        id: 0,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 4.6,
        watched: false,
    }, {
        id: 1,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        genre: "Fantasy",
        rating: 4.8,
        watched: true,
    }, {
        id: 2,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Drama",
        rating: 4.2,
        watched: false,
    }
];

type WatchlistContextType = {
    films: Film[];
    addFilm: (title: string, year: number, genre: string, rating: number) => void;
    removeFilm: (id: number) => void;
    toggleWatched: (id: number) => void;
    setAllAsWatched: () => void;
}

export const WatchlistContext = createContext<WatchlistContextType>({} as WatchlistContextType);

export function WatchlistProvider({ children }:{ children: ReactNode }) {
    const [films, setFilms] = useState(mockFilms);
    const [maxId, setMaxId] = useState(mockFilms.length);

    const addFilm = (title: string, year: number, genre: string, rating: number) => {
        const newFilm : Film = {id: maxId, title, year, genre, rating, watched: false};
        setFilms(prev => [...prev, newFilm]);
        setMaxId(prev => prev + 1);
    }

    const toggleWatched = (id: number) => {
        setFilms(films.map((film) => film.id === id ? { ...film, watched: !film.watched} : film));
    }

    const setAllAsWatched = () => {
        setFilms((prev) => prev.map(film => ({...film, watched: true})));
    }

    const removeFilm = (id: number) => {
        setFilms(films.filter((film) => film.id !== id));
    }

    useEffect(() => {
        const watchedCount = films.filter(f => f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`
    })

    return (
        <WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, setAllAsWatched }}>
            { children }
        </WatchlistContext.Provider>
    )
}