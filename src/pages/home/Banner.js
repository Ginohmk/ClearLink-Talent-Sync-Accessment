import React from 'react';
import { BannerContainer } from './Home.style';
import Button from '../../components/Button';
import Menuavater from '../../assets/images/main-banner-avater.png';
import RobotIcon from '../../assets/images/robot-icon.svg';
import ReviewGroupAvater from '../../assets/images/review-group-avater.png';
import ReviewStars from '../../assets/images/review-stars.svg';

const Banner = () => {
  return (
    <BannerContainer className="mainBanner autoAlign">
      <div className="mainBanner__backgroung-img"></div>

      <section className="mainBanner__leftSection">
        <div className="mainBanner__leftSection-desc">
          <h1>Uniting the world,one video call at a time</h1>
          <p>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>

        <div className="mainBanner__leftSection-actionBtn">
          <Button
            text="Sign up for free"
            bgColor="--blue-700"
            textColor="--base-white"
          />

          <div className="mainBanner__leftSection-actionBtn__desc">
            <img src={RobotIcon} alt="Robot icon" />
            <h3>Discover AI assistant</h3>
          </div>
        </div>

        <div className="mainBanner__leftSection-review">
          <div>
            <img src={ReviewGroupAvater} alt="review group avater" />
          </div>

          <div className="mainBanner__leftSection-review__data">
            <div>
              <img src={ReviewStars} alt="Review stars" />
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </section>

      <section className="mainBanner__rightSection">
        <img src={Menuavater} alt="menu banner avter collection" />
      </section>
    </BannerContainer>
  );
};

export default Banner;
