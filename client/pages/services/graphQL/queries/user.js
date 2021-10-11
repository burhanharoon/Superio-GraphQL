import { gql } from "@apollo/client";

// Using User Login Resolver (that was defined in the backend) in the frontend to validate the user
const AUTH_LOGIN = gql`
query Query($email: String!, $password: String!) {
    userLogin(identity: $email, password: $password) {
        name
        _id
        token
    }
}`

export {
    AUTH_LOGIN,
}