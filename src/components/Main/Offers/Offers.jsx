import clsx from 'clsx';
import styles from './offer.module.css';
import Container from '../../../Container';
import Weather from '@assets/weather.png';
import AirPlane from '@assets/airplane.png';
import Events from '@assets/events.png';
import Customization from '@assets/customization.png';
import React from 'react';

const Offers = () => {
  const offers = [
    {
      offerImg: Weather,
      offerImgAlt: 'weather',
      offerTitle: 'Calculated Weather',
      offerDescription:
        'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      offerImg: AirPlane,
      offerImgAlt: 'air-plane',
      offerTitle: 'Best Flights',
      offerDescription:
        'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      offerImg: Events,
      offerImgAlt: 'events',
      offerTitle: 'Local Events',
      offerDescription:
        'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    },
    {
      offerImg: Customization,
      offerImgAlt: 'customization',
      offerTitle: 'Customization',
      offerDescription:
        'We deliver outsourced aviation services for military customers',
    },
  ];
  return (
    <section className={clsx(styles.offers)}>
      <Container
        className={clsx(styles.offersContent)}
        dataAnimate="fadeInLeft"
      >
        <div className={clsx(styles.offersTitle)}>
          <h5 className={clsx(styles.offersContentSubTitle)}>Category</h5>
          <h2 className={clsx(styles.offersContentTitle)}>
            We Offer Best Services
          </h2>
        </div>
        <div className={clsx(styles.cardsOffers)}>
          {offers.map((item, index) => (
            <div key={index} className={clsx(styles.cardOffer)}>
              <img src={item.offerImg} alt={item.offerImgAlt} />
              <h2 className={clsx(styles.cardOfferTitle)}>{item.offerTitle}</h2>
              <p className={clsx(styles.cardOfferItem)}>
                {item.offerDescription}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Offers;
