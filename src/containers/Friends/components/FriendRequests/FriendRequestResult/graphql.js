import gql from 'graphql-tag'

export const RESOLVE_FRIEND_REQUEST = gql`
  mutation ($requestorId: ID!, $acceptedOrDeclined: String!) {
    resolveFriendRequest (requestorId: $requestorId, acceptedOrDeclined: $acceptedOrDeclined) {
      requestorId
      requesteeId
    }
  }
`
