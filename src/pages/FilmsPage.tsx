import FilmList from "@/components/FilmList";
import { useContext } from 'react';
import { WatchlistContext } from '@/context/WatchlistProvider';

export default function FilmsPage() {
    const { isLoading, isError, refetch } = useContext(WatchlistContext);

    return (
        <>
            <h1>Watchlist</h1>
            {isLoading && <p>Načítám…</p>}
            {isError && (
                <div>
                    <p>Chyba při načítání dat.</p>
                    <button onClick={() => refetch()}>Zkusit znovu</button>
                </div>
            )}
            {!isLoading && !isError && <FilmList/>}
        </>
    );
}