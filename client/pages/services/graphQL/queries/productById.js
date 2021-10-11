import { gql } from "@apollo/client";

// TEMP: Fetch all tournaments
const CLOTH_BY_ID = gql`
query Query($id: MongoID!) {
  clothById(_id: $id) {
    title
    image
    price
    _id
  }
}`

export {
  CLOTH_BY_ID,
}