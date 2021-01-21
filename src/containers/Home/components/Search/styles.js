import styled from 'styled-components'

export const Title = styled.h1`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.header.fontFamily};
  font-size: 4em;
  margin: 0px;
`

export const Subtitle = styled.h2`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.header.fontFamily};
  font-size: 2em;
  margin-top: 10px;
`

export const Label = styled.p`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.body.fontFamily};
  margin-right: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 20px;
  margin: 0px;
`

export const Button = styled.button`
  height: 25px;
`

export const SearchPanel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
