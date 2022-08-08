import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {cartActions} from "../../features/cart/CartSlice";
import {Link} from "react-router-dom";

const Cart = () => {
    const items = useSelector(state => state.cart.cartItems)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch();
    const clearCart = () => {
        dispatch(cartActions.clear({}))
    }
    return (
        <div className="container">
            <h3>Shopping Cart</h3>
            <hr/><br/>
            {
                items.length > 0 ?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((cItem, index) => (
                                    <CartItem item={cItem} key={index}/>
                                ))
                            }
                        </tbody>
                    </table>
                : 'Cart is Empty'
            }
            {
                items.length > 0 ?
                    <div className="container" style={{marginTop: '50px'}}>
                        <div className="row">
                            <div className="col-lg-8">
                                <button onClick={clearCart} style={{marginLeft: '-10px', marginRight: '10px'}} className="btn btn-outline-danger">Clear Cart</button>
                                <Link to={"/checkout"} className="btn btn-outline-primary">Checkout</Link>
                            </div>
                            <div className="col-lg-4" style={{textAlign: 'right'}}>
                                <h4>Total Items: {totalQuantity}</h4>
                                <br/>
                                <h3>Total: {totalAmount}</h3>
                            </div>
                        </div>
                    </div> 
                : ''
            }
        </div>
      );
}

export default Cart;