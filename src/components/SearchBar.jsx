import React from 'react';
import { FaSearch } from "react-icons/fa";


export default function SearchBar() {
  return (
    <div className="form">
          <input type="text" placeholder="items, collections and creators" />
          <select name="Category" id="" placeholder="Category">
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="Architecture">Architecture</option>
            <option value="Photography">Photography</option>
            <option value="Games">Games</option>
            <option value="Music">Music</option>
          </select>
          <FaSearch className="search-icon" />
        </div>
  )
}
