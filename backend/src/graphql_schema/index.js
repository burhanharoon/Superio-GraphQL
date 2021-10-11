import { SchemaComposer } from 'graphql-compose';
const graphQLSchemaComposer = new SchemaComposer();
import { ClothQuery, ClothMutation } from './cloth.js';
import { FeaturedCandidateQuery, FeaturedCandidateMutation } from './featuredCandidate.js';
import { UserQuery, UserMutation } from './user.js';


graphQLSchemaComposer.Query.addFields({
    ...ClothQuery,
    ...FeaturedCandidateQuery,
    ...UserQuery,
});

graphQLSchemaComposer.Mutation.addFields({
    ...ClothMutation,
    ...FeaturedCandidateMutation,
    ...UserMutation,
});


export default graphQLSchemaComposer.buildSchema();