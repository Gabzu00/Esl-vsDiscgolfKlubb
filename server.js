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
import jwt from 'jsonwebtoken'

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

function generateToken(user) {
  const payload = {
    username: user.userName,
    password: user.password
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

app.get('/', (req, res) => {
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

  console.log(req.body)

  let userName = req.body.username
  let password = req.body.password
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let ssn = req.body.ssn
  let email = req.body.email
  let number = req.body.number

  addData(userName, password, firstName, lastName, ssn, email, number)
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


//Login a user
app.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const user = await getUser(userName, password);

  if (user) {
    const token = generateToken(user);
    res.json({ token: token, role: user.role, payDate: user.payDate });
  } else {
    res.status(401).json('Invalid username or password');
  }
});

// THIS ROUTE HAS TO BE AT THE BOTTOM!
// IF IT'S ABOVE ANY OTHER ROUTE SHIT BREAKS
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

