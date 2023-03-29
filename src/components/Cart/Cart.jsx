import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import './Cart.scss';

// Material-UI icon
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
  // access the cart state (redux store)
  const products = useSelector((state) => state.cart.products);

  // hook to dispatch actions: removeItem, resetCart
  const dispatch = useDispatch();

  const getSubtotal = () => {
    let subtotal = 0;
    products.forEach((item) => (subtotal += item.quantity * item.price));
    return subtotal.toFixed(2);
  };

  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Long Sleeve Graphic T-Shirt',
  //     desc: 'Graphic T-Shirt',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Beanie',
  //     desc: 'Yellow Beanie',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  return (
    <div className="cart">
      <h1>My Bag</h1>
      {products?.map((item) => (
        <div key={item.id} className="item">
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />

          <div className="content">
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>

              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>

            <CloseIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${getSubtotal()}</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
