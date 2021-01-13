import styled from 'styled-components'
import { FiveHundredPx } from '@styled-icons/boxicons-logos'
import { EmailOutline } from '@styled-icons/evaicons-outline'
import Image from 'next/image'

export const SideBarWrapper = styled.aside`
    width: 320px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0%;
    background-color: var(--lightGrey);
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 200px 37px 37px 37px;
`

export const SideBarTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SideBarTitle = styled.h1`
  width: 100%;
  color: var(--white);
  font-weight: 700;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif; 
  margin: 0;
`

export const SideBarSubTitle = styled.p`
  width: 100%;
  color: var(--yellow);
  font-weight: 400;
  font-size: 24px;
  font-family: 'Tienne', serif;
  margin: 0;
`

export const SideBarNavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

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
  }
`

export const SideBarSocialIconsWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FiveIcon = styled(FiveHundredPx)`
  color: var(--yellow);
  margin: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`

export const EmailIcon = styled(EmailOutline)`
  color: var(--yellow);
  margin: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`
export const WikiIconWrapper = styled.div`
  margin: 0 10px;

  &:hover {
    filter: brightness(50)
  }
`