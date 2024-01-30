import  { useState } from 'react';
import CoffeeData from './CoffeeData';
import CoffeeCard from './CoffeeCard';

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
    <div className='flex justify-center bg-newBlack font-dm  font-semibold text-[1rem]'>
      <div className='h-[30%] w-full backg absolute'></div>

      <div className='z-10 mx-6 md:mx-20 my-20 px-6 md:px-10 py-20 md:py-28 bg-newGrey h-full rounded-xl flex flex-col items-center text-center '>
        <h1 className='text-newWhite text-[2rem] py-4 '>Our Collection</h1>
        <p className='text-newBlue lg:px-60 md:px-10'>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
          expertly roasted in small batches and shipped fresh weekly.
        </p>

        <div>
          <button onClick={handleAll} className='p-4'>All Products</button>
          <button onClick={handleAvailable}>Available now</button>
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
