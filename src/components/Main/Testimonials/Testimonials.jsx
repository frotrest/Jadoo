import clsx from 'clsx';
import styles from './testimonials.module.css';
import Container from '../../../Container';
import Mike from '@assets/mike.png';
import React from 'react';
import { BiArea } from 'react-icons/bi';
import { TbSwimming } from 'react-icons/tb';
import { FaTaxi } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';

const Testimonials = () => {
  const testimonials = [
    {
      text: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
      name: 'Mike Taylor',
      location: 'Lahore, Pakistan',
    },
    {
      text: 'Of believed or diverted no...',
      name: 'Chris Thomas',
      location: 'CEO of Red Button',
    },
  ];
  return (
    <section className={clsx(styles.testimonials)}>
      <Container
        className={clsx(styles.testimonialsContent)}
        dataAnimate="fadeIn"
      >
        <div className={clsx(styles.testimonialsBlock)}>
          <h5 className={clsx(styles.testimonialsBlockSubTitle)}>
            Testimonials
          </h5>
          <h2 className={clsx(styles.testimonialsBlockTitle)}>
            What people say about Us.
          </h2>
        </div>
        <Swiper
          direction="vertical"
          modules={[Autoplay, EffectCreative]}
          effect="creative"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={600}
          pagination={{ clickable: true }}
          slidesPerView={1}
          grabCursor={true}
          watchSlidesProgress={true}
          creativeEffect={{
            prev: {
              translate: [0, '-10%', -500],
              opacity: 0,
            },
            next: {
              translate: [40, 40, -200],
              scale: 0.9,
              opacity: 1,
            },
          }}
          style={{ height: '350px', overflow: 'visible' }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <img
                src={Mike}
                alt={`customer-${index}`}
                className={clsx(styles.customerCardImg)}
              />
              <div className={clsx(styles.customerCard)}>
                <p className={clsx(styles.customerCardText)}>“{item.text}”</p>
                <div className={clsx(styles.customerInfo)}>
                  <h3 className={clsx(styles.customerInfoName)}>{item.name}</h3>
                  <span className={clsx(styles.customerInfoLocation)}>
                    {item.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
