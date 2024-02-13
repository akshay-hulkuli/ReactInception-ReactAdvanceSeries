import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div>
      <h2 className='text-center p-3 text-2xl bold'>Welcome to the cart</h2>
      {cartItems.length > 0 ? (
        <div className='mx-[25%] my-6 bg-white flex flex-col items-end'>
          <button className='px-3 py-1 my-2 mx-4 border-solid border-2 border-red-900 rounded-xl' onClick={handleClearCart}>
            Clear Cart
          </button>
          {cartItems.map(item => {
            return <Item item={item} isAddButtoNeeded={false} />
          })}
        </div>
      ) : (
        <h2 className='text-center p-3 text-xl bold'>
          Cart feels lightweight add something to it.
        </h2>
      )}
    </div>
  )
}

export default Cart
