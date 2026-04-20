import clsx from 'clsx';
import styles from '../header.module.css';
import Container from '../../../Container';
import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import HeroImg from '@assets/hero.png';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <div className={styles.heroText}>
          <h5 className={clsx(styles.heroTextSubTitle)}>
            Best Destinations around the world
          </h5>
          <h1 className={clsx(styles.heroTextTitle)}>
            Travel, enjoy and live a new and full life
          </h1>
          <p className={clsx(styles.heroTextDescription)}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className={clsx(styles.heroBtns)}>
            <button className={clsx(styles.findOut)}>Find out more</button>
            <a href="#" className={clsx(styles.demo)}>
              <FaPlay
                size={50}
                color="white"
                className={clsx(styles.demoImg)}
              />{' '}
              Play demo
            </a>
          </div>
        </div>
        <img src={HeroImg} alt="hero" className={clsx(styles.heroContentImg)} />
      </Container>
    </section>
  );
};

export default Hero;
