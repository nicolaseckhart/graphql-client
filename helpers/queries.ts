import { gql } from '@apollo/client'

export const PLACE_QUERY = gql`
  query Place($id: String!) {
    place(id: $id) {
      id
      title
      addressLines
    }
  }
`

export const PLACE_QUERY_STRING = `
    query Place($id: String!) {
        place(id: $id) {
            id
            title
            addressLines
        }
    }
`
