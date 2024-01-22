import styled from 'styled-components';

export const FooterContauner = styled.footer`
  padding: 6rem 0;

  .footerMain {
    display: flex;
    gap: 2rem;

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
          }
        }
      }
    }
  }
`;
