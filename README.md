# IIIT-L Placement Portal

Clone the project and create a .env file in the root folder.

Contents of the file:

``` text
SECRET = "iamgonnakeepthisverysecret"
MONGO_URI = mongodb+srv://<username>:<password>@placement-portal.8qvst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Replace \<username\> with your mongodb username and \<password\> with your password

``` bash
npm run dev
```

This will start the portal on localhost 3001
