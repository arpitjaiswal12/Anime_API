import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full" />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{anime.title_english || anime.title_japanese}</h3>
        <p className="text-gray-700 text-base">{anime.title_japanese}</p>
        <p className="mt-2">Episodes: {anime.episodes}</p>
        <p>Score: {anime.score}</p>
        <p>Rank: {anime.rank}</p>
        <p>Popularity: {anime.popularity}</p>
        <p>Year: {anime.year}</p>
        <Link to={`/anime/${anime.mal_id}`} className="mt-4 text-blue-500">View More</Link>
      </div>
    </div>
  );
};

export default AnimeCard;
