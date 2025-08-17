// Trying to make http server like express 

const http = require("http")

class windJS{
    constructor(){
        this.routes = [];   
    }

    get(path,handler){
        this.routes.push({ method : "GET", path, handler})
    }
    post(path,handler){
        this.routes.push({ method : "POST", path, handler})
    }

    listen(port,callback){
        const server = http.createServer((rea,res)=>{
            const {method, url} = req;

            const route =  this.routes.find(r => r.method === method && r.path === url);

            if(route){
                if(method === "POST"){
                    let body = "";
                    req.on("data", chunk => {body += chunk});
                    req.on("end",() => {
                        req.body = body;
                        route.handler(req,res);
                    } );
                } else {
                    route.handler(req,res);
                }
            } else {
                res.statusCode = 404;
                res.end("404 Not Found")
            }
        })
        server.listen(port, callback)
    }
}

module.exports = windJS;