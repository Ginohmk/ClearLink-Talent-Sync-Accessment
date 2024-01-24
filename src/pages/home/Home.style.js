import styled from 'styled-components';
import BackgroundImg from '../../assets/images/background-pattern.svg';

export const HomeContainer = styled.section``;

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2.75rem;
  flex: 1;
  margin-top: 10rem;
  margin-bottom: 6rem;

  .mainBanner__backgroung-img {
    position: absolute;
    top: 0;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    max-width: 1440px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    z-index: -1;
  }

  .mainBanner__leftSection {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 780px;
    width: 100%;

    &-desc {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    &-actionBtn {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      &__desc {
        display: flex;
        align-items: flex-end;

        gap: 0.75rem;

        h3 {
          color: var(--blue-700) !important;
        }

        img {
          width: 26px;
          height: 26px;
        }
      }
    }

    .mainBanner__leftSection-review {
      display: flex;
      align-items: flex-end;
      gap: 1rem;

      .mainBanner__leftSection-review__data {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        p {
          font-weight: 500;
          color: var(--gray-600);
          font-size: 1.3rem;
        }
      }
    }
  }

  .mainBanner__rightSection {
    img {
      image-rendering: crisp-edges;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1275px) {
    flex-direction: column;

    .mainBanner__leftSection {
      align-items: center;
      max-width: 100%;

      &-desc {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 475px) {
    .mainBanner__leftSection {
      &-actionBtn {
        flex-direction: column-reverse;
        width: 100%;

        button {
          width: 90%;
        }
      }
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  .main-socialProofs {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__headText {
      align-self: center;
    }

    &__images {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4.3125rem;
      flex: 1;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  .main-whyClearLink {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 6rem 0 4rem 0;
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    position: relative;

    &__heading {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      &-desc {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        h4 {
          color: var(--blue-700);
        }
      }

      p {
        max-width: 825px;
      }
    }

    &__options {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 4rem;
      flex-wrap: wrap;

      &-content {
        display: flex;
        flex: 1;

        gap: 2.5rem;

        &__items {
          display: flex;
          flex-direction: column;
          gap: 3.75rem;

          &-item {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            p {
              font-size: 1.125rem;
            }

            img {
              width: 65px;
              height: 65px;
            }
          }
        }
      }

      &-avatar {
        position: relative;

        &__arrow {
          position: absolute;
          top: -11.5rem;
          right: 13.5rem;
          width: 238.23px;

          img {
            width: 100%;
          }
        }
      }
    }
  }

  .main-testimonies {
    background-color: var(--gray-50);
    padding: 6rem 0 4rem 0;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 4rem;

      &-content {
        &__desc {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 640px;

          &-shopifyImg {
            width: 112.79px;
            height: 32px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          h3 {
            font-size: clamp(1.75rem, 2.5vw, 2.55rem);
            line-height: 60px;
          }

          &-userContents {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__item {
              display: flex;
              align-items: center;
              gap: 6px;

              h4 {
                font-size: 1.25rem;
              }

              p {
                font-size: 1.125rem;
              }
            }

            &__arrows {
              display: flex;
              align-items: center;
              gap: 2rem;

              &-container {
                width: 56px;
                height: 56px;
                border-radius: 28px;
                border: 1px solid var(--blue-100);
                background-color: var(--base-white);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                svg {
                  color: var(--blue-700);
                  font-size: 1.9rem;
                }
              }
            }
          }
        }
      }

      &-testimonyAvatar {
        max-width: 640px;
        img {
          width: 100%;
        }
      }
    }
  }

  .main-FAQ {
    display: flex;

    justify-content: space-between;
    gap: 4rem;

    padding: 6rem 0 4rem 0;

    &__supportSection {
      max-width: 547px;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 1.24rem;

      p {
        font-size: 1.4rem;

        button {
          border: none;
          background-color: transparent;
          text-decoration: underline;
          font-size: 1.4rem;
          color: var(--gray-500);
          cursor: pointer;
        }
      }

      &-heading {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        h4 {
          color: var(--blue-700);
          font-size: 1.125rem;
        }
      }
    }

    &__faqs {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      max-width: 701px;

      &-heading,
      &-headingOpen {
        display: flex;
        align-items: center;
        gap: 1.35rem;
        justify-content: space-between;
        cursor: pointer;
        padding: 2rem;
        h4 {
          font-size: 1.22rem;
        }

        svg {
          color: var(--gray-400);
          font-size: 1.5rem;
        }
      }

      hr {
        border-radius: 16px;
        height: 1px;
        max-width: 765px;

        border: 1px solid var(--gray-200);
        background-color: var(--gray-200);
      }

      &-open {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border-radius: 16px;

        padding: 2rem;

        border: 2px solid var(--gray-200);
        background-color: var(--gray-50);

        .main-FAQ__faqs-headingOpen {
          padding: 0;
        }

        p {
          font-size: 1.125rem;
        }
      }
    }
  }

  .main-communication {
    position: relative;

    width: 100%;
    display: flex;
    justify-content: flex-end;

    &__container {
      display: flex;
      justify-content: space-between;

      gap: 5rem;
      width: 95vw;

      &-leftSection {
        display: flex;
        flex-direction: column;

        gap: 2rem;
        max-width: 599px;

        &__list {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.43rem;

          li {
            display: flex;
            gap: 4px;
            text-decoration: none;
            list-style: none;

            img {
              width: 30px;
              height: 30px;
            }
          }
        }

        &__btn {
          display: flex;
          gap: 8px;
          align-items: center;
        }
      }

      &-rightSection {
        border-top: 8px solid var(--gray-900);
        border-bottom: 8px solid var(--gray-900);
        border-left: 8px solid var(--gray-900);
        border-radius: 12px;
        max-width: 940px;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1275px) {
    .main-whyClearLink {
      &__options {
        flex-direction: column;

        &-avatar {
          width: 100%;
          display: flex;
          justify-content: center;

          &__arrow {
            display: none;
          }

          &__groupImg {
            max-width: 789px;
            overflow-y: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .main-testimonies {
      &__container {
        flex-direction: column;
        gap: 8rem;

        &-content {
          width: 100%;
          &__desc {
            max-width: 940px;
            width: 100%;
          }
        }
      }
    }

    .main-FAQ {
      flex-direction: column;

      &__supportSection {
        max-width: 940px;
        width: 100%;
      }

      &__faqs {
        max-width: 100%;
      }
    }

    .main-communication {
      &__container {
        flex-direction: column;

        /* autoAlign */
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;

        &-leftSection {
          max-width: 940px;
          width: 100%;
          &__btn {
            gap: 1rem;
          }
        }

        &-rightSection {
          border: 8px solid var(--gray-900);

          align-self: center;
        }
      }
    }
  }

  @media screen and (max-width: 645px) {
    .main-socialProofs {
      &__headText {
        text-align: center;
      }
    }
    .main-whyClearLink {
      &__options {
        flex-direction: column;
        &-content {
          flex-direction: column;
        }
      }
    }

    .main-testimonies {
      &__container {
        flex-direction: column;
        gap: 8rem;

        &-content {
          width: 100%;
          &__desc {
            &-userContents {
              flex-direction: column;
              gap: 2rem;

              &__arrows {
                gap: 4.5rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 475px) {
    .main-communication {
      &__container {
        flex-direction: column;

        &-leftSection {
          max-width: 940px;
          width: 100%;
          &__btn {
            flex-direction: column;
            gap: 1.5;

            button {
              width: 90%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1655px) {
    .main-communication {
      &__container {
        /* autoAlign */
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;

        &-rightSection {
          border: 8px solid var(--gray-900);
        }
      }
    }
  }
`;
