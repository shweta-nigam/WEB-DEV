import express from "express";

const app = express();

const port = process.env.PORT ?? 3000;

// http://localhost:3000//api/products?search=Smartphone 

app.get("/api/products", (req, res) => {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/150?text=Headphones",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.0,
      image: "https://via.placeholder.com/150?text=Smartphone",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 49.99,
      image: "https://via.placeholder.com/150?text=Mouse",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "https://via.placeholder.com/150?text=Keyboard",
    },
    {
      id: 5,
      name: "4K Monitor",
      price: 299.99,
      image: "https://via.placeholder.com/150?text=Monitor",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://via.placeholder.com/150?text=Speaker",
    },
    {
      id: 7,
      name: "Smartwatch",
      price: 199.99,
      image: "https://via.placeholder.com/150?text=Smartwatch",
    },
    {
      id: 8,
      name: "Laptop Stand",
      price: 39.99,
      image: "https://via.placeholder.com/150?text=Stand",
    },
    {
      id: 9,
      name: "External SSD",
      price: 129.99,
      image: "https://via.placeholder.com/150?text=SSD",
    },
    {
      id: 10,
      name: "Webcam",
      price: 79.99,
      image: "https://via.placeholder.com/150?text=Webcam",
    },
  ];

  
if(req.query.search){
  console.log(req.query.search); 

  const filterProducts = products.filter((product) => product.name.includes(req.query.search))
  res.send(filterProducts)
  return; // after sending response it is important to exist the function otherwise it will crash the app.
}


  setTimeout(()=>{
    res.send(products)
  },3000)

  
});

app.listen(port, () => {
  console.log("app is listening on port", port);
});
