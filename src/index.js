import express from "express"
import router from "../routes.js"
import { connectDB } from "./db/index.js"
import bodyParser from 'body-parser';
const app = express()


app.use(express.json({}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",router)


app.listen(process.env.PORT ,process.env.HOST , ()=> {
    connectDB();
    console.log(`\n ⚙️  App is listening on port http://${process.env.HOST}:${process.env.PORT}`)
})




