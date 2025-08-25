import { CartItem } from "./CartItem"

export function Cart({ cartItems, onClickTrash }) {
    return (
    <>
    <h2 className="dark:text-white text-4xl font-bold mb-5">Cart</h2>
    <ul className="space-y-5">
        {cartItems.map((cartItem) => (
        <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
        </li>
    ))}
    </ul>
    </>
    );
}