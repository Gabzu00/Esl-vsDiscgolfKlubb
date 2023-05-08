import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv'
dotenv.config()
const router = express.Router();
mongoose.set('strictQuery', false);
import cors from 'cors'

const mongoDB = process.env.dbUrl;

const dbApp = express();
dbApp.use(express.json());
dbApp.use(express.urlencoded({ extended: false }));
dbApp.use(router);
dbApp.use(cors());

dbApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
  address: String,
  city: String,
  postnr: String,
}, { collection: 'Users' });

const users = mongoose.model('Users', usersSchema);

// Get all users
dbApp.get('/users', async (req, res) => {
  const allUsers = await users.find();
  res.json(allUsers);
})

// Get user by username
dbApp.get('/users/:userName', async (req, res) => {
  const user = await users.find({ userName: req.params.userName });
  if (user.length > 0) {
    res.json(user);
  } else {
    res.status(404).json('User not found');
  }
})

// Add a new user
dbApp.post('/users/', async (req, res) => {

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

// Updating a user
dbApp.put('/users/:userName', async (req, res) => {

  const user = await users.findOne({ userName: req.params.userName });

  if (user != null) {
    if (req.body.password != null) {
      user.password = req.body.password;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.number != null) {
      user.number = req.body.number;
    }
    if (req.body.adress != null) {
      user.address = req.body.address;
    }
    if (req.body.city != null) {
      user.city = req.body.city;
    }
    if (req.body.postnr != null) {
      user.postnr = req.body.postnr;
    }

    try {
      const updateUser = await user.save()
      res.status(200).json(updateUser);
    } catch (err) {
      console.log(err);
    }

  } else {
    res.status(404).json('User not found');
  }

})

//Deleting a user
dbApp.delete('/users/:userName', async (req, res) => {

  const user = await users.findOne({ userName: req.params.userName });

  if (user != null) {
    try {
      await users.deleteOne({ userName: req.params.userName })
      res.status(200).json("Removed successfully");
    } catch (err) {
      console.log(err);
    }

  } else {
    res.status(404).json('User not found');
  }

})

//Login a user
dbApp.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const user = await users.findOne({ userName, password });

  if (user) {
    res.json(user);
  } else {
    res.status(401).json('Invalid username or password');
  }
});
