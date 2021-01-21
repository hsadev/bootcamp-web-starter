import gql from 'graphql-tag'

export const UPDATE_ITEM = gql`
  mutation updateItem ($id: ID!, $input: ItemInput!) {
    updateItem (id: $id, input: $input) {
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
