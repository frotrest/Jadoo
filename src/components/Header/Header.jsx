import clsx from 'clsx';
import styles from './header.module.css';
import Container from '../../Container';
import Logo from '@assets/logo.png';
import React from 'react';

const Header = ({ children }) => {
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <img src={Logo} alt="logo" className={clsx(styles.headerContentImg)} />
        <nav className={clsx(styles.navBar)}>
          <a href="#" className={clsx(styles.navBarItem)}>
            Destinations
          </a>
          <a href="#" className={clsx(styles.navBarItem)}>
            Hotels
          </a>
          <a href="#" className={clsx(styles.navBarItem)}>
            Flights
          </a>
          <a href="#" className={clsx(styles.navBarItem)}>
            Bookings
          </a>
          <a href="#" className={clsx(styles.navBarItem)}>
            Login
          </a>
        </nav>
        <button className={clsx(styles.headerContentBtn)}>Sign up</button>
      </Container>
      {children}
    </header>
  );
};

export default Header;
