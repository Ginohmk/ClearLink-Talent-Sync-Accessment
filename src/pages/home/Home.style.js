import styled from 'styled-components';
import BackgroundImg from '../../assets/images/background-pattern.svg';

export const HomeContainer = styled.section``;

export const BannerContainer = styled.section`
  margin-top: 10rem;
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 44px;
  flex: 1;
  flex-wrap: wrap;

  .mainBanner__backgroung-img {
    position: absolute;
    top: 0;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .mainBanner__leftSection {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .mainBanner__leftSection-desc {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .mainBanner__leftSection-actionBtn {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      .mainBanner__leftSection-actionBtn__desc {
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

      justify-content: space-between;
      gap: 4.3125rem;
      flex: 1;
      flex-wrap: wrap;
    }
  }

  .main-whyClearLink {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 6rem 0;

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
    }
  }

  .main-testimonies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 6rem 0;

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
          font-size: 2.55rem;
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
            align-items: color-interpolation-filters;
            gap: 2rem;

            svg {
              color: var(--blue-700);
              font-size: 1.9rem;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
