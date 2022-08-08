import {useDispatch} from "react-redux";
import {cartActions} from "../../features/cart/CartSlice";

const CartItem = (props) => {
    const { id, title, price, quantity, totalPrice } = props.item
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({id, title, price}))
    }
    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }
    return (
        <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button onClick={incrementItem} className="btn btn-outline-dark">+</button>
                {quantity}
                <button onClick={decrementItem} className="btn btn-outline-dark">-</button>
            </td>
            <td>{totalPrice}</td>
        </tr>
    )
}

export default CartItem;