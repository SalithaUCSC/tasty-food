import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const items = useSelector(state => state.cart.cartItems)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <div className="container">
            <h3>Shopping Cart</h3>
            <hr/><br/>
            {
                items.length > 0 ?
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((cItem, index) => (
                                    <CartItem item={cItem}/>
                                ))
                            }
                        </tbody>
                    </table>
                : 'Cart is Empty'
            }
            {
                items.length > 0 ?
                    <div>
                        <br/>
                        Total Items Count: {totalQuantity}
                        <br/>
                        Cart Total: {totalAmount}
                    </div> 
                : ''
            }
        </div>
      );
}

export default Cart;