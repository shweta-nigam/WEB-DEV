// web cohort video- -> node
const http = require("http")

const server = http.createServer(function(req,res){
    console.log("Incoming req...........");
    console.log(req.method);
    console.log(req.url);
    
    res.end(`this is response for terminal 2`)
})

server.listen(6000,function(){
    console.log("Server started at 6000");
    
})
// hints:
// homework : -- make basic express , with GET and POST method
// rea.method and req.url  / magical Layer

 const c = require('cojortjs')

 c.getCallPr("/", function(){

 })

 c.suno(8000).aurPhir(()=> console.log)




 // 

 const http2 = require("http")



const server1 = http2.createServer(function(req,res){
 switch (key) {
    case 'GET':
        {
            if(req.url === '/') return res.end('HomePage');
            if(req.url === '/contact-us') return res.end('Contact Us Page')
            if(req.url === '/about-us') return res.end('About Us Page')
        }
        break;
        case 'Post':
            {
               
            }
 
    default:
        break;
 }
 res.end('This is response')
})

server1.listen(8080, function(){
    console.log("Sever started");
    
})

//server wrappers in node.js : -
//  express
// koa (by express team, lightweight)
// hono
// fastify
