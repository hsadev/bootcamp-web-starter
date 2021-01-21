import gql from 'graphql-tag'

// allUsers: [User!]!
export const ALL_USERS = gql`
    query allUsers{
        allUsers{
            id
            email
            password
            createdAt
            updatedAt
        }
    }
`

// dietById(id:ID!):[Diet!]!
export const DIET_BY_ID = gql`
    query dietById($id:ID!){
        dietById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// healthById(id:ID!):[Health!]!
export const HEALTH_BY_ID = gql`
    query healthById($id:ID!){
        healthById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// triedRecipeById(id:ID!):[TriedRecipe]!
export const TRIED_BY_ID = gql`
    query triedRecipeById($id:ID!){
        triedRecipeById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// bookmarkById(id:ID!):[Bookmark!]!
export const BOOKMARK_BY_ID = gql`
    query bookmarkById($id:ID!){
        bookmarkById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// mealTrackerById(id: ID!):[MealTracker!]!
export const MEALS_BY_ID = gql`
    query mealTrackersById($id:ID!){
        mealTrackerById(id:$id){
            id
            tried {
                id
                user {
                    id
                    email
                    password
                    createdAt
                    updatedAt
                }
                link
            }
            date
            meal
        }
    }
`

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

// register(input: RegisterInput!): AuthReturn!
    export const REGISTER = gql`
        mutation register($input:RegisterInput!){
            register(input:$input){
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

// addDiet(input: DietInput!):Diet!
export const ADD_DIET = gql`
    mutation addDiet($input:DietInput!){
        addDiet(input:$input){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// addHealth(input: HealthInput!):Health!
export const ADD_HEALTH = gql`
    mutation addHealth($input:HealthInput!){
        addHealth(input:$input){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// addTriedRecipe(input: TriedRecipeInput!):TriedRecipe!
export const ADD_TRIED = gql`
    mutation addTriedRecipe($input:TriedRecipeInput!){
        addTriedRecipe(input:$input){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// delTriedRecipe(input: TriedRecipeInput!):[TriedRecipe!]!
export const DEL_DIET = gql`
    mutation delTriedRecipe($input:TriedRecipeInput!){
        delTriedRecipe(input:$input){
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// addBookmark(input: BookmarkInput!): Bookmark!
export const ADD_BOOKMARK = gql`
    mutation addBookmark($input:BookmarkInput!){
        addBookmark(input:$input){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// delBookmark(input: BookmarkInput!): [Bookmark!]!
export const DEL_BOOKMARK = gql`
    mutation delBookmark($input:BookmarkInput!){
        delBookmark(input:$input){
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// addMealTracker(input: MealTrackerInput!): MealTracker!
export const ADD_MEAL = gql`
    mutation addMealTracker($input:MealTrackerInput!){
        addMealTracker(input:$input){
            id
            tried {
                id
                user {
                    id
                    email
                    password
                    createdAt
                    updatedAt
                }
                link
            }
            date
            meal
        }
    }
`