import React from 'react';
import { MainContainer } from './Home.style';
import {
  SocialProofs,
  whyLectieRowOneOptions,
  whyLectieRowTwoOptions,
} from './Util';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

import OptionsAvatar from '../../assets/images/options-avatar.svg';
import Shopify from '../../assets/images/shopify.svg';
import StarRating from '../../assets/images/stars.svg';
import Useravatar from '../../assets/images/user-avatar.svg';
import TestimonyAvatar from '../../assets/images/testimony-avatar.svg';

const Main = () => {
  return (
    <MainContainer className="main">
      <section className="main-socialProofs">
        <p className="main-socialProofs__headText">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="main-socialProofs__images">
          {SocialProofs.map(({ name, image }) => (
            <div key={name}>
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      </section>

      <section className="main-whyClearLink">
        <div className="main-whyClearLink__heading">
          <div className="main-whyClearLink__heading-desc">
            <h4>The ClearLink Advantage</h4>

            <h2>Why choose ClearLink?</h2>
          </div>

          <p>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="main-whyClearLink__options">
          <div className="main-whyClearLink__options-content">
            <div className="main-whyClearLink__options-content__items">
              {whyLectieRowOneOptions.map(({ image, name, content, id }) => (
                <div
                  className="main-whyClearLink__options-content__items-item"
                  key={id}
                >
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="main-whyClearLink__options-content__items">
              {whyLectieRowTwoOptions.map(({ image, name, content, id }) => (
                <div
                  className="main-whyClearLink__options-content__items-item"
                  key={id}
                >
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="main-whyClearLink__options__avatar">
            <img src={OptionsAvatar} alt="Options avatar" />
          </div>
        </div>
      </section>

      <section className="main-testimonies">
        <div className="main-testimonies-content">
          <div className="main-testimonies-content__desc">
            <div className="main-testimonies-content__desc-shopifyImg">
              <img src={Shopify} alt="Shopify logo" />
            </div>

            <div>
              <img src={StarRating} alt="Star ratning" />
            </div>

            <h3>
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, andtop-notch security make it essential for our
              team.
            </h3>
            <div className="main-testimonies-content__desc-userContents">
              <div className="main-testimonies-content__desc-userContents__item">
                <div>
                  <img src={Useravatar} alt="user profile pitcture" />
                </div>

                <div>
                  <h4>Sarah Thompson</h4>
                  <p>Project Manager, Shopify</p>
                </div>
              </div>

              <div className="main-testimonies-content__desc-userContents__arrows">
                <HiOutlineArrowSmLeft />

                <HiOutlineArrowSmRight />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={TestimonyAvatar} alt="Testimony avatar" />
        </div>
      </section>
    </MainContainer>
  );
};

export default Main;
