const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-blue-500 to-purple-100'>
<div className='max-w-7xl mx-auto px-8 py-20'>
            
            <div className='grid grid-cols-2 gap-16 items-center'>
                {/* Left */}
                <div>
                  <p className='text-blue-600 font-bold uppercase tracking-widest'>
                    New Collection 2026
                  </p>
                  <h1 className='text-6xl font-bold mt-5 leading-tight'>
                    Discover Your
                    <br />
                    Favorite Products
                  </h1>
                  <p className='text-gray-600 text-lg mt-8 leading-8'>
                    Explore premium quality products carefully selected 
                    to make your lifestyle smarter, simpler, and stylish.
                  </p>
                  
                  <div className='mt-10 flex gap-5'>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition'>
                      Shop Now
                    </button>

                    <button className='border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition'>
                      Explore
                    </button>
                  </div>
                </div>

                {/* Right (image) */}
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
                    alt="Hero"
                    className="rounded-3xl shadow-2xl w-[500px] max-w-full"
                  />
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-20">

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

            <h2 className="text-4xl font-bold text-blue-600">
            500+
            </h2>

            <p className="text-gray-600 mt-2">
            Premium Products
            </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

            <h2 className="text-4xl font-bold text-blue-600">
            50K+
            </h2>

            <p className="text-gray-600 mt-2">
            Happy Customers
            </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

            <h2 className="text-4xl font-bold text-blue-600">
            4.9★
            </h2>

            <p className="text-gray-600 mt-2">
            Average Rating
            </p>

        </div>

        </div>        
    </section>    
  )
}

export default Hero
