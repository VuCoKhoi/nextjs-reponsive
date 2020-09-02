import styled from 'styled-components'

import FlexBox from './FlexBox'

export const Grid = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
`

export const Row = FlexBox

export const Col = styled(FlexBox)`
  flex: ${(props) => props.size};
  ${(props) =>
    props.collapse &&
    props.theme.medias[props.collapse](`
        display: none;
    `)};
`
