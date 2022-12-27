import React from 'react';
import './AboutUs.css';
import aboutUs from '../../assets/images/img-about-us.png';

function AboutUs() {
  return (
    <section id="about_us">
      <h4 className="mid-title">About Us</h4>
      <h2 className="big-dark-blue-title">Why choose us ?</h2>
      <div class="about">
        <div class="left">
          <img src={aboutUs} alt="" />
        </div>
        <div class="right">
          <h3 className="big-dark-blue-title">Best Food in The Word</h3>
          <p className="little-title-gray">
            My family eats at this tiny Italian restaurant in North Newark
            almost religiously. It has a screen door, awful wine selection, and
            waitresses who are abrupt at best—but the food is astounding.
          </p>
          <p className="little-title-gray">
            The best ones are reserved for special occasions, and our memories
            of birthdays and anniversaries are made there.
          </p>
          <button>
            <a href="#">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
