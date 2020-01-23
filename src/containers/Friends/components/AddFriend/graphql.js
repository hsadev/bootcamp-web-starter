import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  query ($searchText: String!) {
    searchUsers (searchText: $searchText) {
      id
      firstName
      lastName
    }
  }
`
