import { FaArrowRight } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const Content = () => {

  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch cards data from the API
    const fetchCardsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getCards'); // Adjust the URL if necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setCardsData(data.data.cards);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCardsData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div class=" bg-violet-200">
        <div class="pt-20 pb-5 text-5xl font-normal">
          <h1 class="max-w-6xl mx-auto text-center">How can we help?</h1>
        </div>
        <form class="max-w-md mx-auto pb-16">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit" class="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 "><FaArrowRight /></button>
          </div>
        </form>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 bg-white max-w-4xl mx-auto mt-24 mb-24">
        {/* Step 2: Use the map function to create a card for each item in the array */}
        {filteredCards.map((card, index) => (
          <a href="/" key={index} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
          </a>
        ))}
      </div>
    </>
  )
}

export default Content
