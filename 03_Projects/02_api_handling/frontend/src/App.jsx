import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // interview ques:-
  // axios without dot then, how is it possible ?

  // It is possible to use axios with async-await, but useEffect is a hook and we cannot use it here! so this is not possible.
  // useEffect(async() => {
  //  const response = await axios.get(".api/products")
  // },[])

  // solution:-  Best and simple way is to use an IIFE function, And make the arrow function async
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get("/api/products");
  //   })();
  // }, []);

  // same code ,but used by professional in production. ";" semi colon here is used so that code runner can differentiate between IIFE and other code. For safety and good practice.

  // useEffect(() => {
  //   ;(async () => {
  //     const response = await axios.get("/api/products");
  //     console.log("Response ---> " , response.data);         // You would see data 2 times as data mounts 2 times in dev but not in prod
  //     setProducts(response.data)

  //   })();
  // }, []);

  // Handling edge cases
  useEffect(() => {
    const controller = new AbortController(); //  cancels old request
    ;(async () => {
      try {
        setLoading(true);
        setError(false); // in case setError has become true
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        // problem: signal of axios cancels old request but it sends them in catch
        console.log(response.data);
        setProducts(response.data);
        setLoading(false); // nothing is loading here, All work is done till here
      } catch (error) {
         if (axios.isCancel(error)) {  // solution of signal of axios  
          console.log("Request cancelled", error.message);
          return; // exist 
        }
        setError(true);
        setLoading(false);
        if (axios.isCancel(error)) {
          // solution of signal of axios
          console.log("Request cancelled", error.message);
          return; // exist //
        }
      }
    })();

    // cleanup // unmount the component // search more
    return () => {
      controller.abort();
    };
  }, [search]);

  // const [products, error, loading] = customReactQuery("/api/products")

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <h1>Hello </h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Handling conditions in with only one return keyword */}
      {loading && <h1>Loading...</h1>}{" "}
      {/* renders h1 only when loading is true */}
      {error && <p>Something went wrong</p>}
      <h2>Number of Products are: {products.length} </h2>
    </>
  );
}

export default App;

// custom api handling function   // also provided by tanstack query
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false); // in case setError has become true
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false); // nothing is loading here, All work is done till here
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [products, error, loading];
// };

// race condition , debouncing , deep throttling  ---- search more
