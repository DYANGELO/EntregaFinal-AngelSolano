import { HiMiniShoppingCart } from "react-icons/hi2";

function CartWidget() {
  return (
    <div className='Carrito-C'>
      <HiMiniShoppingCart size="50px"/>
      <span className='Cart-Count'>0</span>
    </div>
  )
}


export default CartWidget
