import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  background-color: var(--gray-100);
  border-radius: 100px;
  border: 1px solid var(--gray-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px 16px 32px;

  .navbarLogo {
    cursor: pointer;
  }

  .navBar-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      color: var(--gray-500);
      cursor: pointer;

      svg {
        color: var(--gray-500);
      }
    }
  }

  .navBar-menu__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .navBar-menu__mobileMenu {
    display: none;
  }

  @media screen and (max-width: 1275px) {
    position: ${({ ismenu }) => (ismenu === true ? 'fixed' : 'relative')};

    width: ${({ ismenu }) => (ismenu === true ? `100%` : '90%')};

    border-radius: ${({ ismenu }) => (ismenu === true ? `0` : '100px')};

    border: ${({ ismenu }) =>
      ismenu === true ? `none` : '1px solid var(--gray-300)'};

    overflow-y: ${({ ismenu }) => (ismenu === true ? `auto` : 'hidden')};

    height: ${({ ismenu }) => (ismenu === true ? `100dvh` : '')};

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .navbarLogo {
      position: ${({ ismenu }) => (ismenu === true ? `absolute` : 'relative')};

      top: ${({ ismenu }) => (ismenu === true ? `2.5rem` : '0')};
    }

    .navBar-menu {
      flex-direction: column;
      gap: 3.5rem;
      display: ${({ ismenu }) => (ismenu === true ? `flex` : 'none')};

      position: absolute;
      top: 38%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    .navBar-menu__buttons {
      flex-direction: column;
      gap: 2.5rem;
      display: ${({ ismenu }) => (ismenu === true ? `flex` : 'none')};
      position: absolute;
      top: 78%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 340px;
      width: 100%;
      button {
        width: 100%;
      }
    }

    .navBar-menu__mobileMenu {
      display: block;
      position: ${({ ismenu }) => (ismenu === true ? `absolute` : 'reltive')};
      top: ${({ ismenu }) => (ismenu === true ? `2.5rem` : '0')};
      right: ${({ ismenu }) => (ismenu === true ? `2rem` : '0')};

      svg {
        font-size: 2.2rem;
        color: var(--blue-700);
        cursor: pointer;
      }
    }
  }
`;
