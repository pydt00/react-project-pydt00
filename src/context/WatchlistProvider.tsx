import type { Film } from "@/types/Film"
import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useQuery } from '@tanstack/react-query';

type WatchlistContextType = {
    films: Film[];
    addFilm: (title: string, year: number, genre: string, rating: number) => void;
    removeFilm: (id: string) => void;
    toggleWatched: (id: string) => void;
    setAllAsWatched: () => void;
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
}

export const WatchlistContext = createContext<WatchlistContextType>({} as WatchlistContextType);

export function WatchlistProvider({ children }:{ children: ReactNode }) {
    const [films, setFilms] = useState<Film[]>([]);

    const { data, isLoading, isError, refetch } = useQuery<Film[], Error>({
        queryKey: ['films'],
        queryFn: async (): Promise<Film[]> => {
            const res = await fetch('/films.json');
            if (!res.ok) throw new Error('Network response was not ok');
            return (await res.json()) as Film[];
        },
    });

    useEffect(() => {
        if (data && Array.isArray(data)) setFilms(data as Film[]);
    }, [data]);

    const addFilm = (title: string, year: number, genre: string, rating: number) => {
        const newFilm : Film = {id: Date.now().toString(), title, year, genre, rating, watched: false};
        setFilms(prev => [...prev, newFilm]);
    }

    const toggleWatched = (id: string) => {
        setFilms(prev => prev.map((film) => film.id === id ? { ...film, watched: !film.watched } : film));
    }

    const setAllAsWatched = () => {
        setFilms((prev) => prev.map(film => ({...film, watched: true})));
    }

    const removeFilm = (id: string) => {
        setFilms(films.filter((film) => film.id !== id));
    }

    useEffect(() => {
        const watchedCount = films.filter(f => f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`
    }, [films])

    return (
        <WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, setAllAsWatched, isLoading, isError, refetch }}>
            { children }
        </WatchlistContext.Provider>
    )
}