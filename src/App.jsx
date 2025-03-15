import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "./assets/Pages/DashBoard";
import SideMenu from "./Components/SideMenu";
import CategoryProducts from "./assets/Pages/CategoryProducts";
import { useEffect, useState } from "react";
import Categories from "./assets/Pages/Categories";
import { useCart, useCategories } from "./Store";
import axios from "axios";
import SideCart from "./Components/SideCart";

export default function App() {
//   const [categories] = useState([
//     { name: "Cold Drinks" , path: "cold" , price: 500 },
//     { name: "Burgers" , path: "burger" , price: 600},
//     { name: "Pizza" , path: "pizza" , price: 500},
//     { name: "Wok" , path: "wok" , price: 600},
//     { name: "Deserts" , path: "desert" , price: 650},
//     { name: "Pasta" , path: "pasta" , price: 300},
// ]);
  const { domain,setData } = useCategories();
  const [acceptedRoutes ,setAcceptedRoutes] = useState(["/", "/orders", "/settings", "/bills"]); 
  const [path,setPath] = useState();
  const {cartIndex} = useCart();
  const Location = useLocation();

  useEffect(() => {
    setPath(Location.pathname);
  }, [Location.pathname]);

  useEffect(() => {
    let url = domain + "/api/categories";
    axios.get(url, { params: {populate: "*"}}).then((res) => {
      let cats = res.data.data;
      let routes = cats.map(el => '/orders/' + el.documentId);
      setAcceptedRoutes([...acceptedRoutes , ...routes]);
      setData(cats);
    })
  })

  return (
    <div className="App col-12 d-flex">
      {cartIndex && <SideCart />}
      {
        acceptedRoutes.includes(path) && <SideMenu />
      }
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/orders" element={<Categories />}/>
          <Route path="/orders/:id" element={<CategoryProducts />}/>
          <Route path="/settings" element={<h1>Settings</h1>}/>
          <Route path="/bills" element={<h1>Bills</h1>}/>
          <Route path="/login" element={<h1>Login Page</h1>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
    </div>
  )
};



