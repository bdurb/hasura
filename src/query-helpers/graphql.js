import gql from 'graphql-tag'

export const ALL_QUOTES_QUERY = gql`
  query quotes {
    quotes {
      id
      quote
      author
    }
  }
`