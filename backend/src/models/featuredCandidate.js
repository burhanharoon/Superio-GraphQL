import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose';

const featuredCandidateSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        job: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)

export const FeaturedCandidate = mongoose.model('FeaturedCandidates', featuredCandidateSchema)
export const FeaturedCandidateTC = composeWithMongoose(FeaturedCandidate);

export default FeaturedCandidate