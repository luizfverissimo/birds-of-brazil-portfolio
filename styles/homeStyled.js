import styled from 'styled-components'

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
`

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: calc(100vw - 320px);
  height: 100vh;
`