// src/components/AnimeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard.jsx';

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAnimeData = async () => {
      const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
      setAnimeList(response.data.data);
      console.log(response.data.data)
      setTotalPages(response.data.pagination.last_visible_page);
    };

    fetchAnimeData();
  }, [page]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
      <div className="flex justify-center mt-6">

      </div>
    </div>
  );
};

export default AnimeList;
