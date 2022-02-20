import React from 'react';

function HeroHome() {

  return (
    <section className="relative">


      <div className="mx-auto px-4 sm:px-6 hero-image" >

        {/* Hero content */}
        <div className="mx-auto max-w-5xl pt-32 pb-12 md:pt-40 md:pb-20 " >

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 font-aviano" data-aos="zoom-y-out">Soulistic Records</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-soulpink-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Art From The Soul - About The Soul - For The Soul</p>
          
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
             
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white text-soulgreen-600 rounded-full font-medium group p-4 shadow-lg">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Listen To New Releases</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;