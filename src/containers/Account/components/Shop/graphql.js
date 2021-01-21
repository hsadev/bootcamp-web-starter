import gql from 'graphql-tag'


export const REMOVE_ITEM = gql`
  mutation deleteItem ($id: ID!) {
    deleteItem (id: $id) {
      id
    }
  }
`
