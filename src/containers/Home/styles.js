import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  background: ${theme.colors.layout.background};
`

export const Column = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const Header = styled.h2`
  color: ${theme.colors.fonts.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: bold;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    text-shadow: 3px 3px ${theme.colors.layout.accent}; 
  }
`

export const Text = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-size: 18px;
  letter-spacing: 0.5px;
`

export const Frame = styled.iframe`
  display: block;
  border: none;
  width: 300px;
  height: 380px;
`

export const Button = styled.button`
  color: ${theme.colors.fonts.button};
  background: ${theme.colors.layout.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 14px;
  border: none;
  display: block;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px ${theme.colors.layout.accent};
  }
`

export const OrderedList = styled.ol`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 14px;
`

export const BulletList = styled.ul`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 14px;
`

export const ListItem = styled.li`
  font-weight: ${theme.fonts.body.weight};
  font-size: 14px;
`