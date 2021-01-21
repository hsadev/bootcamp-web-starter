import gql from 'graphql-tag'

export const ALL_ITEMS = gql`
    query allItems {
        allItems {
            name
            imgUrl
            description
            tags {
                tag
            }
            price
            stock
        }
    }
`

// export const ADD_ITEM = gql`
//     mutation addAuthor ($input: addAuthorInput!) {
//     addAuthor (input: $input) {
//         firstName
//         lastName
//         age
//         email
//     }
// }
// `