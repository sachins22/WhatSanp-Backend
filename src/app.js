import express from "express"
import bodyParser from 'body-parser';

const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Mobile number  routes

import  numberRouter  from './routes/MobileNo.routes.js'
app.use("/api", numberRouter)

// Name routes 
import  nameRouter  from './routes/Name.routes.js'

app.use("/api", nameRouter);

// images routes

import  imageRouter  from './routes/image.routes.js';
app.use("/api", imageRouter);

export{app}