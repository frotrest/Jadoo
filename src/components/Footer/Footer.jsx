import clsx from 'clsx';
import styles from './footer.module.css';
import Container from '../../Container';
import Logo from '@assets/logo.png';
import GoogleStore from '@assets/google-play.png';
import AppleStore from '@assets/apple-store.png';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.logoInformation)}>
          <img
            src={Logo}
            alt="logo-footer"
            className={clsx(styles.logoInformationImg)}
          />
          <h5 className={clsx(styles.logoInformationTitle)}>
            Book your trip in minute, get full Control for much longer.
          </h5>
        </div>
        <div className={clsx(styles.blockTip)}>
          <h5 className={clsx(styles.blockTipTitle)}>Company</h5>
          <ul className={clsx(styles.listTips)}>
            <li className={clsx(styles.listTipsItem)}>About</li>
            <li className={clsx(styles.listTipsItem)}>Careers</li>
            <li className={clsx(styles.listTipsItem)}>Mobile</li>
          </ul>
        </div>
        <div className={clsx(styles.blockTip)}>
          <h5 className={clsx(styles.blockTipTitle)}>Contact</h5>
          <ul className={clsx(styles.listTips)}>
            <li className={clsx(styles.listTipsItem)}>Help/FAQ</li>
            <li className={clsx(styles.listTipsItem)}>Press</li>
            <li className={clsx(styles.listTipsItem)}>Affilates</li>
          </ul>
        </div>
        <div className={clsx(styles.blockTip)}>
          <h5 className={clsx(styles.blockTipTitle)}>More</h5>
          <ul className={clsx(styles.listTips)}>
            <li className={clsx(styles.listTipsItem)}>Airlinefees</li>
            <li className={clsx(styles.listTipsItem)}>Airline</li>
            <li className={clsx(styles.listTipsItem)}>Low fare tips</li>
          </ul>
        </div>
        <div className={clsx(styles.app)}>
          <div className={clsx(styles.networks)}>
            <div className={clsx(styles.network)}>
              <FaFacebookF size={20} className={clsx(styles.networkImg)} />
            </div>
            <div className={clsx(styles.network)}>
              <FaInstagram size={20} className={clsx(styles.networkImg)} />
            </div>
            <div className={clsx(styles.network)}>
              <FaTwitter size={20} className={clsx(styles.networkImg)} />
            </div>
          </div>
          <h3 className={clsx(styles.appDiscover)}>Discover our app</h3>
          <div className={clsx(styles.stores)}>
            <img src={GoogleStore} alt="google-store" />
            <img src={AppleStore} alt="app-store" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
