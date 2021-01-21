import gql from 'graphql-tag'

export const ADD_MONEY = gql`
  mutation addMoney ($id: ID!, $money: Float!) {
    addMoney (id: $id, money: $money) {
      money
    }
  }
`
