import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: 480, margin: '0 auto' }}>
      <h1>4IT427 – Můj projekt</h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Projekt funguje! Začni stavět svou aplikaci.
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '0.5rem 1.25rem',
          background: '#0f6e56',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Kliknutí: {count}
      </button>
    </div>
  );
}
