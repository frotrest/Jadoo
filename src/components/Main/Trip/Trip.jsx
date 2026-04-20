import clsx from 'clsx';
import styles from './trip.module.css';
import Container from '../../../Container';
import Trips from '@assets/trips.png';
import React from 'react';
import { BiArea } from 'react-icons/bi';
import { TbSwimming } from 'react-icons/tb';
import { FaTaxi } from 'react-icons/fa';

const Trip = () => {
  const tripsOptions = [
    {
      tripImg: (
        <BiArea
          className={clsx(styles.tripStepImg)}
          style={{ background: 'rgba(240, 187, 31, 1)' }}
          color="white"
        />
      ),
      tripDescription: 'Choose Destination',
    },
    {
      tripImg: (
        <TbSwimming
          className={clsx(styles.tripStepImg)}
          style={{ background: 'rgba(241, 90, 43, 1)' }}
          color="white"
        />
      ),
      tripDescription: 'Make Payment',
    },
    {
      tripImg: (
        <FaTaxi
          className={clsx(styles.tripStepImg)}
          style={{ background: 'rgba(0, 99, 128, 1)' }}
          color="white"
        />
      ),
      tripDescription: 'Reach Airport on Selected Date',
    },
  ];
  return (
    <section className={clsx(styles.trips)}>
      <Container className={clsx(styles.tripsContent)} dataAnimate="fadeInLeft">
        <div className={clsx(styles.tripsBlock)}>
          <div className={clsx(styles.tripsTitles)}>
            <h5 className={clsx(styles.tripsBlockSubTitle)}>Easy and Fast</h5>
            <h2 className={clsx(styles.tripsBlockTitle)}>
              Book your next trip in 3 easy steps
            </h2>
          </div>
          <div className={clsx(styles.tripsSteps)}>
            {tripsOptions.map((item, index) => (
              <div key={index} className={clsx(styles.tripStep)}>
                {item.tripImg}
                <div className={clsx(styles.tripStepText)}>
                  <h5 className={clsx(styles.tripStepTextTitle)}>
                    {item.tripDescription}
                  </h5>
                  <p className={clsx(styles.tripStepTextItem)}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={Trips} alt="trips" />
      </Container>
    </section>
  );
};

export default Trip;
