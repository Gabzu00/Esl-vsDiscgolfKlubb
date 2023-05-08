import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

let dbConnection;

export function getData() {
  return dbConnection
    .collection("Users")
    .find()
    .toArray()
    .then(albums => {
      return albums;
    })
    .catch(error => {
      throw new Error("Could not fetch the documents: " + error);
    });
}

export function getDataTitle(title) {
  console.log(title)
  return dbConnection
    .collection("Users")
    .find({ title: { $eq: title } })
    .toArray()
    .then(albums => {
      console.log(albums + " array from db")
      return albums;
    })
    .catch(error => {
      throw new Error("Could not fetch the documents: " + error);
    });
}

export function addData(userName, password, firstName, lastName, ssn, email, number) {
  return dbConnection
    .collection("Users")
    .insertOne({ userName, password, firstName, lastName, ssn, email, number })
    .then(result => {
      console.log(result.insertedCount + " document(s) inserted");
      return result;
    })
    .catch(error => {
      return ("The id you entered already exist in the database" + error)
      /*  throw new Error("Could not insert the document: " + error); */
    });
}


export function updateData(_id, title, artistName, year) {
  console.log(_id)
  return dbConnection
    .collection("Users")
    .updateOne(
      { _id },
      { $set: { title, artistName, year } }
    )
    .then(result => {
      if (result.modifiedCount === 1) {
        console.log("Document updated successfully");
        return result;
      } else {
        return "Error ! This id was not found in the database"
      }

    })
    .catch(error => {
      console.log("Could not update the document:", error);
      throw error;
    });
}

export function deleteData(_id) {
  console.log(_id)
  return dbConnection
    .collection("Users")
    .deleteOne({ _id })
    .then(result => {
      if (result.deletedCount === 1) {
        console.log("Document deleted successfully");
        return "Document deleted successfully";
      } else {
        return "Error ! This id was not found in the database"
      }
    })
    .catch(error => {
      console.log("Could not delete the document:", error);
      throw error;
    });
}

export async function connectToDB() {
  try {
    const client = await MongoClient.connect(process.env.dbUrl);
    dbConnection = client.db();
    console.log("Connected!!");
  } catch (error) {
    console.log(error + " Hello");
    throw new Error("Could not connect to database: " + error);
  }
}

export function getDB() {
  return dbConnection;
}


/* module.exports = {
  deleteData,
  updateData,
  addData,
  getData,
  getDataTitle,
  connectToDB: async () => {
    try {
      const client = await MongoClient.connect(process.env.URL);
      dbConnection = client.db();
      console.log("Connected!!");
    } catch (error) {
      console.log(error);
      throw new Error("Could not connect to database: " + error);
    }
  },
  getDB: () => dbConnection,
}; */




/* import express from 'express';
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
dbApp.use(cors({
  origin: "*"
}));

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

import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

dbApp.use(express.static(path.join(__dirname, 'dist')))

dbApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

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

}) */
