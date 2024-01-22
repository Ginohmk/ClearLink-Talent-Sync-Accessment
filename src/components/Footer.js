import React from 'react';
import { FooterContauner } from './Footer.style';
import Logo from '../assets/images/logo.svg';
import { FooterDataList } from './Util';

const Footer = () => {
  return (
    <FooterContauner>
      <section className="footerMain autoAlign">
        <div className="footerMain-container ">
          <div>
            <img src={Logo} alt="Clear Link Logo " />
          </div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        <div className="footerMain-list">
          {FooterDataList.map(({ name, list }) => (
            <div className="footerMain-list__item">
              <h3>{name}</h3>

              <ul>
                {list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3>Get the app</h3>

            <div></div>
          </div>
        </div>
      </section>
    </FooterContauner>
  );
};

export default Footer;
