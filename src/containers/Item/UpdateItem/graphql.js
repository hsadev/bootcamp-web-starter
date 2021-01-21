import gql from 'graphql-tag'

export const UPDATE_ITEM = gql`
  mutation updateItem ($input: ItemInput!) {
    updateItem (input: $input) {
      name
    }
  }
`

export const SPECIFIC_ITEM = gql`
  query item ($id: ID!) {
    item (id: $id) {
      name
      imgUrl
      description
      price
      tags {
        tag
      }
      stock
    }
  }
`
