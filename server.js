import express from "express";
import { json } from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { join } from 'path';
import { addData, connectToDB, getDB, deleteData, updateData, getData, getUser } from "./db.js";
import cors from "cors";
import path from 'path'
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';

app.use(json())

app.use(cors({
  origin: "*"
}))

let db

connectToDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("app listening...")
    })
    db = getDB()
  })
  .catch(error => {
    console.log(error);
  });

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.get('/users', (req, res) => {
  getData()
    .then(albums => {
      res.json(albums)
    })
    .catch(error => {
      console.log(error);
    });
})

app.get('/api/albums/:title', (req, res) => {
  const title = req.params.title;
  getDataTitle(title)
    .then(albums => {
      console.log(albums + " from server")
      if (albums === undefined || albums.length == 0) {
        res.send(JSON.stringify("title not found")).status(404)
      } else {
        res.json(albums)
      }

    })
    .catch(error => {
      res.json(error)
    });

})


app.post('/users', async (req, res) => {

  console.log(req.body + "Hello from server")

  let userName = req.body.username
  let password = req.body.password
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let socialSecurityNumber = req.body.socialSecurityNumber
  let address = req.body.address
  let city = req.body.city
  let postalCode = req.body.postalCode
  let email = req.body.email
  let phone = req.body.phone
  let age = req.body.age

  const hashedPassword = await bcrypt.hash(req.body.password, 10)

  addData(userName, hashedPassword, firstName, lastName, socialSecurityNumber, email, phone, address, city, postalCode, age)
    .then(result => {
      console.log(result + " Hello 2")
      res.status(200).send("Registration successful!");
    })
    .catch(error => {
      console.log(error + " hello")
      res.status(500).send("Could not insert the document: " + error);
    });
})

// Edits the information of a user
app.put('/users/:id', (req, res) => {
  let id = req.params.id
  let userName = req.body.userName
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let socialSecurityNumber = req.body.socialSecurityNumber
  let phone = req.body.phone
  let email = req.body.email
  let age = req.body.age
  let address = req.body.address
  let city = req.body.city
  let postalCode = req.body.postal
  let role = req.body.role

  updateData(id, userName, firstName, lastName, socialSecurityNumber,
    phone, email, age, address, city, postalCode, role)
    .then(users => {
      console.log(users)
      res.json(users).status(201)
    })
    .catch(error => {
      res.json(error).status(404)
    });

})

// Sends the user id to the delete function
app.delete('/users/:id', (req, res) => {
  let id = req.params.id

  deleteData(id)
    .then(users => {
      console.log('IN DELETE', users)
      res.json(users).status(201)
    })
    .catch(error => {
      res.json(error).status(404)
    });


})


//Login a user
app.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const user = await getUser(userName, password);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json('Invalid username or password');
  }
});

// THIS ROUTE HAS TO BE AT THE BOTTOM!
// IF IT'S ABOVE ANY OTHER ROUTE SHIT BREAKS
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

