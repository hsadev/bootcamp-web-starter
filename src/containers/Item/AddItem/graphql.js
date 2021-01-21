import gql from 'graphql-tag'

export const CREATE_ITEM = gql`
  mutation createItem ($input: ItemInput!) {
    createItem (input: $input) {
      name
    }
  }
`
