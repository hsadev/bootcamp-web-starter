import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation ($input: RegisterInput!) {
    register (input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`
