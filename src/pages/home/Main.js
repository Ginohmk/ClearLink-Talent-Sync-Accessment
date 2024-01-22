import React, { Fragment, useState } from 'react';
import { MainContainer } from './Home.style';
import {
  FAQs,
  SocialProofs,
  communication,
  whyLectieRowOneOptions,
  whyLectieRowTwoOptions,
} from './Util';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

import OptionsAvatar from '../../assets/images/options-avatar.svg';
import Shopify from '../../assets/images/shopify.svg';
import StarRating from '../../assets/images/stars.svg';
import Useravatar from '../../assets/images/user-avatar.svg';
import TestimonyAvatar from '../../assets/images/testimony-avatar.svg';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import CheckBox from '../../assets/images/check-icon.svg';
import ScreenAvatar from '../../assets/images/screen-time.svg';
import Footer from '../../components/Footer';

const Main = () => {
  const [FAQsData, setFAQsData] = useState([...FAQs]);
  const navigate = useNavigate();

  // Update fag open/close
  const updateFAQsIsOpen = (id) => {
    const newFAQs = FAQsData.map((faq) => {
      if (faq.id === id) {
        return {
          ...faq,
          isOpen: !faq.isOpen,
        };
      } else {
        return {
          ...faq,
          isOpen: false,
        };
      }
    });

    setFAQsData([...newFAQs]);
  };

  return (
    <MainContainer className="main">
      {/* Socail Proof */}
      <section className="main-socialProofs autoAlign">
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

      {/* Why Clear Link */}
      <section className="main-whyClearLink autoAlign">
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

      {/* Testimony */}
      <section className="main-testimonies">
        <div className="main-testimonies__container autoAlign ">
          <div className="main-testimonies__container-content">
            <div className="main-testimonies__container-content__desc">
              <div className="main-testimonies__container-content__desc-shopifyImg">
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
              <div className="main-testimonies__container-content__desc-userContents">
                <div className="main-testimonies__container-content__desc-userContents__item">
                  <div>
                    <img src={Useravatar} alt="user profile pitcture" />
                  </div>

                  <div>
                    <h4>Sarah Thompson</h4>
                    <p>Project Manager, Shopify</p>
                  </div>
                </div>

                <div className="main-testimonies__container-content__desc-userContents__arrows">
                  <HiOutlineArrowSmLeft />

                  <HiOutlineArrowSmRight />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={TestimonyAvatar} alt="Testimony avatar" />
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="main-FAQ autoAlign ">
        <div className="main-FAQ__supportSection">
          <div className="main-FAQ__supportSection-heading">
            <h4>Support</h4>

            <h2>FAQs</h2>
          </div>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{' '}
            <button onClick={() => navigate('/')}>
              {' '}
              chat to our friendly team.
            </button>
          </p>
        </div>

        <div className="main-FAQ__faqs">
          {FAQsData.map(({ id, title, isOpen, descrip }) => (
            <div key={id}>
              {!isOpen ? (
                <div
                  className="main-FAQ__faqs-heading close"
                  onClick={() => updateFAQsIsOpen(id)}
                >
                  <h4>{title}</h4>
                  <FiPlusCircle />
                </div>
              ) : (
                <div className="main-FAQ__faqs-open">
                  <div
                    className="main-FAQ__faqs-headingOpen"
                    onClick={() => updateFAQsIsOpen(id)}
                  >
                    <h4>{title}</h4>

                    <FiMinusCircle />
                  </div>

                  <p>{descrip}</p>
                </div>
              )}

              {!isOpen && id !== FAQsData.length && <hr />}
            </div>
          ))}
        </div>
      </section>

      {/* Perfect communication */}

      <section className="main-communication">
        <div className="main-communication__container autoAlign">
          <div className="main-communication__container-leftSection">
            <h2>Ready to clear the path to perfect communication?</h2>

            <ul className="main-communication__container-leftSection__list">
              {communication.map(({ text }) => (
                <li>
                  <div>
                    <img src={CheckBox} alt="Checkbox icon" />
                  </div>

                  <p>{text}</p>
                </li>
              ))}
            </ul>

            <div className="main-communication__container-leftSection__btn">
              <Button
                text="Talk to sales"
                borderColor="--gray-400"
                bgColor="--base-white"
                textColor="--gray-900"
              />

              <Button
                text="Sign up for free"
                bgColor="--blue-700"
                textColor="--base-white"
              />
            </div>
          </div>

          <div className="main-communication__container-rightSection">
            <img src={ScreenAvatar} alt="Avatar" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </MainContainer>
  );
};

export default Main;
