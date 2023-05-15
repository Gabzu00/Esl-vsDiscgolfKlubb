# Esl-vsDiscgolfKlubb
The applicatio is built with react for the frontend and node.js with express for the backend. For the database we use mongodb and we chose to use mongoclient instead of mongoose as we tought it was easier. 
We have also used bootrstrap to make the website responsite. In order to use our site follow this link --> https://eslovsdiscgolf.onrender.com/

## Running the webiste locally
If you want to run the site localy clone the repo and run npm install. You also need to include a .env file and enter the following information. 

```
dbUrl = "mongodb+srv://Samuel:HY54T30ClyWnomle@fullstackproject.i9iyxms.mongodb.net/FullstackProject"
PORT = "3000"
JWT_SECRET = 'lkjahsdfkhaslkjdfhlak82o345yu9823yhasldkjhfapöoiwyu5p9283o4y'
````
Then you need to change the vite.config file so the the contetnt looks like this --> 

```
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* server: {
    proxy: {
      "/*": "https://eslovsdiscgolf.onrender.com/"
    }
  } */
})
```

<br />
Then you also need to change the DEV_VARIABLE to http://localhost:3000 and add it to all the fetches in the project. It should look somthing like this -->

```
const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
```
      
      
On the site you receive information about the discgolf club in Eslöv and how to become a member. The site is very straight forward. 
