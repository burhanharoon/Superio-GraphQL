import { gql } from "@apollo/client";

// TEMP: Fetch all tournaments
const ALL_CANDIDATES = gql`
query Query {
  featuredCandidateMany {
    name
    image
    job
    location
    _id
  }
}`


export {
  ALL_CANDIDATES,
}