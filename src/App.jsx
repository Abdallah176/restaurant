import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "./assets/Pages/DashBoard";
import SideMenu from "./Components/SideMenu";
import CategoryProducts from "./assets/Pages/CategoryProducts";
import { useEffect, useState } from "react";
import Categories from "./assets/Pages/Categories";
import { useCategories } from "./Store";

export default function App() {
//   const [categories] = useState([
//     { name: "Cold Drinks" , path: "cold" , price: 500 },
//     { name: "Burgers" , path: "burger" , price: 600},
//     { name: "Pizza" , path: "pizza" , price: 500},
//     { name: "Wok" , path: "wok" , price: 600},
//     { name: "Deserts" , path: "desert" , price: 650},
//     { name: "Pasta" , path: "pasta" , price: 300},
// ]);
  const {data: categories} = useCategories();
  let catsRoutes = categories.map((el) => { return "/orders/" + el.path});
  let acceptedRoutes = ["/", "/orders", "/settings", "/bills" , ...catsRoutes]
  const [path,setPath] = useState();
  const Location = useLocation();

  useEffect(() => {
    setPath(Location.pathname);
  }, [Location.pathname]);

  return (
    <div className="App col-12 d-flex">
      {
        acceptedRoutes.includes(path) && <SideMenu />
      }
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/orders" element={<Categories />}/>
          <Route path="/orders/:catName" element={<CategoryProducts />}/>
          <Route path="/settings" element={<h1>Settings</h1>}/>
          <Route path="/bills" element={<h1>Bills</h1>}/>
          <Route path="/login" element={<h1>Login Page</h1>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
    </div>
  )
};



