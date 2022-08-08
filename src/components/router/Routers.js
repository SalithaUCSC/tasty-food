import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Cart from "../cart/Cart";
import Food from "../food/Food";
import FoodItem from "../food/FoodItem";
import Checkout from "../cart/Checkout";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/home'}/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/food'} element={<Food/>}/>
            <Route path={'/food/:id'} element={<FoodItem/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    );
}

export default Routers;