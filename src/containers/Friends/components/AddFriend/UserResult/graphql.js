import gql from 'graphql-tag'

export const SEND_FRIEND_REQUEST = gql`
  mutation ($requesteeId: ID!) {
    sendFriendRequest (requesteeId: $requesteeId) {
      requestorId
      requesteeId
    }
  }
`
