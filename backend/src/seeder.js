import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cloths from './data/cloths.js'
import users from './data/users.js'
import featuredCandidate from './data/featuredCandidates.js'
import User from './models/user.js'
import Cloth from './models/cloth.js'
import FeaturedCandidate from './models/featuredCandidate.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Cloth.deleteMany()
        await FeaturedCandidate.deleteMany()
        await User.deleteMany()

        await User.insertMany(users)
        await FeaturedCandidate.insertMany(featuredCandidate)
        await Cloth.insertMany(cloths)

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Cloth.deleteMany()
        await FeaturedCandidate.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}