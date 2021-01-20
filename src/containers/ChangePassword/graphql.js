import gql from 'graphql-tag'

export const CHANGE_PASS = gql`
  mutation changePassword ($id: ID! $password: String!) {
    changePassword (id: $id, password: $password) {
      password
    }
  }
`

export const GET_PASS = gql`
  query user ($id: ID!) {
    user (id: $id) {
      password
    }
  }
`