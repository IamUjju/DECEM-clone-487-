import React, {useState, useEffect} from 'react';

const TwoColumnGrid = () => {
  
 const [position, setPosition] = useState('-translate-x-full');

 useEffect(() => {
    const interval = setInterval(() => {
      setPosition('translate-x-0');
    }, 2000);

    return () => clearInterval(interval);
 }, []);
 return (
    <div className="ml-20 container-snap grid grid-cols-2 gap-4 mt-9">
      <div className=" p-4">
        <div className="flex items-center ml-10">
          <img
            src="https://decemdrinks.com/cdn/shop/files/SPICED_BLEND_01_751e96d6-c66d-48fc-9c66-4e046d1c5e37_1024x1024.jpg?v=1649165419"
            alt="placeholder"
            className="w-2/3 h-auto"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg flex items-center w-1/2">
          How we socialise together is changing rapidly. Alcohol is a beautifully, functional elixir but (like most of us know already) too much of it is never a good thing. DECEM is designed to be enjoyed anytime, as a lighter alcohol option which means you can keep the conversations flowing late into the night.
        </div>
      </div>
      <div className=" p-4">
        <div className=" text-lg flex items-center w-1/2 ml-10">
          How we socialise together is changing rapidly. Alcohol is a beautifully, functional elixir but (like most of us know already) too much of it is never a good thing. DECEM is designed to be enjoyed anytime, as a lighter alcohol option which means you can keep the conversations flowing late into the night.
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <img
            src="https://decemdrinks.com/cdn/shop/files/SPICED_BLEND_02_5c53d7a5-9a82-4485-8308-6d9ec494ef13_1024x1024.jpg?v=1649165421"
            alt="placeholder"
            className="w-2/3 h-auto mr-2"
          />
        </div>
      </div>
    
      <h1 className=" mt-8 mb-10 overflow-x-hidden overflow-y-hidden whitespace-nowrap text-5xl text-black-600 font-bold animate-left flex">Long Nights To Remember</h1>
      
    </div>
 );
};

export default TwoColumnGrid;