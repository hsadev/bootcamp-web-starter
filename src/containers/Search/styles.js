import styled  from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
`


