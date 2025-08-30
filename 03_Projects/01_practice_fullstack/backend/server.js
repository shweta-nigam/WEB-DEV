import express from "express"

const app = express()

const port = process.env.PORT ?? 3000

// app.get("/",(req,res) => {
//    res.send("Hello there!")
// })

app.get("/api/jokes", (req,res)=>{
const jokes = {
  "jokes": [
    {
      "id": 1,
      "title":" This is a joke",
      "text": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 2,
       "title":" This is another joke",
      "text": "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings."
    },
    {
      "id": 3,
       "title":" This is a joke",
      "text": "How do you comfort a JavaScript bug? You console it."
    },
    {
      "id": 4,
       "title":" This is another joke",
      "text": "Why did the developer go broke? Because he used up all his cache."
    },
    {
      "id": 5,
       "title":" This is another joke",
      "text": "What’s a programmer’s favorite hangout place? The Foo Bar."
    }
  ]
}


res.send(jokes)
})

app.listen(port, ()=> {
    console.log("App is listening on port", port)
})
