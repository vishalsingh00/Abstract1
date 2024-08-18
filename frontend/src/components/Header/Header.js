import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Header = () => {
  return (
    <div class=" bg-violet-200">
      <div class="pt-20 pb-5 text-5xl font-normal">
      <h1 class="max-w-6xl mx-auto text-center">How can we help?</h1> 
      </div>
<form class="max-w-md mx-auto pb-16">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" class="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 "><FaArrowRight /></button>
    </div>
</form>

    </div>
  )
}

export default Header
