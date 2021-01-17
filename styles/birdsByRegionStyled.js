import styled from 'styled-components'

export const contentWrapper = styled.section`
  width: calc(100vw - 320px);
  height: 100vh;
  margin-left: 320px;
  background-color: var(--darkGrey);
  padding: 20px;
  padding-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  overflow-y: scroll;
`