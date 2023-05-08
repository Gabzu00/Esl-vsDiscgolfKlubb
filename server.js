import express from "express";
import { json } from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { join } from 'path';
import { addData, connectToDB, getDB, deleteData, updateData, getDataTitle, getData } from "./db.js";
import cors from "cors";
import path from 'path'
import { fileURLToPath } from "url";

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

/* app.use(express.static(join(__dirname, 'public'))); */

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  /* const filePath = path.join(__dirname, 'index.html'); */
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.get('/users', (req, res) => {
  getData()
    .then(albums => {
      /* getData(albums); */
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


app.post('/users', (req, res) => {
  /* let id = req.body.id
  let title = req.body.title
  let artist = req.body.artist
  let year = req.body.year */

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

  addData(userName, password, firstName, lastName, socialSecurityNumber, email, phone, address, city, postalCode)
    .then(albums => {
      console.log(albums)
      res.json(albums).status(201)
    })
    .catch(error => {
      res.json(error).status(409)
    });
})


app.put('/api/albums/:id', (req, res) => {
  let id = req.params.id
  let title = req.body.title
  let artist = req.body.artist
  let year = req.body.year

  updateData(id, title, artist, year)
    .then(albums => {
      console.log(albums)
      res.json(albums).status(201)
    })
    .catch(error => {
      res.json(error).status(404)
    });

})

app.delete('/api/albums/:id', (req, res) => {
  let id = req.params.id

  deleteData(id)
    .then(albums => {
      console.log(albums)
      res.json(albums).status(201)
    })
    .catch(error => {
      res.json(error).status(404)
    });


})