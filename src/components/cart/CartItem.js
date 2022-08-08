
const CartItem = (props) => {
    const { id, title, price, quantity, totalPrice } = props.item
    return (
        <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
        </tr>
    )
}

export default CartItem;