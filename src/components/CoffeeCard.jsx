/* eslint-disable react/prop-types */
// CoffeeCard.js

import starfull from '../assets/Star_fill.svg'

import starempty from '../assets/Star.svg'

import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {

  

  return (

   <Link to={`/coffee/${coffee.id}`}>
    <div className=" rounded-xl mb-10 text-[0.875rem]">
      <div className="">
        <div className="relative h-40 ">
          <img className="rounded-xl h-full object-contain " src={coffee.image} alt={coffee.name} />
        
          {coffee.popular ?  (
            <div className="absolute top-2 left-2 bg-newYellow px-4 py-2  rounded-full text-[0.625rem]">Popular</div>
          ) : '' }

        </div>

        <div className="flex justify-between py-4">
          <h1 className="text-newWhite">{coffee.name}</h1>

          <div className="px-2 bg-newLightBlue rounded items-center flex text-[0.75rem]">
            {coffee.price}
          </div>


        </div>

      
          {coffee.rating ? (
            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <img src={starfull} alt="" />
              <h1 className='text-newWhite'>{coffee.rating % 1 === 0 ? coffee.rating + '.0' : coffee.rating }</h1>
              <h1 className='text-newBlue'>({coffee.votes} votes)</h1>
              </div>

              {!coffee.available ? (
                <h1 className='text-newPink'>Sold Out</h1>
              ) : ''}
              
            </div>
          ) : (
            <div className='flex gap-2'>
              <img src={starempty} alt="" />
              <h1 className='text-newBlue'>No ratings</h1>
            </div>
          )}
        
        
      </div>
    </div>
   
   </Link>
  );
};

export default CoffeeCard;
