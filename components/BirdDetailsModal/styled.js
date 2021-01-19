import styled from 'styled-components'
import media from 'styled-media-query';

export const ModalBackground = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  
  ${media.lessThan('large')`
    overflow: hidden;
  `}
`

export const ModalImgWrapper = styled.div`
  width: 1000px;
  max-width: 1000px;
  height: 700px;
  max-height: 700px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  ${media.lessThan('large')`
    width: 100vw;
    height: auto;
  `}
`

export const ModalCard = styled.div`
  width: 450px;
  height: 150px;
  background-color: var(--lightGrey);
  color: var(--white);
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 15px;
  margin-top: 30px;
  position: relative;

  ${media.lessThan('large')`
    width: 100vw;
    margin-top: 0px;
  `}
`

export const ModalTitle = styled.h4`
  margin: 0;
  font-weight: 700;
  color: var(--yellow);
`
export const ModalCity = styled.p`
  color: var(--yellow);
`

export const ModalRegion = styled.div`
  padding: 10px;
  background-color: var(--yellow);
  color: var(--darkGrey);
  font-weight: 700;
  border-radius: 15px;
  position: absolute;
  bottom: -10px;
  right: -10px;

  ${media.lessThan('large')`
  bottom: -10px;
  right: 10px;
  `}
`

export const ModalImage = styled.img`
  object-fit: contain;

  ${media.lessThan('large')`
    object-fit: scale-down;
    width: 100vw;
    height: auto;
  `}
`