import styled from 'styled-components';
import media from 'styled-media-query';
import { FilterAlt } from 'styled-icons/boxicons-regular/'

export const contentWrapper = styled.section`
  width: calc(100vw - 320px);
  height: auto;
  min-height: 100vh;
  margin-left: 320px;
  background-color: var(--darkGrey);
  padding: 130px 20px 20px 20px;
  padding-right: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  //overflow-y: scroll; - bugs with react-infinite-scroll

  ${media.lessThan('large')`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    margin-left: 0;
    margin-top: 132px;
    padding: 20px;
  `}
`;

export const RegionFilterWrapper = styled.div`
  width: 1050px;
  height: auto;
  background-color: var(--lightGrey);
  margin: 0px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 30px;
  z-index: 5;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.25);

  ${media.lessThan('large')`
    position: fixed;
    top: unset;
    bottom: 100px;
    right: 20px;
    margin: 0;
    width: 200px;
    flex-direction: column;
    flex-wrap: none;
  `}
`;

export const RegionFilterItems = styled.div`
  padding: 10px;
  margin: 10px;
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--white)')};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--yellow);
    color: var(--darkGrey);
  }

  ${media.lessThan('large')`
    font-size: 18px;
  `}
`;

export const FilterMobileButton = styled.div`
  display: none;

  ${media.lessThan('large')`
  width: 50px;
  height: 50px;
  background-color: var(--yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  position: fixed;
  bottom: 30px;
  right: 30px;
  `}
`;

export const FilterIcon = styled(FilterAlt)`
  color: var(--darkGrey);
`

export const BirdListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

`
