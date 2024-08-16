import React from 'react'

const Card = ({manga, author}) => {
  return (
    <div>
      <h2>Manga: {manga}</h2>
      <p>Autor: {author}</p>
    </div>
  )
}

export default Card