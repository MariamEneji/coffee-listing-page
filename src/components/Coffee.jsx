import  { useState } from 'react';
import CoffeeData from './CoffeeData';
import CoffeeCard from './CoffeeCard';
import curl from '../assets/vector.svg'

const Coffee = () => {
  const [coffeeData, setCoffeeData] = useState(null);

  const onDataFetched = (data) => {
    setCoffeeData(data);
  };

  const [available, setAvailable] = useState(false)

const handleAvailable = () => {
setAvailable(true)
}

const handleAll = () => {
setAvailable(false)
}

const filteredCoffeeData = available ? coffeeData?.filter((coffee) => coffee.available) : coffeeData

  return (
    <div className='flex justify-center bg-newBlack font-dm   text-[1rem] tracking-wider'>
      <div className='h-[45%] md:h-[25%] w-full backg absolute'></div>

      <div className='z-10 mx-12 md:mx-20 my-28 px-10 md:px-10 py-20 md:py-28 bg-newGrey h-full rounded-xl flex flex-col items-center text-center '>
        <img src={curl} alt="" className='absolute -right-4 md:right-[13rem] lg:right-[23.5rem] top-36  lg:top-44 md:top-40' />
        <h1 className='text-newWhite text-[2rem]  z-20 font-semibold '>Our Collection</h1>
        <p className='text-newBlue lg:px-60 md:px-10 z-20'>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
          expertly roasted in small batches and shipped fresh weekly.
        </p>

        <div className='pb-4'>
          <button onClick={handleAll} className={!available ? 'bg-newBlue m-2  px-4 py-2 rounded-xl text-newWhite ' : 'm-2  px-4 py-2   text-newWhite'}>All Products</button>
          <button onClick={handleAvailable} className={available ? 'bg-newBlue m-2 px-4 py-2 rounded-xl text-newWhite ' : 'm-2   text-newWhite px-4 py-2 '}>Available now</button>
        </div>

        {coffeeData ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            
            {filteredCoffeeData.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        
        <CoffeeData onDataFetched={onDataFetched} />
      </div>
    </div>
  );
};

export default Coffee;
