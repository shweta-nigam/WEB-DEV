import windJS from "./windJs";
const app = new windJS();

app.get("/",(req,res) => {
    res.end("my windJs")
})

app.get("/about", (req,res)=>{
    res.end("this is about page")
})

app.post("/submit", (req,res)=>{
    res.end(`Received POST data : ${req.body} `)
})

app.listen(8080, () => {
    console.log(`windJs server started at http://localhost:/8080`);
})