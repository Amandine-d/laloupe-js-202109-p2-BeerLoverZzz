import React, { useState, useEffect } from 'react';
import './Search.css';

function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search_results">
        {datas
          .filter((val) => {
            return val.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <div className="search_result" key={val.id}>
                {val.name}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
