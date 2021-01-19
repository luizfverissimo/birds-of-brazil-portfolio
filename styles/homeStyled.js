import styled from 'styled-components'
import media from 'styled-media-query';

export const contentWrapper = styled.section`
  width: calc(100vw - 320px);
  height: 100vh;
  margin-left: 320px;
  /* background-color: #73767A; */
  padding: 20px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  ${media.lessThan('large')`
    width: 100vw;
    height: calc(100vh - 100px);
    margin-left: 0;
    margin-top: 100px;
    padding-right: 20px;
    align-items: center;
    `}
`

export const Title = styled.h1`
  color: var(--white);
  font-size: 32px;
  margin: 0;
  font-family: 'Tienne', serif;
  font-weight: 700;
  font-size: 96px;
  text-align: right;
  text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  margin-bottom: 100px;

  ${media.lessThan('large')`
  font-size: 68px;
  text-align: center;
  margin-bottom: 20px;
  `}
`

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: calc(100vw - 320px);
  height: 100vh;
  overflow: hidden;

  ${media.lessThan('large')`
    width: 100vw;
    height: calc(100vh - 100px);
  `}
`

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`