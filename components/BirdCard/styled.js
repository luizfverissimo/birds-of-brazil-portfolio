import styled from 'styled-components'

export const cardWrapper = styled.div`
  width: 342px;
  height: 77px;
  background-color: var(--darkGrey);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-right: 20px;
  margin-top: 20px;
`

export const cardTitle = styled.h3`
  color: var(--yellow);
  font-size: 14px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  margin: 5px 0;
`

export const cardState = styled.div`
  height: 66px;
  width: 66px;
  border-radius: 50%;
  background-color: var(--yellow);
  font-size: 24px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: var(--darkGrey);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -20px;
`

export const cardSpecies = styled.p`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`

