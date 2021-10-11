// import mongoose from 'mongoose';
// import { composeWithMongoose } from 'graphql-compose-mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);


export const User = mongoose.model('User', userSchema)
export const UserTC = composeWithMongoose(User);

export default User

// Login Resolver
UserTC.addResolver({
  kind: 'query',
  name: 'userLogin',
  args: {
    identity: 'String!', // For multi-purpose usage as email and username
    password: 'String!',
  },
  // Adding new token field to the User GraphQL type
  type: UserTC.addFields({
    'token': 'String!'
  }).getResolver('findById').getType(),

  // Displayes the core functionality of the resolver is inside the resolver
  resolve: async ({ args }) => {
    let user = null;
    if (isNaN(Number(args.identity))) {

      user = await User.findOne({ email: args.identity });
    } else {
      user = await User.findOne({ username: args.identity });
    }

    if (!user) {
      throw new Error('User does not exist.')
    }

    const isEqual = await bcrypt.compareSync(args.password, user.password);
    if (!isEqual) {
      throw new Error('Password is not correct.');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    user.token = token;

    return user;
  }
})
