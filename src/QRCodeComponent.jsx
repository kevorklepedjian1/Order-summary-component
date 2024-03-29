import React from 'react';

import img from './images/illustration-hero.svg'
import img1 from './images/icon-music.svg'

const QRCodeComponent = () => {
  return (
    <>
     <div class="container">
    <div class="hero">
      <img src={img} alt=""/>
    </div>
    <div class="text-content">
      <h2 class="title">
        Order Summary
      </h2>
      <p class="subtitle">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div class="plan-box">
        <div class="plan-box-left">
          <img src={img1} alt=""/>
          <div>
            <h5>Annual Plan</h5>
            <p>$59.99/year</p>
          </div>
        </div>
        <a href="#">Change</a>
      </div>
      <a href="#" class="proceed-btn">Proceed to Payment</a>
      <a href="#" class="cancel-btn">Cancel Order</a>
    </div>
  </div>


    </>
  );
};

export default QRCodeComponent;
