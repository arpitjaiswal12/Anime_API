// src/components/AnimeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      setAnime(response.data.data);
      console.log(anime.trailer.url);
    };

    fetchAnimeDetails();
  }, [id]);

  if (!anime) return <div className="text-center text-2xl p-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      {/* Top section with the poster and basic details */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <img
            className="rounded-lg shadow-lg w-full h-full object-cover"
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            {anime.title_english || anime.title_japanese}
          </h1>
          {/* Small Image and Additional Details */}
          <div className="flex flex-col md:flex-row">
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-32 h-32 rounded-lg mr-4 shadow-lg"
            />
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Duration:</span> {anime.duration}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Rating:</span> {anime.rating}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Episodes:</span> {anime.episodes}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Year:</span> {anime.year}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Score:</span> {anime.score}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Rank:</span> {anime.rank}
              </p>
            </div>
          </div>

          {/* Genres */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Genres:</h2>
            <div className="flex flex-wrap">
              {anime.genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* Producer Details */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Producer(s):</h2>
            <p className="text-gray-600">
              {anime.producers.map((producer) => producer.name).join(", ")}
            </p>
          </div>

          {/* Streaming Info */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Streaming Platforms:</h2>
            <div className="flex flex-wrap">
              {anime.streaming && anime.streaming.length > 0 ? (
                anime.streaming.map((platform) => (
                  <span
                    key={platform.mal_id}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {platform.name}
                  </span>
                ))
              ) : (
                <span className="text-gray-600">Not available</span>
              )}
            </div>
          </div>

          {/* Trailer Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Watch Trailer:</h2>
            <div className="relative">
              <iframe
                src={anime.trailer.embed_url}
                title="Anime Trailer"
                className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Synopsis and Relations */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
        <p className="text-gray-700 leading-relaxed">{anime.synopsis}</p>
      </div>

      {/* Related Anime Section */}
      {anime.related && anime.related.length > 0 && (
        <div className="bg-white mt-8 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Related Anime</h2>
          <div className="flex flex-wrap">
            {anime.related.map((relatedAnime) => (
              <div key={relatedAnime.mal_id} className="w-full md:w-1/3 p-2">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-semibold">
                    {relatedAnime.title}
                  </p>
                  <p className="text-gray-500 text-sm">{relatedAnime.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetail;
