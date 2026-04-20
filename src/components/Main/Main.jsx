import Destinations from './Destinations/Destinations';
import Offers from './Offers/Offers';
import React from 'react';
import Trip from './Trip/Trip';
import Testimonials from './Testimonials/Testimonials';
import Partners from './Partners/Partners';
import Subscription from './Subscription/Subscription';

const Main = () => {
  return (
    <main>
      <Offers />
      <Destinations />
      <Trip />
      <Testimonials />
      <Partners />
      <Subscription />
    </main>
  );
};

export default Main;
