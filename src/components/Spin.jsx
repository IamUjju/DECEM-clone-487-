const App = () => {
 return (
    <div className=" ml-16 grid grid-cols-3 gap-4 mb-5">
      <div className="p-4">
        <h1 className="text-4xl">Sign up for</h1>
        <h1 className="text-3xl">new launches and</h1>
        <h1 className="text-4xl">EXCLUSIVE OFFERS</h1>
        <div class="relative h-11 w-full min-w-[200px]">
    <input
      placeholder="Enter Email Address"
      className=" h-10 peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-black-700 outline outline-0 transition-all placeholder-shown:border-blue-black-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    />
    
  </div>
      </div>
      <div className=" justify-center p-4 ml-10">
        <img loading="lazy" 
        src="https://decemdrinks.com/cdn/shop/t/20/assets/big-circle.png?v=112673734253604954591676011153" alt="spin" 
        className=" rotate-360 transition delay-10 duration-300 rounded-full hover:rotate-90 w-1/2" />
      </div>
      <div className="p-4 mr-0">
        <p className="text-4xl">Follow us</p>
        <p className="text-4xl">on Instagram</p>
        <p className="text-4xl">@DECEMDRINKS</p>
      </div>

    </div>
 );
};

export default App;