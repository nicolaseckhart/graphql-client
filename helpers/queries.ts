export const PLACE_QUERY = `
    query Place($id: String!) {
        place(id: $id) {
            id
            title
            addressLines
        }
    }
`
