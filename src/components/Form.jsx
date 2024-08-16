import React, { useState } from 'react';

const Form = ({ formSubmit }) => {
    const [manga, setManga] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        //Validar que el primer input tenga al menos 3 caracteres y que no empiece con ' '
        if (manga.trim().length < 3 || manga.startsWith(' ')) {
            setError(true);
            return;
        }

        //Validar que el segundo input tenga al menos 6 caracteres
        if (author.length < 6) {
            setError(true);
            return;
        }

        setError(false);
        formSubmit({ manga, author });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Manga: </label>
            <input type="text" value={manga} onChange={(e) => setManga(e.target.value)} />
            <label>Autor: </label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button type="submit">Enviar</button>

            {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta.</p>}
        </form>
    );
};

export default Form;
