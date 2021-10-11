import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose';

const clothSchema = mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

export const Cloth = mongoose.model('Cloth', clothSchema)
export const ClothTC = composeWithMongoose(Cloth);

export default Cloth