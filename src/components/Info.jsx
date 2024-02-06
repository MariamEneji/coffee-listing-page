import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Info = () => {
  const { id } = useParams();
  const [coffeeInfo, setCoffeeInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const coffeeData = response.data;

        const selectedCoffee = coffeeData.find(coffee => coffee.id === parseInt(id));
        setCoffeeInfo(selectedCoffee);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : coffeeInfo ? (
        <div className='w-full bg-newBlack h-screen back flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-20'>
          <div className='rounded-xl mt-30 w-full md:w-1/2 z-10'>
            <img src={coffeeInfo.image} alt="" className='rounded-xl w-full'/>
          </div>
          <div className='md:w-1/2 flex flex-col justify-center items-center z-10 text-newWhite lg:gap-2'> 
            <h1 className='text-4xl lg:text-5xl text-newYellow'>{coffeeInfo.name}</h1>
            <p className='text-2xl lg:3xl'>{coffeeInfo.price}</p>
            <p>This coffee is rated {coffeeInfo.rating ? coffeeInfo.rating : 0}</p>
            <p className='text-newYellow'>{coffeeInfo.available ? 'Place an order for this right now' : 'This coffee is not available right now'}</p>
            <Link to='/' className='border-newPink border px-4 py-2 rounded-full text-newPink hover:bg-newPink hover:text-newWhite'>Back Home</Link>
          </div>
        </div>
      ) : (
        <p>Failed to fetch coffee data.</p>
      )}
    </div>
  );
};

export default Info;
