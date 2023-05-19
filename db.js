import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb';
dotenv.config()

let dbConnection;

// Gets all users in the database
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

export async function getUser(userName, password) {
  const user = await dbConnection.collection("Users").findOne({ userName, password });

  if (typeof user === "object") {
    return user;
  } else {
    return "Error, cannot find user";
  }
}

// Adds a user to the database
export function addData(userName, password, firstName, lastName, socialSecurityNumber,
  email, phone, address, city, postalCode, age) {
  const role = "registered";
  return dbConnection
    .collection("Users")
    .insertOne({
      userName, password, firstName, lastName, socialSecurityNumber,
      email, phone, address, city, postalCode, age, role
    })
    .then(result => {
      console.log(result.insertedCount + " document(s) inserted");
      return result;
    })
    .catch(error => {
      throw new Error("Could not insert the document: " + error);
    });
}

// Updates a user based on id
export function updateData(id, userName, firstName, lastName, socialSecurityNumber,
  phone, email, age, address, city, postalCode, role) {
  console.log('IN DATABASE', id)
  return dbConnection
    .collection("Users")
    .updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          socialSecurityNumber: socialSecurityNumber,
          phone: phone,
          email: email,
          age: age,
          address: address,
          city: city,
          postalCode: postalCode,
          role: role
        }
      }
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

// Deletes a user based on id
export function deleteData(id) {
  console.log('ID', id)

  return dbConnection
    .collection("Users")
    .deleteOne({ _id: new ObjectId(id) })
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

