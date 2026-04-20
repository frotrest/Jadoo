import clsx from 'clsx';
import styles from './destinations.module.css';
import Container from '../../../Container';
import Rome from '@assets/rome.png';
import London from '@assets/london.jpg';
import Europe from '@assets/europe.png';
import React from 'react';
import { IoIosSend } from 'react-icons/io';

const Destinations = () => {
  const destinations = [
    {
      destinationImg: Rome,
      destinationImgAlt: 'rome',
      destinationTitle: 'Rome, Italy',
      destinationDescription: '10 Days Trip',
      destinationPrice: '$5.42k',
    },
    {
      destinationImg: London,
      destinationImgAlt: 'london',
      destinationTitle: 'London, UK',
      destinationDescription: '12 Days Trip',
      destinationPrice: '$4.2k',
    },
    {
      destinationImg: Europe,
      destinationImgAlt: 'full-europe',
      destinationTitle: 'Full Europe',
      destinationDescription: '28 Days Trip',
      destinationPrice: '$15k',
    },
  ];
  return (
    <section className={clsx(styles.destinations)}>
      <Container
        className={clsx(styles.destinationsContent)}
        dataAnimate="fadeInRight"
      >
        <div className={clsx(styles.offersTitle)}>
          <h5 className={clsx(styles.offersContentSubTitle)}>Top Selling</h5>
          <h2 className={clsx(styles.offersContentTitle)}>Top Destinations</h2>
        </div>
        <div className={clsx(styles.cardsDestinations)}>
          {destinations.map((item, index) => (
            <div key={index} className={clsx(styles.cardDestination)}>
              <img
                src={item.destinationImg}
                alt={item.destinationImgAlt}
                className={clsx(styles.cardDestinationImg)}
              />
              <div className={clsx(styles.cardContent)}>
                <div className={clsx(styles.cardContentTitles)}>
                  <h2 className={clsx(styles.cardDestinationTitle)}>
                    {item.destinationTitle}
                  </h2>
                  <p className={clsx(styles.cardDestinationItem)}>
                    <IoIosSend size={25} color="black" />{' '}
                    {item.destinationDescription}
                  </p>
                </div>
                <h3 className={clsx(styles.cardContentPrice)}>
                  {item.destinationPrice}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Destinations;
