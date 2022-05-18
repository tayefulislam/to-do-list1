const express = require("express");
const cors = require('cors')

require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000;


//middel ware
app.use(cors())
app.use(express.json())


//date base




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todoen1.au7oa.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
        await client.connect()

        const taskCollection = client.db("toToEn1").collection("tasks");


        app.post('/addTask', async (req, res) => {

            const task = req.body;
            const result = await taskCollection.insertOne(task)
            res.send(result)

        })

        app.get('/tasks/:email', async (req, res) => {

            const email = req.params.email

            const result = await taskCollection.find({ email: email }).toArray()
            res.send(result)
        })


    }

    finally {

    }

}

run().catch(console.dir)




app.get('/', (req, res) => {
    res.send("TO Do En Server is running")
})



app.listen(port, () => {
    console.log(`server is runnting add . ${port}`)
})