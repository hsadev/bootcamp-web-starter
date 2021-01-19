import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const ListItem = styled.li`
  font-size: 14px;
`

export const Title = styled.h1`
  grid-area: title;
  align-self: end;
`

export const IngredientsContainer = styled.div`
  grid-area: ing;
  width: 100%;
`

export const StepsContainer = styled.div`
  grid-area: steps;
  width: 100%;
`

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'title steps'
    'ing steps';
  gap: 0px 100px;
`
