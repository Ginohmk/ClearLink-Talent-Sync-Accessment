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
`;
