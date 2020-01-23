import gql from 'graphql-tag'

export const FRIEND_REQUESTS = gql`
  query {
    viewer {
      friendRequests {
        id
        firstName
        lastName
      }
    }
  }
`
