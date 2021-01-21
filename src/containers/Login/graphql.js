import gql from 'graphql-tag'

// login(email: String!, password: String!): AuthReturn!
export const LOGIN = gql`
    mutation login($email:String!,$password:String!){
        login(email:$email,password:$password){
            token
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
        }
    }
`