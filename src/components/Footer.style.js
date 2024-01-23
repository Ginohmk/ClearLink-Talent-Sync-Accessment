import styled from 'styled-components';

export const FooterContauner = styled.footer`
  .footerMain {
    display: flex;
    gap: 2rem;
    padding: 6rem 0;

    &-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 400px;

      p {
        font-size: 1.125rem;
      }
    }

    &-list {
      width: 100%;

      display: flex;
      flex-wrap: wrap;

      &__item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;

        h3 {
          color: var(--gray-500);
          font-size: 1.125rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;

          li {
            list-style: none;
            color: var(--gray-600);
            font-weight: 600;

            font-size: 1.125rem;
          }
        }
      }

      &__getApp {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          color: var(--blue-dark);
          font-size: 1.125rem;
        }

        &-btn {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          a {
            text-decoration: none;
            outline: none;

            &:active,
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }

  .footerSocials-container {
    background-color: var(--gray-50);
    padding: 3rem 0;

    &__contents {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 1rem;
      }

      ul {
        display: flex;
        align-items: center;
        gap: 1.125rem;

        li {
          list-style: none;
        }
      }
    }
  }
`;
