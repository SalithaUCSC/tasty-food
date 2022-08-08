import { Route, Routes, Navigate } from "react-router-dom";
import FoodTtems from "../food/Food";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Cart from "../cart/Cart";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/home'}/>}/>
            <Route path={'/home'} element={<Home/>}>Home</Route>
            <Route path={'/food'} element={<FoodTtems/>}>FoodTtems</Route>
            <Route path={'/contact'} element={<Contact/>}>Contact</Route>
            <Route path={'/cart'} element={<Cart/>}>Cart</Route>
            <Route path={'/login'} element={<Login/>}>Login</Route>
        </Routes>
    );
}

export default Routers;