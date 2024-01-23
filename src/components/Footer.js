import React from 'react';
import { FooterContauner } from './Footer.style';
import Logo from '../assets/images/logo.svg';
import { FooterDataList, footerSocialIcons } from './Util';
import AndroidDownload from '../assets/images/android-download.svg';
import AppleDownload from '../assets/images/apple-download.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

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
                  <li onClick={() => navigate('/')}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footerMain-list__getApp">
            <h3>Get the app</h3>

            <div className="footerMain-list__getApp-btn">
              <a href="#none" target="_blank">
                <img src={AndroidDownload} alt="Android download " />
              </a>

              <a href="#none" target="_blank">
                <img src={AppleDownload} alt="apple Download" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footerSocials-container">
        <div className="footerSocials-container__contents autoAlign">
          <p>© 2023 ClearLink. All rights reserved.</p>

          <ul>
            {footerSocialIcons.map(({ id, name, image, link }) => (
              <a href={link} key={id}>
                <li>
                  <img src={image} alt={name} />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </section>
    </FooterContauner>
  );
};

export default Footer;
