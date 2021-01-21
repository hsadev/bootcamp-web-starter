import gql from 'graphql-tag'

export const CHANGE_PASS = gql`
  mutation updatePass ($id: ID! $password: String!) {
    updatePass (id: $id, password: $password) {
      password
    }
  }
`
