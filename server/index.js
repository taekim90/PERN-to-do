const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware
app.use(cors());

app.use(express.json())

// ROUTES

// create a todo
app.post("/todos", async (req,res) => {
    // await
    try {
        // console.log(req.body)
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        
        res.json(newTodo)
    } catch (error) {
        // console.error(error.message)
        console.log(error)
    }
})

// get all todos

// get a todo

// update a todo

// delete a todo


app.listen(8000, () => {
    console.log("server on port 8000")
})