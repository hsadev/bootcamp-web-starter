import gql from 'graphql-tag'

export const CREATE_ITEM = gql`
  mutation createItem ($input: itemInput!) {
    createItem (input: $input) {
      name
    }
  }
`