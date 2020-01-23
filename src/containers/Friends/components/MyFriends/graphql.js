import gql from 'graphql-tag'

export const MY_FRIENDS = gql`
  query {
    viewer {
      friends {
        id
        firstName
        lastName
        email
      }
    }
  }
`
