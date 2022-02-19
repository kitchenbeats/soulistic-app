import React from 'react';

import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {

  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-soulgreen-600 text-soulpink-400">


      {/*  Page content */}
      <main className="flex-grow font-avianoSans">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;