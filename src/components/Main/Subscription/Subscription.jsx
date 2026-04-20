import clsx from 'clsx';
import styles from './subscription.module.css';
import Container from '../../../Container';
import Mail from '@assets/mail.png';
import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`your email is: ${email}`);
    setEmail('');
  };
  return (
    <section className={clsx(styles.subscription)}>
      <Container
        className={clsx(styles.subscriptionContent)}
        dataAnimate="fadeInLeft"
      >
        <img
          src={Mail}
          alt="mail"
          className={clsx(styles.subscriptionContentMail)}
        />
        <h2 className={clsx(styles.subscriptionContentTitle)}>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>
        <form className={clsx(styles.subscriptionForm)} onSubmit={handleSubmit}>
          <label className={clsx(styles.subscriptionFormLabel)}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={clsx(styles.subscriptionFormInput)}
            />
          </label>
          <button className={clsx(styles.subscriptionFormBtn)} type="submit">
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Subscription;
