import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', false);

const mongoDB = process.env.dbUrl;

const dbApp = express();
dbApp.use(express.json());
dbApp.use(express.urlencoded({ extended: false }));
dbApp.use(router);

dbApp.listen(3000, () => {
  console.log(`Database listening at http://localhost:3000`)
})

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

const usersSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
  ssn: String,
  email: String,
  number: String,
}, { collection: 'Users' });

const users = mongoose.model('Users', usersSchema);

// Get all users
router.get('/users', async (req, res) => {
  const allUsers = await users.find();
  res.json(allUsers);
})

// Get user by username
router.get('/users/:userName', async (req, res) => {
  const user = await users.find({ userName: req.params.userName });
  if (user.length > 0) {
    res.json(user);
  } else {
    res.status(404).json('User not found');
  }
})

// Add a new user
router.post('/users/', async (req, res) => {

  const exists = await users.find({ userName: req.body.userName });

  if (exists.length > 0) {
    res.status(409).json('Conflict, user already exists');
  } else {
    const user = new users({
      userName: req.body.userName,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      ssn: req.body.ssn,
      email: req.body.email,
      number: req.body.number,
    });

    try {
      const newUser = await user.save()
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
    }
  }

})