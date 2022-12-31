import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = (onSearchChange) => {

  const [search, setSearch] = useState(null);
  const handleChange = (data) => {
    setSearch(data);
    onSearchChange(data);
  }
  const loadOptions = (input) => {
    
  }

  return (
      <AsyncPaginate 
        placeholder="Search a city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
  )
}

export default Search;