/* eslint-disable react/prop-types */
// CoffeeData.js
import  { useEffect } from 'react';
import axios from 'axios';

const CoffeeData = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const result = response.data;

        onDataFetched(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return null;
};

export default CoffeeData;
