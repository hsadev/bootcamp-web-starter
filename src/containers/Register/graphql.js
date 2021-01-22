import gql from 'graphql-tag'

export const REGISTER = gql`
    mutation ($input: RegisterInput!) {
        register(input: $input) {
            user {
            id,
            username,
            password,
            money
            },
            token
        }
    }
`