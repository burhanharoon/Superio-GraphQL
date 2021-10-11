import { gql } from "@apollo/client";

// TEMP: Fetch all tournaments
const ALL_CLOTHS = gql`
query Query {
  clothMany {
    _id
    price
    image
    title
  }
}`


export {
  ALL_CLOTHS,
}