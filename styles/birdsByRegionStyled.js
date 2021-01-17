import styled from 'styled-components'

export const contentWrapper = styled.section`
  width: calc(100vw - 320px);
  height: 100vh;
  margin-left: 320px;
  background-color: var(--darkGrey);
  padding: 20px;
  padding-right: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const RegionFilterWrapper = styled.div`
  width: 1050px;
  height: auto;
  background-color: var(--lightGrey);
  margin: 0px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const RegionFilterItems = styled.div`
  padding: 10px;
  margin: 10px;
  color: ${props => props.active ? 'var(--yellow)' : "var(--white)"};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--yellow);
    color: var(--darkGrey);
  }
`