import styled from 'styled-components';
import media from 'styled-media-query';
import { FiveHundredPx } from '@styled-icons/boxicons-logos';
import { EmailOutline } from '@styled-icons/evaicons-outline';

export const SideBarWrapper = styled.aside`
  width: 320px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0%;
  background-color: var(--lightGrey);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 200px 37px 37px 37px;
  z-index: 1;

  ${media.lessThan('large')`
    width: 100vw;
    height: 100px;
    flex-direction: row;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    `}
`;

export const SideBarTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SideBarTitle = styled.h1`
  width: 100%;
  color: var(--white);
  font-weight: 700;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;

  ${media.lessThan('large')`
    font-size: 24px;
    `}
`;

export const SideBarSubTitle = styled.p`
  width: 100%;
  color: var(--yellow);
  font-weight: 400;
  font-size: 24px;
  font-family: 'Tienne', serif;
  margin: 0;
  ${media.lessThan('large')`
    font-size: 18px;
    `}
`;

export const SideBarNavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan('large')`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100vw;
  height: 32px;
  background-color: var(--yellow);
  flex-direction: row;
  justify-content: space-around;
    `}
`;

export const SideBarNavigationItem = styled.p`
  color: var(--white);
  font-weight: 400;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--yellow);

    ${media.lessThan('large')`
      color: var(--darkGrey)
    `}
  }

  ${media.lessThan('large')`
  font-size: 18px;
  color: var(--darkGrey)
  margin: 0;
  `}
`;

export const SideBarSocialIconsWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('large')`
    justify-content: flex-end;
  `}
`;

export const FiveIcon = styled(FiveHundredPx)`
  color: var(--yellow);
  margin: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  ${media.lessThan('large')`
  margin: 0 5px;
    `}
`;

export const EmailIcon = styled(EmailOutline)`
  color: var(--yellow);
  margin: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  ${media.lessThan('large')`
  margin: 0 5px;
    `}
`;
export const WikiIconWrapper = styled.div`
  margin: 0 10px;

  &:hover {
    filter: brightness(50);
  }

  ${media.lessThan('large')`
  margin: 0 5px;
    `}
`;
