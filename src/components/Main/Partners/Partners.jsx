import clsx from 'clsx';
import styles from './partners.module.css';
import Container from '../../../Container';
import Axon from '@assets/axon.png';
import JetStar from '@assets/jetstar.png';
import Expedia from '@assets/expedia.png';
import Qantas from '@assets/qantas.png';
import Alitalia from '@assets/alitalia.png';
import React from 'react';

const Partners = () => {
  const partners = [
    {
      partnerImg: Axon,
    },
    {
      partnerImg: JetStar,
    },
    {
      partnerImg: Expedia,
    },
    {
      partnerImg: Qantas,
    },
    {
      partnerImg: Alitalia,
    },
  ];
  return (
    <section className={clsx(styles.partners)}>
      <Container className={clsx(styles.partnersContent)} dataAnimate="fadeIn">
        {partners.map((item, index) => (
          <div key={index} className={clsx(styles.partner)}>
            <img src={item.partnerImg} alt={`partner-${index}`} />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Partners;
