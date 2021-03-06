import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync('12345678', 10)
    },
    {
        name: "John Doe",
        email: "john@example.com",
        password: bcrypt.hashSync('12345678', 10),
    },
    {
        name: "Jane Doe",
        email: "jane@example.com",
        password: bcrypt.hashSync('12345678', 10),
    },
]

export default users