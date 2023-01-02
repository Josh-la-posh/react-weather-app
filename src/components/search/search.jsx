import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import axios from 'axios';
import { geoWeatherUrl } from '../../api';

const Search = ({onSearchChange}) => {
  
  const [search, setSearch] = useState(null);
  
  const loadOptions = (input) => {
    // const axios = require("axios");
    const config = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${input}`,
      headers: {
        'X-RapidAPI-Key': 'fb1d790b59mshbd6fc80f4b5f592p1194ffjsn73ed4c4df95e',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    // axios(config)
    fetch(`${geoWeatherUrl}`)
    .then(function (response) {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          }
        })
      }
    }).catch(function (error) {
      console.log(error);
    })
  }

  const handleChange = (data) => {
    setSearch(data);
    onSearchChange(data);
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